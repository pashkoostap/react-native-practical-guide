import { TRY_AUTH } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

import startMainTabs from "../../screens/MainTabs/startMainTabs";

const apiKey = "AIzaSyBOc8srMkdFa1KCalkZj2jHv6ZkabRxq-I";
const apiURL = param =>
  `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${param}?key=${apiKey}`;

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading());

    const urlParam = authMode === "login" ? "verifyPassword" : "signupNewUser";

    fetch(apiURL(urlParam), {
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
        if (res.error) {
          const { error: { message } } = res;

          switch (message) {
            case "EMAIL_EXISTS":
              alert("User email is already exists");
              break;

            case "INVALID_EMAIL":
              alert("Invalid email address");
              break;

            case "INVALID_PASSWORD":
              alert("Invalid password");
              break;

            case "EMAIL_NOT_FOUND":
              alert("User not found");
              break;

            case "USER_DISABLED":
              alert("User is disabled");
              break;

            default:
              break;
          }
        } else {
          startMainTabs();
        }
      })
      .catch(err => {
        dispatch(uiStopLoading());
        alert("Authentication error");
      });
  };
};
