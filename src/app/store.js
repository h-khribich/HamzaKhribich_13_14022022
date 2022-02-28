import { combineReducers, createStore } from "redux";
import { authReducer } from "./features/authentification/auth.reducer";
import { userReducer } from "./features/user/user.reducer";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, reduxDevtools);
