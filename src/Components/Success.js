import React from "react";

function Success() {
  return (
    <div className="purchase-success">
      <h1>Order Placed Successfully!</h1>
      <p>You will be emailed when your order ships!</p>
      <a id= "naah-button" className="link-btn"href="/merch">Back to Merch Page</a>
    </div>
  );
}

export default Success;
