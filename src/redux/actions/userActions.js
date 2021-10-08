import {
  REQUEST_USER_DATA,
  USER_ERROR,
  REQUEST_USER_FAVORITES,
} from "../types";
import axios from "axios";

export const requestUserData = (username, accessToken) => async (dispatch) => {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}users/${username}`
    );
    dispatch({
      type: REQUEST_USER_DATA,
      payload: {user: res.data, accessToken},
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
    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}favorites/user/${userId}`
    );
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
