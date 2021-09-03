import React from 'react';

function LogoutConfirmation() {

  return (
    <div className="logout-confirmation">
          <h1>You are logged out! Have a great day!</h1>
          <p>The animals miss you! Log back in?</p>
      <a className= "login-btn" href='/login'>Login</a>
    </div>
  );
}

export default LogoutConfirmation;