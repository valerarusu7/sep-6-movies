import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authReducer";
import movieReducer from "./reducers/movieReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: ["movies"],
};

const reducers = combineReducers({
  auth: authReducer,
  movies: movieReducer,
});

export default persistReducer(persistConfig, reducers);
