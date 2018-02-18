import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
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
            placeImage: {
              uri:
                "http://ukrainetrek.com/blog/wp-content/uploads/2011/12/ukrainian-carpathians-landscape-16.jpg"
            }
          }
        ]
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          item => item.key !== state.selectedPlace.key
        ),
        selectedPlace: null
      };

    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(item => item.key === action.placeKey)
      };

    case UNSELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };

    default:
      return state;
  }
};

export default reducer;
