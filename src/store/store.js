import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducers from "./reducer";

export const store = configureStore({ reducer: reducers, middleware: [thunk] });

export const persistor = persistStore(store);

export default { store, persistor };
