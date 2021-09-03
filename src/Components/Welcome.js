import React from 'react';
import Background from "./shared/Background.js";

function Welcome(props) {
  const {
    handleRegister,
    firstName,
    lastName,
    age,
    phone,
    setFirstName,
    setLastName,
    setAge,
    setPhone,
  } = props;

  return (
    <Background>
      <div className="welcome-header">
        <h4>Thank you!</h4>
        <h4 className="welcome-paragraph">
          We just need a couple more pieces of information before you can find
          your forever pet!
        </h4>
      </div>
      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          className="form-control name-input"
          placeholder="Enter First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          className="form-control name-input"
          placeholder="Enter Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="text"
          className="form-control"
          placeholder=" Enter Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div className="form-group">
        <input id="checkbox" type="checkbox" className="form-control" />
        <label>Accept Terms & Conditions</label>
      </div>
      <div>
        <button
          className="create-account-btn"
          onClick={handleRegister}
          type="submit"
        >
          Create Account
        </button>
        <button className="go-back-btn" href="/register"> Go Back</button>
      </div>
    </Background>
  );
}

export default Welcome;
