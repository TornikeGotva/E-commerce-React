import SingleProduct from "./SingleProduct";

export default function Product({ display, handleAddCart, addCart }) {
  return (
    <>
      {display.map((product, i) => (
        <SingleProduct
          product={product}
          key={i}
          handleAddCart={handleAddCart}
          addCart={addCart}
        />
      ))}
    </>
  );
}
