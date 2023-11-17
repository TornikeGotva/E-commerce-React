export default function Navbar({
  children,
  setShowCart,
  setCloseCart,
  handleProceedCheckout,
}) {
  return (
    <nav className="navbar">
      <h1 onClick={handleProceedCheckout} className="logo">
        Shopify | Shop from your house!
      </h1>
      <span
        onMouseEnter={setShowCart}
        onMouseLeave={setCloseCart}
        className="cart"
      >
        🛒
      </span>
      {children}
    </nav>
  );
}
