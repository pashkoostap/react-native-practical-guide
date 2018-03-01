import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

export const addPlace = (placeName, location, placeImage) => {
  const place = {
    placeName,
    location,
    placeImage
  };

  return dispatch => {
    dispatch(uiStartLoading());

    fetch("https://react-native-practical-guide.firebaseio.com/places.json", {
      method: "POST",
      body: JSON.stringify(place)
    })
      .then(res => res.json())
      .then(res => {
        dispatch(uiStopLoading());
        dispatch({ ...place, id: res.name, type: ADD_PLACE });
      })
      .catch(err => dispatch(uiStopLoading()));
  };
};

export const deletePlace = placeKey => {
  return {
    type: DELETE_PLACE,
    placeKey
  };
};
