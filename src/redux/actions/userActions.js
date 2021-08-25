import { REQUEST_USER_DATA, USER_ERROR } from "../types";
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
