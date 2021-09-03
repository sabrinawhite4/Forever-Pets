import React, { useState, useEffect } from "react";
import axios from "axios";
import Background from "./shared/Background.js";
import { useSelector, useDispatch } from "react-redux";
import { requestUserData } from "./../redux/actions/userActions.js";
import DisplayUserFavorites from "./DisplayUserFavorites.js";

function UserProfile() {
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const [aboutMe, setAboutMe] = useState("");
  const [location, setLocation] = useState("");
  const [idealPet, setIdealPet] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setAboutMe(user.profile_bio);
    setLocation(user.location);
    setIdealPet(user.ideal_pet);

  }, [user]);

  function saveInfo() {
    const userData = {
      profile_bio: aboutMe,
      location: location,
      ideal_pet: idealPet,
    };
    axios.put(`http://localhost:4000/api/users/${user._id}`, userData);
    setEditing(!editing);
    dispatch(requestUserData(user.username));
    setAboutMe(user.profile_bio);
    setLocation(user.location);
    setIdealPet(user.ideal_pet);
  }

  return (
    <Background>
      {loading ? (
        "loading"
      ) : (
        <div className="user-profile">
          {!editing ? (
            <button onClick={() => setEditing(!editing)}>Edit Profile</button>
          ) : (
            <button onClick={saveInfo}>Save Changes</button>
          )}
          <div>
            <div className="profile-group">
              <h2>{user.username}</h2>
              <h3>
                Full Name: {user.first_name} {user.last_name}
              </h3>
              <h3>Email: {user.email}</h3>
              <h3>Phone Number: {user.phone_number}</h3>
            </div>
            <div className="profile-form-group">
              <h2>About Me:</h2>
              {editing ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tell us about you!"
                  onChange={(e) => setAboutMe(e.target.value)}
                  value={aboutMe}
                />
              ) : (
                <p>{user.profile_bio}</p>
              )}
            </div>
            <div className="profile-form-group">
              <h2>Where are you from?</h2>
              {editing ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="City, ST"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
              ) : (
                <p>{user.location}</p>
              )}
            </div>
            <div className="profile-form-group">
              <h2>Your Ideal Pet:</h2>
              {editing ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setIdealPet(e.target.value)}
                  value={idealPet}
                />
              ) : (
                <p>{user.ideal_pet}</p>
              )}
            </div>
            <div className="profile-form-group">
              <h2> My Favorites: </h2>
              <p>{user.user_favorites}</p>
            </div>
              {user ? <DisplayUserFavorites user={user} /> : null}
          </div>
        </div>
      )}
    </Background>
  );
}

export default UserProfile;
