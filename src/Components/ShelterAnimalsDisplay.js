import React from 'react';

function ShelterAnimalsDisplay(props) {
    const { animalsArray } = props;
    const animalList = animalsArray.map((animal) => {
        return (
            <li key={animal.id}>
                {animal.name}
            </li>
        );
    })

    return animalList
}

export default ShelterAnimalsDisplay;