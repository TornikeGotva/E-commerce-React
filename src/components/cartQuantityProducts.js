export default function CartQuantityProducts({
  handleQuantityMin,
  handleQuantityPlus,
  quantity,
}) {
  return (
    <div className="cart-quantity">
      <span onClick={handleQuantityMin} className="cart-quantity-cursor">
        ◀
      </span>
      <span>{quantity}</span>
      <span onClick={handleQuantityPlus} className="cart-quantity-cursor">
        ▶
      </span>
    </div>
  );
}
