import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authReducer";
import movieReducer from "./reducers/movieReducer";
import personReducer from "./reducers/personReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  blacklist: ["movies"],
  person:["person"]
};

const reducers = combineReducers({
  auth: authReducer,
  movies: movieReducer,
  person: personReducer,
});

export default persistReducer(persistConfig, reducers);
