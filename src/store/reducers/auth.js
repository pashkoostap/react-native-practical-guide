import { TRY_AUTH, SET_AUTH_TOKEN } from "../actions/actionTypes";

const initialState = {
  token: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default authReducer;
