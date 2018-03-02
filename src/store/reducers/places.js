import { ADD_PLACE, DELETE_PLACE, GET_PLACES } from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places, action.place]
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(item => item.key !== action.placeKey)
      };

    case GET_PLACES:
      return {
        ...state,
        places: action.places
      };

    default:
      return state;
  }
};

export default reducer;
