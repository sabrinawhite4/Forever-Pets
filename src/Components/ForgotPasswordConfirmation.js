import React from "react";

function ForgotPasswordConfirmation() {
  return (
    <div className="forget-password-confirmation">
      <h1>Email has been sent to:</h1>
      <h2>email</h2>
      <h3>Please check your email to reset your password!</h3>
      <a href="/login">Login</a>
    </div>
  );
}

export default ForgotPasswordConfirmation;
