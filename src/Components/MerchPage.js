import { useState } from "react";
import React from "react";
import axios from "axios";

function MerchPage() {
  const [cart, setCart] = useState([]);
  const [cartCounterTotal, setCartCounterTotal] = useState(0);

  const createCheckoutSession = async () => {
    await axios
      .post("http://localhost:4000/api/stripe", { cartArray: cart })
      .then(function (response) {
        return (window.location.href = response.data.url);
      });
  };

  function addToCart(priceId) {
    const product = {
      price: priceId,
      quantity: 1,
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10,
      },
    };
    setCart([...cart, product]);
  }

  function itemIsInCart(priceId) {
    const newCartArray = cart.map((product) => {
      return product.price;
    });
    return newCartArray.includes(priceId);
  }

  function updateProductQuantity(priceId) {
    const product = cart.find((product) => {
      return product.price === priceId;
    });
    product.quantity += 1;
    setCart([...cart, product]);
  }
  
  function addProductToCart(priceId) {
    if (itemIsInCart(priceId)) {
      updateProductQuantity(priceId);
    } else {
      addToCart(priceId);
    }
      setCartCounterTotal(cartCounterTotal + 1);
  }

  return (
    <div className="merch-page">
      <div className="merch-page__content">
        <h1>Puppy Plushie</h1>
        <button
          onClick={() => addProductToCart("price_1JSVzYDiRelgrqNhsfif2opS")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Kitty Plushie</h1>
        <button
          onClick={() => addProductToCart("price_1JSYQkDiRelgrqNh9V1IoZGy")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Forver Pets T-shirt</h1>
        <button
          onClick={() => addProductToCart("price_1JSYRBDiRelgrqNh3M35KmSh")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Forever Pets Hoodie</h1>
        <button
          onClick={() => addProductToCart("price_1JSYS2DiRelgrqNhmS285uAo")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Sunglasses</h1>
        <button
          onClick={() => addProductToCart("price_1JSYSNDiRelgrqNhoxUQyRli")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Forver Pets Baseball Cap</h1>
        <button
          onClick={() => addProductToCart("price_1JSYSiDiRelgrqNhskdKdSKE")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Forever Pets Shot Glass</h1>
        <button
          onClick={() => addProductToCart("price_1JSYYXDiRelgrqNhmnz808DY")}
        >
          Add To Cart
        </button>
      </div>
      <div className="cart-counter">
        <h1>Cart Items: {cartCounterTotal}</h1>
      </div>
      <br></br>
      <button onClick={createCheckoutSession}>Checkout</button>
    </div>
  );
}

export default MerchPage;
