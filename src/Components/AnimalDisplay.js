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
    axios.put(`http://localhost:4000/api/animals/${animal._id}`, animalData);
    setEditing(!editing);
    getAnimals();
  }

  function markAdopted() {
    const animalData = {
      is_adopted: true,
    };
    axios.put(`http://localhost:4000/api/animals/${animal._id}`, animalData);
    getAnimals();
  }

  return (
    <li key={animal.id}>
      {!editing ? (
        <div>
          <h4>
            {animal.name}, {animal.age}
          </h4>
          {animal.is_adopted ? (
            <h4>Adopted</h4>
          ) : (
            <button onClick={markAdopted}>Mark Adopted</button>
          )}
          <img src={animal.profile_pic} alt={animal.name} />
          <p>
            {animal.species}, {animal.breed}
          </p>
          <p>{animal.animal_bio}</p>
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
        </div>
      )}
      {!editing ? (
        <button onClick={() => setEditing(!editing)}>Edit Animal</button>
      ) : (
        <button onClick={saveInfo}>Save Animal</button>
      )}
    </li>
  );
}

export default AnimalDisplay;
