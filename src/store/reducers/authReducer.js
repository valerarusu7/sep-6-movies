import { createSlice } from "@reduxjs/toolkit";
import * as Sentry from "@sentry/react";
import { auth, provider } from "../../firebase/firebase";

/************** STATE **************/
const initialState = {
  user: null, // Indicates the user auth data
};

/************** STATE SLICE **************/
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authSetUser(state, action) {
      state.user = action.payload;
    },
    authReset() {
      return initialState;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default authSlice.reducer;
export const { authSetUser, authReset } = authSlice.actions;

/************** THUNKS **************/
export const signIn = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch(authSetUser(result.user));
      })
      .catch((error) => console.log(error));
  };
};

export const signOut = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(authReset());
      })
      .catch((error) => console.log(error));
  };
};
