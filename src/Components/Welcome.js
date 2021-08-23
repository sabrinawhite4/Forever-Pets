import React, { useState } from "react";
import Background from "./shared/Background.js";

function Welcome() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  
  async function registerUser() {
  }
  return (
    <Background>
      <form className="login-form">
        <div> Thank you!</div>
        <br></br>
        <div>
          We just need a couple more pieces of information before you can find
          your forever pet!
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Accept Terms & Conditions</label>
          <input
            type="checkbox"
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="btn btn-success btn-lg" type="submit">
          Create Account
        </button>
        <a href='/#/register'> Go Back</a>
      </form>
    </Background>
  );
}

export default Welcome;
