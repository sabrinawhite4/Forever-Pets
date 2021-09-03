import { REQUEST_USER_DATA, REQUEST_USER_FAVORITES, USER_ERROR} from "../types"

let initialState = {
  user: {
    _id: null,
    username: null,
    first_name: null,
    last_name: null,
    email: null,
    age: null,
    profile_pic: null,
    phone_number: null,
    is_shelter_employee: false,
    shelter_id: null,
    profile_bio: null,
    user_favorites: [],
  },
  userFavorites: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case REQUEST_USER_FAVORITES:
      return {
        ...state,
        userFavorites: action.payload,
        loading: false
      }
    case USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}