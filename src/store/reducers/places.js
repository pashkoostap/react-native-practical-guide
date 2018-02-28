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
        places: state.places.filter(item => item.key !== action.placeKey)
      };

    default:
      return state;
  }
};

export default reducer;
