import Button from "./button";

export default function SingleProduct({ product, handleAddCart, addCart }) {
  const id = crypto.randomUUID();

  return (
    <div key={id} className="product">
      <img className="image" src={product.image} alt={product.title} />
      <p> {product.title}</p>
      <h3>${product.price}</h3>
      <Button addCart={addCart} handleAddCart={handleAddCart} product={product}>
        ADD TO CART
      </Button>
    </div>
  );
}
