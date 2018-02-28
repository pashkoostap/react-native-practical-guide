import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName, location) => {
  return {
    type: ADD_PLACE,
    placeName,
    location
  };
};

export const deletePlace = placeKey => {
  return {
    type: DELETE_PLACE,
    placeKey
  };
};
