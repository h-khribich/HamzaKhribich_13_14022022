const initialState = { status: "invalid" };

// REDUCER SHOULD RETURN API FETCH STATUS
export default function userReducer(state = initialState, action) {
  if (action.type === "CHECK_USER") {
    return {
      ...state,
    };
  } else {
    return initialState;
  }
}
