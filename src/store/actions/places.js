import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

export const addPlace = (placeName, location, placeImage) => {
  const place = {
    placeName,
    location
  };

  return dispatch => {
    dispatch(uiStartLoading());

    // request for image deployment
    fetch(
      "https://us-central1-react-native-practical-guide.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({ placeImage: placeImage.base64 })
      }
    )
      .then(res => res.json())
      .then(res => {
        // request for saving place in the firebase
        return fetch(
          "https://react-native-practical-guide.firebaseio.com/places.json",
          {
            method: "POST",
            body: JSON.stringify({
              ...place,
              placeImage: res.imageUrl
            })
          }
        );
      })
      .then(res => res.json())
      .then(res => {
        dispatch(uiStopLoading());
        // dispatch({ ...place, id: res.name, type: ADD_PLACE });
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
