import React from "react";
import ActionBar from "./ActionBar";

function InfoCard(props) {
  const { animalArray, animalIndex, goToNextFn, goToPreviousFn, handleHeartFn} = props;
  const animal = animalArray[animalIndex];

  // const animalOld = {
  //   name: "Rover",
  //   age: "2",
  //   profile_pic:
  //     "https://www.pumpkin.care/dog-breeds/wp-content/uploads/2021/02/Beagle-Hero.png",
  //   animal_bio:
  //     " I love being outside, but always have fun just cuddling and being lazy",
  //   breed: "Beagle",
  //   shelter: { name: "Sabrina's Home for Underprivileged Animals" },
  // };
  return animal ? (
    <div className="info-card">
      <div className="info-card-body">
        <div className="animal-name">
          <h1>
            {animal.name}, {animal.age}
          </h1>
        </div>
        <div>
          <img src={animal.profile_pic} alt="Animal" />
        </div>
        <span className="animal-info">
          <div>
            <h2>
              <strong>Bio:</strong> {animal.animal_bio}
            </h2>
            {/* <h2>
              <strong>Shelter:</strong> {animal.shelter_id.name}
            </h2> */}
            <h2>
              <strong>Breed:</strong> {animal.breed}
            </h2>
            <h2>
              <strong>Likes & Dislikes:</strong> Tennis balls, running, digging
            </h2>
          </div>
        </span>
        <ActionBar
          goToNextFn={goToNextFn}
          goToPreviousFn={goToPreviousFn}
          handleHeartFn={ handleHeartFn}
        />
      </div>
    </div>
  ) : (
    "loading"
  );
}
export default InfoCard;
