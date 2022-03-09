import { LOGIN, LOGIN_ERROR, LOGOUT, EDIT_NAME } from "./auth.actions";

const initialState = {
  token: null,
  user: null,
  login: false,
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        login: action.payload.login,
        error: action.payload.error,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case EDIT_NAME:
      return {
        ...state,
      };
    case LOGOUT:
    default:
      return initialState;
  }
};
