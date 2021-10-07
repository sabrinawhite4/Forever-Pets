import React, { useState } from "react";
import axios from "axios";

function AnimalDisplay(props) {
  const { animal, getAnimals } = props;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(animal.name);
  const [age, setAge] = useState(animal.age);
  const [breed, setBreed] = useState(animal.breed);
  const [species, setSpecies] = useState(animal.species);
  const [animalBio, setAnimalBio] = useState(animal.animal_bio);

  function saveInfo() {
    const animalData = {
      name: name,
      age: age,
      breed: breed,
      species: species,
      animal_bio: animalBio,
    };
    axios.put(
      `https://forever-pets-back-end.herokuapp.com/api/animals/${animal._id}`,
      animalData
    );
    setEditing(!editing);
    getAnimals();
  }

  function markAdopted() {
    const animalData = {
      is_adopted: true,
    };
    axios.put(
      `https://forever-pets-back-end.herokuapp.com/api/animals/${animal._id}`,
      animalData
    );
    getAnimals();
  }

  return (
    <div key={animal.id}>
      {!editing ? (
        <div className="shelter-animal-card">
          <h4>
            {animal.name}, {animal.age}
          </h4>
          {animal.is_adopted ? (
            <h4>Adopted</h4>
          ) : (
            <button className="login-btn" onClick={markAdopted}>
              Mark Adopted
            </button>
          )}
          <img
            className="shelter-animal-pic"
            src={animal.profile_pic}
            alt={animal.name}
          />
          <p>
            {animal.species}, {animal.breed}
          </p>
          <p>{animal.animal_bio}</p>
          <button className="login-btn" onClick={() => setEditing(!editing)}>
            Edit Animal
          </button>
        </div>
      ) : (
        <div>
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
          <img src={animal.profile_pic} alt={animal.name} />
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
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Animal Bio"
            onChange={(e) => setAnimalBio(e.target.value)}
            value={animalBio}
          ></input>
          <button onClick={saveInfo}>Save Animal</button>
        </div>
      )}
    </div>
  );
}

export default AnimalDisplay;
