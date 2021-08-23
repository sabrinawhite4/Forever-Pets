import React, { useState} from "react";
import Background from "./shared/Background.js";

function UserProfile() {

  const [aboutMe, setAboutMe] = useState('');
  const [location, setLocation] = useState('');
  const [idealPet, setIdealPet] = useState('');
  const [favorites, setFavorites] = useState([]);

  return (
    <Background>
      <div>User Profile Page</div>
      <form className="login-form">
        <div className="form-group">
          <label>About Me:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tell us about you!"
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Where are you from?</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Your Ideal Pet:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setIdealPet(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h2> Favorites Display</h2>
        </div>
        <button className="btn btn-success btn-lg" type="submit">
          Change Password
        </button>
        <button className="btn btn-success btn-lg" type="submit">
          Log out
        </button>
      </form>
    </Background>
  ); 
}

export default UserProfile;
