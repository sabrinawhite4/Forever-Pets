import React from "react";

function ShelterInfoDisplay() {
  const shelter = {
    name: "Sabrina's Home for Underprivileged Animals",
    street: "123 Main Street",
    city: "Anytown",
    state: "HI",
    zip: "12345",
    website: "http://www.sabrinashelter.com",
    email: "sabrina@shua.com",
    phone: "800-555-1212",
    shelter_bio:
      "Shelter is a place to find a home for your animal.  We provide a wide variety of animal care including microchipped animals, housebroken animals, and even foster animals.  We also offer a wide variety of services including cat and dog adoption, medical care, and training for pet owners.  We are a non-profit organization and do not accept donations.This is Sabrina's home for underprivileged animals.",
    donation_link: "http://www.sabrinashelter.com/donate",
    schedule_link: "http://www.sabrinashelter.com/schedule",
    shelter_logo: "https://s3.amazonaws.com/shelter-logo/shelter-logo.png",
  };

  return (
    <div>
      <h1>{shelter.name}</h1>
      <h2>
        {shelter.street}, {shelter.city}, {shelter.state} {shelter.zip}
      </h2>
      <h3>{shelter.email}</h3>
      <h3>{shelter.phone}</h3>
    </div>
  );
}

export default ShelterInfoDisplay;
