import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: Math.random() + new Date(),
            placeName: action.placeName,
            location: action.location,
            placeImage: { uri: action.placeImage.uri }
          }
        ]
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(item => item.key !== action.placeKey)
      };

    default:
      return state;
  }
};

export default reducer;
