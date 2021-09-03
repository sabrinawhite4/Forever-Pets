import React from "react";

function Cancel() {
  return (
    <div className="purchase-cancelled">
      <h1>Order has been cancelled!</h1>
      <p>
        Forgot to add something to your cart? Shop around and come back to pay!
      </p>
      <a id="naah-button" className="link-btn" href="/merch">
        {" "}
        Go Back to Merch Page?
      </a>
    </div>
  );
}

export default Cancel;
