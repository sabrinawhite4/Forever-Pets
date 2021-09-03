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
        <img
          src="https://d1wqzb5bdbcre6.cloudfront.net/b9650317970a1ff6610cc6302ed7eb6d02174be07841fe23cc9f1eeea4469655/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536c4e444d58564561564a6c624764796355356f66475a735833526c6333526665545a754f446c7a656d6c7951585a6a5a306432525642504d6a5257567a6c783030734e3775596c536a"
          alt="Puppy Plush"
        />
        <h3>$20</h3>
        <button
          className="cart-btn"
          onClick={() => addProductToCart("price_1JSVzYDiRelgrqNhsfif2opS")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Kitty Plushie</h1>
        <img
          src="https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/HN-7299-2.jpg?v-cache=1625220540"
          alt="kitten Plush"
        />
        <h3>$20</h3>
        <button
          className="cart-btn"
          onClick={() => addProductToCart("price_1JSYQkDiRelgrqNh9V1IoZGy")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1> T-shirt</h1>
        <img
          src="https://stripe-camo.global.ssl.fastly.net/071543f70a311eea591f2562f608391559a9a101191dd6f8db9307cfa7fb20e1/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536c4e444d58564561564a6c624764796355356f66475a735833526c633352665a6d6b794d584e4756545232576b5643546e51324d7a6c336245394f545767313030764d305635624744"
          alt="T-shirt"
        />
        <h3>$35</h3>
        <button
          className="cart-btn"
          onClick={() => addProductToCart("price_1JSYRBDiRelgrqNh3M35KmSh")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1> Hoodie</h1>
        <img
          src="https://stripe-camo.global.ssl.fastly.net/095caa56a27dc38b96d56b1a3738ba36d1cca728536ee985a1c9f4514270f887/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536c4e444d58564561564a6c624764796355356f66475a735833526c63335266635574435746704d576d5a6c54545a7a5a326877543370476330647254475256303056496c794f305679"
          alt="hoodie"
        />
        <h3>$55</h3>
        <button
          className="cart-btn"
          onClick={() => addProductToCart("price_1JSYS2DiRelgrqNhmS285uAo")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Sunglasses</h1>
        <img
          src="https://d1wqzb5bdbcre6.cloudfront.net/8856c95c9caedf714471bec0e7aa7673e0b69a1717613013162bf0160cfecd39/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536c4e444d58564561564a6c624764796355356f66475a735833526c633352665a465a58636d35464f4849794e6c4230576a46686157704a4e56643356464e61303048494b6754594f57"
          alt="sunglasses"
        />
        <h3>$10</h3>
        <button
          className="cart-btn"
          onClick={() => addProductToCart("price_1JSYSNDiRelgrqNhoxUQyRli")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1> Baseball Cap</h1>
        <img
          src="https://stripe-camo.global.ssl.fastly.net/cafbf62fd206ec61d70099db6ca57560a1c039b2ab4caa80bd041c200eafc0a5/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536c4e444d58564561564a6c624764796355356f66475a735833526c633352665a566c57616b7449627a4644555768765a474d33516c6c4b626d63354e32396e3030744f4b74326f3444"
          alt="cap"
        />
        <h3>$15</h3>
        <button
          className="cart-btn"
          onClick={() => addProductToCart("price_1JSYSiDiRelgrqNhskdKdSKE")}
        >
          Add To Cart
        </button>
      </div>
      <div className="merch-page__content">
        <h1>Shot Glass</h1>
        <img
          src="https://d1wqzb5bdbcre6.cloudfront.net/69a19d685194f7ba4e7a2134383ee1d3986b40507432c6eac08e43d21c1a2e62/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536c4e444d58564561564a6c624764796355356f66475a735833526c633352665344565155466844574570775a48466a546b4978516a5670536b52305a6a593130303371313252625676"
          alt="shot glass"
        />
        <h3>$5</h3>
        <button
          className="cart-btn"
          onClick={() => addProductToCart("price_1JSYYXDiRelgrqNhmnz808DY")}
        >
          Add To Cart
        </button>
      </div>
      <div className="cart-counter">
        <h1>Cart Items: {cartCounterTotal}</h1>
        <button className="cart-btn" onClick={createCheckoutSession}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default MerchPage;
