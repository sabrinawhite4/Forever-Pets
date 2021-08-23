
import React, { useState }from 'react';
import { useHistory } from 'react-router-dom';
import Background from "./shared/Background.js";

function Register() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    let history = useHistory();

    return (
      <Background>
        <form className="login-form">
          <div> Create An Account</div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder=" Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button className="btn btn-success btn-lg" type="submit">
            Continue
          </button>
        </form>
        <br></br>
        <a href="/#/login">Already have an account?</a>
      </Background>
    );
};

export default Register;