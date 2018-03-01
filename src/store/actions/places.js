import { ADD_PLACE, DELETE_PLACE, GET_PLACES } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

export const getPlaces = () => {
  return dispatch => {
    dispatch(uiStartLoading());

    fetch("https://react-native-practical-guide.firebaseio.com/places.json")
      .then(res => res.json())
      .then(res => {
        const places = Object.keys(res).map(key => ({ ...res[key], key }));

        dispatch(uiStopLoading());
        dispatch({ type: GET_PLACES, places });
      })
      .catch(err => dispatch(uiStopLoading()));
  };
};

export const addPlace = (placeName, location, placeImage) => {
  let place = {
    placeName,
    location: {
      latitude: location.latitude,
      longitude: location.longitude
    }
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
        place = {
          ...place,
          placeImage: res.imageUrl
        };

        return fetch(
          "https://react-native-practical-guide.firebaseio.com/places.json",
          {
            method: "POST",
            body: JSON.stringify(place)
          }
        );
      })
      .then(res => res.json())
      .then(res => {
        dispatch(uiStopLoading());
        dispatch({ ...place, key: res.name, type: ADD_PLACE });
      })
      .catch(err => dispatch(uiStopLoading()));
  };
};

export const deletePlace = placeKey => {
  return dispatch => {
    dispatch(uiStartLoading());

    fetch(
      "https://react-native-practical-guide.firebaseio.com/places/" +
        placeKey +
        ".json",
      {
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(uiStopLoading());
        dispatch({
          type: DELETE_PLACE,
          placeKey
        });
      });
  };
};
