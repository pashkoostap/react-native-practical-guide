import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName, location, placeImage) => {
  const place = {
    placeName,
    location,
    placeImage
  };

  return dispatch => {
    // fetch("https://react-native-practical-guide.firebaseio.com/places.json", {
    //   method: "POST",
    //   body: JSON.stringify(place)
    // })
    //   .then(res => res.json())
    //   .then(res => dispatch());

    fetch(
      "https://us-central1-react-native-practical-guide.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({ placeImage: placeImage.base64 })
      }
    )
      .then(res => res.json())
      .then(res => console.log(res));
  };
};

export const deletePlace = placeKey => {
  return {
    type: DELETE_PLACE,
    placeKey
  };
};
