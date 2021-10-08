import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import sadPuppy from "../shutterstock_1643959669.svg";

function Logout() {
  let history = useHistory();

  function handleLogout() {
    axios.post(`${process.env.REACT_APP_API_URL}auth/logout`);
    history.push("/logout-confirmation");
  }
  function handleNevermind() {
    history.push("/login");
  }
  return (
    <div className="logout-options">
      <img id="sad-puppy-pic" src={sadPuppy} alt="sad puppy" />
      <div>
        <h3>Oh no! You're leaving...</h3>
        <h3>Are you sure?</h3>
      </div>
      <div className="naah-div">
        <button id="naah-button" onClick={handleNevermind}>
          Naah, Show Me More Animals!
        </button>
      </div>
      <div>
        <button id="yes-button" onClick={handleLogout}>
          Yes, Log Me Out
        </button>
      </div>
    </div>
  );
}

export default Logout;
