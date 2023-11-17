import CartProducts from "./cartProduct";

export default function ProceedCheckout({
  addCart,
  quantity,
  handleQuantityMin,
  handleQuantityPlus,
  handleRemoveCartProduct,
  handleProceedCheckout,
}) {
  return (
    <>
      <button onClick={handleProceedCheckout} className="continue-shopping">
        Continue Shopping...
      </button>
      <section className="proceed-cart">
        <CartProducts
          addCart={addCart}
          quantity={quantity}
          handleRemoveCartProduct={handleRemoveCartProduct}
          handleQuantityMin={handleQuantityMin}
          handleQuantityPlus={handleQuantityPlus}
        />
      </section>
    </>
  );
}
