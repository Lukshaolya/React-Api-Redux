import { createStore } from "redux";
import rootReducer from "./reducer";
import { setLocalStorage } from "../utiles/localStorage";

const store = createStore(rootReducer);

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteReducer);
});

export default store;
