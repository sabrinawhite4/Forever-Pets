import { REQUEST_SHELTER_DATA, SHELTER_ERROR, REQUEST_SHELTER_ANIMALS } from "../types";
import axios from "axios";

export const requestShelterData = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`http://localhost:4000/api/shelters/${id}`);
    dispatch({
      type: REQUEST_SHELTER_DATA,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SHELTER_ERROR,
      payload: e,
    });
  }
};

export const requestShelterAnimals = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`http://localhost:4000/api/shelters/${id}/animals`);
    dispatch({
      type: REQUEST_SHELTER_ANIMALS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SHELTER_ERROR,
      payload: e,
    });
  }
};