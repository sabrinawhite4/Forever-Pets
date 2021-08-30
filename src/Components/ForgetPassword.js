import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const history = useHistory();
  function handleSubmit() {
    axios.post("http://localhost:4000/api/forgot-password", { email })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          history.push(`/forget-password-confirmation?email=${email}`);
        }
    });
  }
  return (
    <div className="forget-password">
      <h1>Forgot Your Password?</h1>
      <p>Enter your email address below to reset your password.</p>
      <div className="forget-password-form" >
        <input onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your Email" />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </div>
    </div>
  );
}

export default ForgetPassword;
