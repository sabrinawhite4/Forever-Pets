import React, { useState } from "react";
import axios from "axios";
import * as QueryString from "query-string";
import { useLocation, useHistory } from "react-router-dom";

function ResetPassword() {
  const location = useLocation();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const params = QueryString.parse(location.search);
  function handleSubmit() {
    if (password === confirmPassword) {
      axios
        .put(
          `${process.env.REACT_APP_API_URL}auth/reset-password/${params.user}`,
          {
            password,
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("Password changed successfully");
            history.push("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    } else {
      alert("Passwords do not match");
    }
  }
  return (
    <div className="forget-password">
      <h1>Reset your Password!</h1>
      <p>Enter a new password below.</p>
      <div className="forget-password-form">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="New Password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm New Password"
        />
        <button className="login-btn" onClick={handleSubmit} type="submit">
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
