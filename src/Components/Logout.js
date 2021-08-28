import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Logout() {
  let history = useHistory();

  function handleLogout() {
    axios.post('http://localhost:4000/api/auth/logout')
    history.push("/logout-confirmation");
  }
  function handleNevermind() {
    history.push("/");
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
