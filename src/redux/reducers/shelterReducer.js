import { REQUEST_SHELTER_DATA, SHELTER_ERROR, REQUEST_SHELTER_ANIMALS } from "../types";

let initialState = {
  shelter: {
    _id: null,
        name: null,
        street: null,
        city: null,
        state: null,
        zip: null,
        phone_number: null,
        website: null,
        email: null,
        shelter_bio: null,
        donation_link: null,
        schedule_link: null,
        shelter_logo: null,
  },
  animals: [],
  loading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SHELTER_DATA:
      return {
        ...state,
        shelter: action.payload,
        loading: false,
      };
    case SHELTER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case REQUEST_SHELTER_ANIMALS:
      return {
        ...state,
        animals: action.payload,
        loading: false,
      };
    default:
      return state;
  };
};
