import React from 'react';

function ForgetPassword() {
    function handleSubmit() {
        alert('submit');
    }
  return (
    <div className="forget-password">
      <h1>Forgot Your Password?</h1>
      <p>Enter your email address below to reset your password.</p>
      <form className="forget-password-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ForgetPassword;