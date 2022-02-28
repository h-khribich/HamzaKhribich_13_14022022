import { SET_USER } from "./user.actions";

export const userReducer = (state = "", action) => {
  return action.type === SET_USER ? (state = action.userProfile) : state;
};
