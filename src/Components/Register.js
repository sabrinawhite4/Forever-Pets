import React, { useState } from "react";
import axios from "axios";
import Background from "./shared/Background.js";
import Welcome from "./Welcome.js";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isOnStepOne, setIsOnStepOne] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");

  function handleRegister() {
    axios.post("http://localhost:4000/api/auth/register", {
      email: email,
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      age: age,
      phone_number: phone
    });
    return window.location.href = "/login";
  }

  function goToStepTwo() {
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    } else if (!email.includes("@")) {
      alert("Email must be valid");
      return;
    } else if (!username) {
      alert("Username must be valid");
      return;
    }
    setIsOnStepOne(false);
  }
  return (
    <Background>
      {isOnStepOne ? (
        <div className= "register-form">
          <h3> Create An Account</h3>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder=" Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
            />
          </div>
          <button
            onClick={goToStepTwo}
            className="login-btn"
            type="submit"
          >
            Continue
          </button>
        </div>
      ) : (
          <Welcome
            handleRegister = {handleRegister}
            firstName={firstName}
            lastName = { lastName }
            age = { age }
            phone = { phone }
            setFirstName = { setFirstName }
            setLastName = { setLastName }
            setAge = { setAge }
            setPhone = { setPhone }
          />
      )}
    </Background>
  );
}

export default Register;
