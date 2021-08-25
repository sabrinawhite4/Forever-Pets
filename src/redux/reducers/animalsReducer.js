import {
  REQUEST_ALL_ANIMALS,
  REQUEST_AVAILABLE_ANIMALS,
  ADD_ANIMAL,
  MARK_ANIMAL_ADOPTED,
  EDIT_ANIMAL,
  ANIMAL_ERROR,
} from "../types";

let initialState = {
  allAnimals: [],
  availableAnimals: [],
  loading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL_ANIMALS:
      return { ...state, allAnimals: action.payload, loading: false };
    case REQUEST_AVAILABLE_ANIMALS:
      return { ...state, availableAnimals: action.payload, loading: false };
    case ADD_ANIMAL:
      return { ...state, allAnimals: action.payload, loading: false };
    case MARK_ANIMAL_ADOPTED:
      return { ...state, avaliableAnimals: action.payload, loading: false };
    case EDIT_ANIMAL:
      return { ...state, allAnimals: action.payload, loading: false };
    case ANIMAL_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export default reducer;