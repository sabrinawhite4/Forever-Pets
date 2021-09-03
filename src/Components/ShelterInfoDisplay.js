import React from "react";

function ShelterInfoDisplay(props) {
  const {
    shelter,
    setAboutMe,
    setScheduleLink,
    setDonationLink,
    setStreet,
    setCity,
    setState,
    setZip,
    street,
    city,
    state,
    zip,
    aboutMe,
    donationLink,
    scheduleLink,
    editing,
  } = props;

  // const shelter = {
  //   name: "Sabrina's Home for Underprivileged Animals",
  //   street: "123 Main Street",
  //   city: "Anytown",
  //   state: "HI",
  //   zip: "12345",
  //   website: "http://www.sabrinashelter.com",
  //   email: "sabrina@shua.com",
  //   phone: "800-555-1212",
  //   shelter_bio:
  //     "Shelter is a place to find a home for your animal.  We provide a wide variety of animal care including microchipped animals, housebroken animals, and even foster animals.  We also offer a wide variety of services including cat and dog adoption, medical care, and training for pet owners.  We are a non-profit organization and do not accept donations.This is Sabrina's home for underprivileged animals.",
  //   donation_link: "http://www.sabrinashelter.com/donate",
  //   schedule_link: "http://www.sabrinashelter.com/schedule",
  //   shelter_logo: "https://s3.amazonaws.com/shelter-logo/shelter-logo.png",
  // };

  return shelter ? (
    <div>
      <h1>{shelter.name}</h1>
      {!editing ? (
        <div>
          <h2>
            Address: {shelter.street}, {shelter.city}, {shelter.state} {shelter.zip}
          </h2>
          <h3>Contact Email: {shelter.email}</h3>
          <h3>Phone Number: {shelter.phone_number}</h3>
        </div>
      ) : (
        <div>
          <div>
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            ></input>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
            ></input>
            <input value={zip} onChange={(e) => setZip(e.target.value)}></input>
          </div>
        </div>
      )}
      <div className="profile-form-group">
        <label>About Our Shelter:</label>

        {!editing ? (
          <h3>{shelter.shelter_bio}</h3>
        ) : (
          <input
            type="text"
            className="form-control"
            placeholder="Tell us about how awesome your shelter is!!"
            onChange={(e) => setAboutMe(e.target.value)}
            value={aboutMe}
          />
        )}
      </div>
      <div className="form-group">
        <label>Donation Link:</label>
        {!editing ? (
          <h3>{shelter.donation_link}</h3>
        ) : (
          <input
            type="text"
            className="form-control"
            placeholder="Provide a donation link (ex. patreon, goFundMe, Venmo, etc.)"
            onChange={(e) => setDonationLink(e.target.value)}
            value={donationLink}
          />
        )}
      </div>
      <div className="form-group">
        <label> Appointment Link:</label>
        {!editing ? (
          <h3>{shelter.schedule_link}</h3>
        ) : (
          <input
            type="text"
            className="form-control"
            placeholder="Provide an appointment link (ex. calendly, google calender, etc.)"
            onChange={(e) => setScheduleLink(e.target.value)}
            value={scheduleLink}
          />
        )}
      </div>
    </div>
  ) : <div>loading</div>;
}

export default ShelterInfoDisplay;
