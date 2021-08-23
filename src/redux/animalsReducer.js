import axios from "axios";

let initialState = {
  allAnimals: [],
  availableAnimals: [],
  loading: false,
};

const REQUEST_ALL_ANIMALS = "REQUEST_ALL_ANIMALS";
const REQUEST_AVAILABLE_ANIMALS = "REQUEST_AVAILABLE_ANIMALS";
const ADD_ANIMAL = "ADD_ANIMAL";
const MARK_ANIMAL_ADOPTED = "MARK_ANIMAL_ADOPTED";
const EDIT_ANIMAL = "EDIT_ANIMAL";

export const requestAllAnimals = () => {
  let data = axios.get("http://localhost:4000/api/animals/all").then((res) => res.data);
  return {
    type: REQUEST_ALL_ANIMALS,
    payload: data,
  };
};

export const requestAvailableAnimals = () => {
  let data = axios.get("/api/animals/available").then((res) => res.data);
  return {
    type: REQUEST_AVAILABLE_ANIMALS,
    payload: data,
  };
};

export const addAnimal = ({ ctx }) => {
  const { name, age, profile_pic, animal_bio, breed, shelter_id, species_id } =
    ctx;
  let data = axios
    .post("/api/animals", {
      name,
      age,
      profile_pic,
      animal_bio,
      breed,
      shelter_id,
      species_id,
    })
    .then((res) => res.data);
  return {
    type: ADD_ANIMAL,
    payload: data,
  };
};

export const markAdopted = (id) => {
  let data = axios
    .put(`api/animals/${id}`, { is_adopted: true })
    .then((res) => res.data);
  return {
    type: MARK_ANIMAL_ADOPTED,
    payload: data,
  };
};
// ctx will be an object containing the values I want to mutate.
export const editAnimal = (id, { ctx }) => {
  let data = axios.put(`api/animals/${id}`, { ctx }).then((res) => res.data);
  return {
    type: EDIT_ANIMAL,
    payload: data,
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL_ANIMALS + "_PENDING":
      return { ...state, loading: true };
    case REQUEST_ALL_ANIMALS + "_FULFILLED":
      return { ...state, allAnimals: action.payload, loading: false };
    case REQUEST_AVAILABLE_ANIMALS + "_PENDING":
      return { ...state, loading: true };
    case REQUEST_AVAILABLE_ANIMALS + "_FULFILLED":
      return { ...state, availableAnimals: action.payload, loading: false };
    case ADD_ANIMAL + "_PENDING":
      return { ...state, loading: true };
    case ADD_ANIMAL + "_FULFILLED":
      return { ...state, allAnimals: action.payload, loading: false };
    case MARK_ANIMAL_ADOPTED + "_PENDING":
      return { ...state, loading: true };
    case MARK_ANIMAL_ADOPTED + "_FULFILLED":
      return { ...state, avaliableAnimals: action.payload, loading: false };
    case EDIT_ANIMAL + "_PENDING":
      return { ...state, loading: true };
    case EDIT_ANIMAL + "_FULFILLED":
      return { ...state, allAnimals: action.payload, loading: false };
    default:
      return state;
  }
}

export default reducer;
