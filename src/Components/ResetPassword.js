import React from "react";

function ResetPassword() {
  function handleSubmit() {
    alert("submit");
  }
  return (
    <div className="forget-password">
      <h1>Reset your Password!</h1>
      <p>Enter a new password below.</p>
      <form className="forget-password-form" onSubmit={handleSubmit}>
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm New Password" />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
}

export default ResetPassword;