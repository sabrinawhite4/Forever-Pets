import {
  REQUEST_ALL_ANIMALS,
  REQUEST_AVAILABLE_ANIMALS,
  ADD_ANIMAL,
  MARK_ANIMAL_ADOPTED,
  EDIT_ANIMAL,
  ANIMAL_ERROR,
} from "../types";
import axios from "axios";


export const requestAllAnimals = () => async (dispatch) =>{
  try {
    let res = await axios.get("http://localhost:4000/api/animals/all");
    dispatch({
      type: REQUEST_ALL_ANIMALS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ANIMAL_ERROR,
      payload: e,
    });
  }
};

export const requestAvailableAnimals = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:4000/api/animals/available");
    dispatch({
      type: REQUEST_AVAILABLE_ANIMALS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ANIMAL_ERROR,
      payload: e,
    });
  }
};

export const addAnimal = ({ ctx }) => async (dispatch) => {
      const {
        name,
        age,
        profile_pic,
        animal_bio,
        breed,
        shelter_id,
        species_id,
      } = ctx;
  try {
    let res = await axios.post("http://localhost:4000/api/animals", {
      name,
      age,
      profile_pic,
      animal_bio,
      breed,
      shelter_id,
      species_id,
    });
    dispatch({
      type: ADD_ANIMAL,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ANIMAL_ERROR,
      payload: e,
    });
  }
};

export const markAdopted = (id) => async (dispatch) => {
  try {
      let res = await axios.put(`http://localhost:4000/api/animals/${id}`, {is_adopted: true});
    dispatch({
      type: MARK_ANIMAL_ADOPTED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ANIMAL_ERROR,
      payload: e,
    });
  }
};

export const editAnimal = (id, { ctx}) => async (dispatch) => {
  try {
    let res = await axios.put(`http://localhost:4000/api/animals/${id}`, {ctx});
    dispatch({
      type: EDIT_ANIMAL,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ANIMAL_ERROR,
      payload: e,
    });
  }
};