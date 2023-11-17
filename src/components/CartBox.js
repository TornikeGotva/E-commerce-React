import CartProducts from "./cartProduct";

export default function CartBox({
  showCart,
  holdDisplayCart,
  handleCloseCart,
  addCart,
  handleRemoveCartProduct,
  handleQuantityMin,
  handleQuantityPlus,
  quantity,
  handleProceedCheckout,
}) {
  return (
    showCart && (
      <section
        onMouseEnter={holdDisplayCart}
        onMouseLeave={handleCloseCart}
        className="cartbox"
      >
        <CartProducts
          addCart={addCart}
          handleRemoveCartProduct={handleRemoveCartProduct}
          handleQuantityMin={handleQuantityMin}
          handleQuantityPlus={handleQuantityPlus}
          quantity={quantity}
        />
        <button onClick={handleProceedCheckout} className="button">
          Proceed
        </button>
      </section>
    )
  );
}
