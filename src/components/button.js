
export default function Button({ children, handleAddCart, product }) {
  return (
    <button onClick={() => handleAddCart(product)} className="button">
      {children}
    </button>
  );
}
