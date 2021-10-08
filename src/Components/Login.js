import React, { useState } from "react";
import {
  requestUserData,
  requestUserFavorites,
} from "./../redux/actions/userActions.js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const { REACT_APP_API_URL } = process.env;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  async function loginUser(e) {

    if (e) e.preventDefault();
    try {
      const res = await axios.post(
        `${REACT_APP_API_URL}auth/login`,
        { username, password }
      );
      const accessToken = res.data.accessToken;
      if (res.status === 200) {
        await dispatch(requestUserData(username, accessToken));
        await dispatch(requestUserFavorites(res.data.user._id));
        history.push("/");
      }
    } catch (e) {
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div>
      <form className="login-form" onSubmit={(e) => loginUser(e)}>
        <div className="login-title">
          <h2>Welcome Back!</h2>
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </form>
      <br></br>
      <div className="login-links">
        <a href="/forget-password">Forget password?</a>
        <h5>Don't have an account yet?</h5>
        <a href="/register">Register for an Account</a>
      </div>
    </div>
  );
}

export default Login;
