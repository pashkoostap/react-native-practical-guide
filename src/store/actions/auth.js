import { TRY_AUTH } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

import startMainTabs from "../../screens/MainTabs/startMainTabs";

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

        if (res.error) {
          const { error: { message } } = res;

          switch (message) {
            case "EMAIL_EXISTS":
              alert("User email is already exists");
              break;
            case "INVALID_EMAIL":
              alert("Invalid email address");
              break;
            default:
              break;
          }
        } else {
          startMainTabs();
        }
        console.log(res);
      })
      .catch(err => alert("Authentication error"));
  };
};
