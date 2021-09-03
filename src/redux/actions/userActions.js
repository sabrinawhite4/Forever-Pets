import { REQUEST_USER_DATA, USER_ERROR, REQUEST_USER_FAVORITES } from "../types";
import axios from "axios";

export const requestUserData = (username) => async (dispatch) => {
  try {
    let res = await axios.get(`http://localhost:4000/api/users/${username}`);
    dispatch({
      type: REQUEST_USER_DATA,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USER_ERROR,
      payload: e,
    });
  }
};

export const requestUserFavorites = (userId) => async (dispatch) => {
  try {
    let res = await axios.get(`http://localhost:4000/api/favorites/user/${userId}`);
    console.log(res.data);
    dispatch({
      type: REQUEST_USER_FAVORITES,
      payload: res.data.animalsArray,
    });
  } catch (e) {
    dispatch({
      type: USER_ERROR,
      payload: e,
    });
  }
};
