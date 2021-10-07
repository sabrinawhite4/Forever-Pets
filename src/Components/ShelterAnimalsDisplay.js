import React, { useState } from "react";
import axios from "axios";
import AnimalDisplay from "./AnimalDisplay";

function ShelterAnimalsDisplay(props) {
  const [addNewAnimal, setAddNewAnimal] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [animalBio, setAnimalBio] = useState("");
  const [animalPic, setAnimalPic] = useState("");
  const { animalsArray, getAnimals, shelterId } = props;

  const animalList = animalsArray.map((animal) => {
    return <AnimalDisplay animal={animal} getAnimals={getAnimals} />;
  });

  function saveAnimal() {
    const animalData = {
      name: name,
      age: age,
      breed: breed,
      species: species,
      animal_bio: animalBio,
      profile_pic: animalPic,
      shelter_id: shelterId,
    };
    axios.post(
      `https://forever-pets-back-end.herokuapp.com/api/animals`,
      animalData
    );
    setAddNewAnimal(!addNewAnimal);
    getAnimals();
  }

  return (
    <div className="shelter-profile-animals">
      {!addNewAnimal ? (
        <button
          className="login-btn"
          onClick={() => setAddNewAnimal(!addNewAnimal)}
        >
          Add New Animal
        </button>
      ) : (
        <div className="add-animal-form">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Animal Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Animal Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            ></input>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Animal Profile Picture"
            onChange={(e) => setAnimalPic(e.target.value)}
            value={animalPic}
          />
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Animal Species"
              onChange={(e) => setSpecies(e.target.value)}
              value={species}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Animal Breed"
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
            ></input>
            <input
              type="text"
              className="form-control"
              placeholder="Animal Bio"
              onChange={(e) => setAnimalBio(e.target.value)}
              value={animalBio}
            ></input>
          </div>
          <button
            className="login-btn"
            onClick={() => setAddNewAnimal(!addNewAnimal)}
          >
            Cancel Add Animal
          </button>
          <button id="naah-button" onClick={saveAnimal}>
            Save Animal
          </button>
        </div>
      )}
      <div className="shelter-animal-wrapper">{animalList}</div>
    </div>
  );
}

export default ShelterAnimalsDisplay;
