export const SET_USER = "SET_USER";

export const setUser = (userProfile) => {
  return {
    type: SET_USER,
    userProfile,
  };
};
