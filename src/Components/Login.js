import React, { useState, useEffect } from "react";
import { requestUserData } from "./../redux/actions/userActions.js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Background from "./shared/Background.js";
import axios from "axios";
import "./Login.scss";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    // if (res.data.loggedIn) this.props.history.push("/");
  })

  async function loginUser(e) {
    if (e) e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", { username, password });
      console.log(res.data)
      if (res.status === 200) {dispatch(requestUserData(res.data.username)); history.push("/") };
    } catch (e) {
      alert("Login failed. Please try again.");
    }
  }

    return (
      <Background>
        <form className="login-form" onSubmit={(e) => loginUser(e)}>
          <div>Welcome Back!</div>
          <div>Log in!</div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success btn-lg" type="submit">
            Log in
          </button>
        </form>
        <a href='/'>Forget password?</a>
        <br></br>
        <a href='/register'>Register for an Account</a>
      </Background>
    ); 
  }

export default Login;
