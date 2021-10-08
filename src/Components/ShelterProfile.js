import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  requestShelterData,
  requestShelterAnimals,
} from "./../redux/actions/shelterActions.js";
import ShelterAnimalsDisplay from "./ShelterAnimalsDisplay";
import { useDispatch, useSelector } from "react-redux";
import ShelterInfoDisplay from "./ShelterInfoDisplay";

function ShelterProfile() {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [donationLink, setDonationLink] = useState("");
  const [scheduleLink, setScheduleLink] = useState("");
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const shelter = useSelector((state) => state.shelter.shelter);
  const loading = useSelector((state) => state.shelter.loading);
  const user = useSelector((state) => state.user.user);
  const shelterAnimals = useSelector((state) => state.shelter.animals);

  useEffect(() => {
    console.log(user.shelter_id);
    dispatch(requestShelterData("61184ee7db91a6f130470e1a"));
    dispatch(requestShelterAnimals("61184ee7db91a6f130470e1a"));
  }, [dispatch, user]);

  useEffect(() => {
    if (shelter) {
      setStreet(shelter.street);
      setCity(shelter.city);
      setState(shelter.state);
      setZip(shelter.zip);
      setAboutMe(shelter.about_me);
      setDonationLink(shelter.donation_link);
      setScheduleLink(shelter.schedule_link);
    }
  }, [shelter]);

  function saveInfo() {
    const shelterData = {
      shelter_bio: aboutMe,
      street: street,
      city: city,
      state: state,
      zip: zip,
      donation_link: donationLink,
      schedule_link: scheduleLink,
    };
    axios.put(
      `${process.env.REACT_APP_API_URL}shelters/${shelter._id}`,
      shelterData
    );
    setEditing(!editing);
    dispatch(requestShelterData(user.shelter_id));
  }

  function getAnimals() {
    dispatch(requestShelterAnimals(user.shelter_id));
  }

  return shelter ? (
    <div>
      {!editing ? (
        <button className="login-btn" onClick={() => setEditing(!editing)}>
          Edit Profile
        </button>
      ) : (
        <button id="save-button" onClick={saveInfo}>
          Save Changes
        </button>
      )}
      <ShelterInfoDisplay
        shelter={shelter}
        loading={loading}
        street={street}
        city={city}
        state={state}
        zip={zip}
        aboutMe={aboutMe}
        donationLink={donationLink}
        scheduleLink={scheduleLink}
        setStreet={setStreet}
        setCity={setCity}
        setState={setState}
        setZip={setZip}
        setAboutMe={setAboutMe}
        setDonationLink={setDonationLink}
        setScheduleLink={setScheduleLink}
        editing={editing}
      />
      <div className="form-group">
        <h2> Animals Display</h2>
      </div>
      {shelter ? (
        <ShelterAnimalsDisplay
          animalsArray={shelterAnimals}
          getAnimals={getAnimals}
          shelterId={shelter._id}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  ) : null;
}

export default ShelterProfile;
