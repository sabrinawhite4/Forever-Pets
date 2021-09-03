import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from "./AnimalCard";
import { useSelector, useDispatch } from "react-redux";
import { requestAvailableAnimals } from "./../redux/actions/animalActions.js";

export default function Home() {
  const user = useSelector((state) => state.user);
  const animals = useSelector((state) => state.animals.availableAnimals);
  const dispatch = useDispatch();
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [animalIndex, setAnimalIndex] = useState(0);

  useEffect(() => {
    dispatch(requestAvailableAnimals());
  }, [dispatch]);

  useEffect(() => {
    setCurrentAnimal(animals[animalIndex]);
  }, [animals, animalIndex]);

  function goToPrevious() {
    if (animalIndex > 0) {
      setAnimalIndex(animalIndex - 1);
    } else {
      alert("You are already at the first animal.");
    }
  }

  function goToNext() {
    setAnimalIndex(animalIndex + 1);
    setCurrentAnimal(animals[animalIndex]);
  }

  function handleHeart() {
    axios
      .put("http://localhost:4000/api/favorites", {
        animalObjId: currentAnimal._id,
        userId: user.user._id,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("You have favorited this animal.");
        } else if (res.status === 201) {
          alert("You have already favorited this animal.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    goToNext();
  }

  return (
    <div className="App">
      <body className="App-body">
        <AnimalCard
          animal={currentAnimal}
          goToNextFn={goToNext}
          animalArray={animals}
          animalIndex={animalIndex}
          goToPreviousFn={goToPrevious}
          handleHeartFn={handleHeart}
        />
      </body>
    </div>
  );
}
