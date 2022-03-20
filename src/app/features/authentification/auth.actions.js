import Axios from "axios";
export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const EDIT_NAME = "EDIT_NAME";

export const loginUser = (userData, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await Axios.post(
        "http://localhost:3001/api/v1/user/login",
        userData
      );
      const token = await response.data.body.token;

      // Send user data to localStorage to keep login active
      if (response.status === 200 && rememberMe) {
        localStorage.setItem("userData", JSON.stringify(userData));
      }

      // Fetch profile after login is validated
      const userProfile = await Axios.get(
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
      // Error message returned by API is displayed to user
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          error: "Username and/or password are invalid",
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

export const EditName = (editedData, token) => {
  return async (dispatch) => {
    try {
      const response = await Axios.patch(
        "http://localhost:3001/api/v1/user/profile",
        editedData,
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      );

      dispatch({
        type: EDIT_NAME,
        payload: {
          user: response.data.body,
        },
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};
