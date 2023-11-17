import CartQuantityProducts from "./cartQuantityProducts";

export default function CartProducts({
  addCart,
  handleRemoveCartProduct,
  quantity,
  handleQuantityPlus,
  handleQuantityMin,
}) {
  return (
    <ul className="cartproducts">
      {addCart.map((product, i) => {
        return (
          <div key={product.id}>
            <li className="cartlist">
              <span>${Math.floor(product.price * quantity)}</span>
              <CartQuantityProducts
                quantity={quantity}
                handleQuantityMin={handleQuantityMin}
                handleQuantityPlus={handleQuantityPlus}
                product={product}
                addCart={addCart}
              />
              <span className="cart-title">
                {product.title.slice(0, 15)}..{" "}
              </span>
              <img
                className="cart-image"
                src={product.image}
                alt={product.title}
              />
              <button
                onClick={() => handleRemoveCartProduct(product.id)}
                className="cart-x"
              >
                X
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
