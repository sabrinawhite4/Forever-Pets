import axios from "axios";

let initialState = {
  username: null,
  first_name: null,
  last_name: null,
  email: null,
  profile_pic: null,
  phone_number: null,
  is_shelter_employee: false,
  shelter_id: null,
  profile_bio: null,
  user_favorites: [],
};

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

export const requestUserData = (username) => {
  let data = axios
    .get(`http://localhost:4000/api/users/${username}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return {
    type: REQUEST_USER_DATA,
    payload: data,
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA + "_FULFILLED":
      const {
        username,
        first_name,
        last_name,
        email,
        profile_pic,
        phone_number,
        is_shelter_employee,
        shelter_id,
        profile_bio,
        user_favorites,
      } = action.payload.user;
          console.log(action.payload);
          
      return {
        username,
        first_name,
        last_name,
        email,
        profile_pic,
        phone_number,
        is_shelter_employee,
        shelter_id,
        profile_bio,
        user_favorites,
      };
    default:
      return state;
  }
}
