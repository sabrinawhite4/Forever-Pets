import React from "react";

function Logout() {
  function handleLogout() {
    alert("submit");
  }
  function handleNevermind() {
    alert("nevermind");
  }
  return (
    <div className="forget-password">
      <h3>Oh no! You're leaving... Are you sure?</h3>
      <button onClick={handleNevermind}>Naah, Show Me More Animals!</button>
      <button onClick={handleLogout}>Yes, Log Me Out</button>
    </div>
  );
}

export default Logout;
