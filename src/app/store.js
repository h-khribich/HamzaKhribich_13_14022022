import { applyMiddleware, compose, createStore } from "redux";
import { authReducer } from "./features/authentification/auth.reducer";
import thunk from "redux-thunk";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Using several store enchancer simultaniously
const composedEnhancer = compose(applyMiddleware(thunk), reduxDevtools);

export const store = createStore(authReducer, composedEnhancer);
