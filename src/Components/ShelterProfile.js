import React, { useState, useEffect } from "react";
import axios from "axios";
import Background from "./shared/Background.js";
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
    dispatch(requestShelterData(user.shelter_id));
    dispatch(requestShelterAnimals(user.shelter_id));
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
    axios.put(`http://localhost:4000/api/shelters/${shelter._id}`, shelterData);
    setEditing(!editing);
    dispatch(requestShelterData(user.shelter_id));
  }

  function getAnimals() {
    dispatch(requestShelterAnimals(user.shelter_id));
  }

  return (
    <Background>
      <div>Shelter Profile Page</div>
      {!editing ? (
        <button onClick={() => setEditing(!editing)}>Edit Profile</button>
      ) : (
        <button onClick={saveInfo}>Save Changes</button>
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
        <ShelterAnimalsDisplay
          animalsArray={shelterAnimals}
          getAnimals={getAnimals}
          shelterId={shelter._id}
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
