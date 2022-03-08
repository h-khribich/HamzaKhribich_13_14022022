import Axios from "axios";
export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await Axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      const token = await response.data.body.token;

      const userProfile = await Axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      );
      dispatch({
        type: LOGIN,
        payload: {
          token: token,
          user: userProfile.data.body,
          login: true,
          error: "",
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          error: error.response.data.message,
        },
      });
    }
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
