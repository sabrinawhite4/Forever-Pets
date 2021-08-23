import React, { useState } from "react";
import Background from "./shared/Background.js";
import ShelterAnimalsDisplay from './ShelterAnimalsDisplay';

function ShelterProfile() {
  const [location, setLocation] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [donationLink, setDonationLink] = useState("");
  const [appointmentLink, setAppointmentLink] = useState("");
  const [animals, setAnimals] = useState([{id: 1, name: "Midnight", species: "Cat", breed: "Domestic Short Hair", age: "3",}]);

  return (
    <Background>
      <div>Shelter Profile Page</div>
      <div className="form-group">
        <label>About Our Shelter!</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tell us about how awesome your shelter is!!"
          onChange={(e) => setAboutMe(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Where are you Located?</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Donatation Link:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Provide a donation link (ex. patreon, goFundMe, Venmo, etc.)"
          onChange={(e) => setDonationLink(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label> Appointment Link:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Provide an appointment link (ex. calendly, google calender, etc.)"
          onChange={(e) => setAppointmentLink(e.target.value)}
        />
      </div>
      <div className="form-group">
        <h2> Animals Display</h2>
        <ShelterAnimalsDisplay
          animalsArray={animals}
        />
      </div>
      <button className="btn btn-success btn-lg" type="submit">
        Change Password
      </button>
      <button className="btn btn-success btn-lg" type="submit">
        Log out
      </button>
    </Background>
  );
}

export default ShelterProfile;
