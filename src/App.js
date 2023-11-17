import "./index.css";
import { useState, useEffect } from "react";

import Product from "./components/product";
import Navbar from "./components/Navbar";
import CartBox from "./components/CartBox";
import ProceedCheckout from "./components/ProceedCheckout";

export default function App() {
  const [display, setDisplay] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addCart, setAddCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [proceed, setProceed] = useState(true);

  function handleDisplayCart() {
    setShowCart((show) => !show);
  }

  function handleProceedCheckout() {
    setProceed((show) => !show);
  }

  function handleDisplayCartHold() {
    setShowCart(true);
  }

  function handleCloseCart() {
    setShowCart(false);
  }

  function handleAddCart(product) {
    if (!addCart.some((d) => product.id === d.id))
      setAddCart((addCart) => [...addCart, product]);
  }

  function handleRemoveCartProduct(id) {
    setAddCart(addCart.filter((a) => a.id !== id));
  }

  function handleQuantityPlus(product) {
    setQuantity((quantity) => quantity + 1);
  }

  function handleQuantityMin(product) {
    if (quantity <= 1) return;
    setQuantity((quantity) => quantity - 1);
  }

  useEffect(
    function () {
      async function getAPI() {
        const res = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const data = await res.json();

        setDisplay(data);

        console.log(data);
      }
      getAPI();
    },
    [display]
  );

  return (
    <div className="container">
      <Navbar
        handleProceedCheckout={handleProceedCheckout}
        setShowCart={handleDisplayCart}
        setCloseCart={handleCloseCart}
      >
        <CartBox
          showCart={showCart}
          holdDisplayCart={handleDisplayCartHold}
          handleCloseCart={handleCloseCart}
          addCart={addCart}
          handleRemoveCartProduct={handleRemoveCartProduct}
          quantity={quantity}
          handleQuantityMin={handleQuantityMin}
          handleQuantityPlus={handleQuantityPlus}
          handleProceedCheckout={handleProceedCheckout}
        />
      </Navbar>

      {proceed && (
        <Main>
          <Product
            display={display}
            handleAddCart={handleAddCart}
            addCart={addCart}
          />
        </Main>
      )}

      {!proceed && (
        <ProceedCheckout
          addCart={addCart}
          handleRemoveCartProduct={handleRemoveCartProduct}
          quantity={quantity}
          handleQuantityMin={handleQuantityMin}
          handleQuantityPlus={handleQuantityPlus}
          handleProceedCheckout={handleProceedCheckout}
        ></ProceedCheckout>
      )}
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
