import React from "react";
import AnimalDisplay from "./AnimalDisplay";

function ShelterAnimalsDisplay(props) {
  const { animalsArray, getAnimals } = props;
  const animalList = animalsArray.map((animal) => {
    return <AnimalDisplay animal={animal} getAnimals={getAnimals} />;
  });

  return (
    <div>
      <ul>{animalList}</ul>
    </div>
  );
}

export default ShelterAnimalsDisplay;

// Add a form to create new animals

