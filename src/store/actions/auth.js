import { TRY_AUTH } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

const apiURL =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBOc8srMkdFa1KCalkZj2jHv6ZkabRxq-I";

export const tryAuth = authData => {
  return dispatch => {
    dispatch(authSignUp(authData));
  };
};

export const authSignUp = authData => {
  return dispatch => {
    dispatch(uiStartLoading());

    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify({
        ...authData,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        dispatch(uiStopLoading());
        console.log(res);
      })
      .catch(err => alert("Authentication error"));
  };
};
