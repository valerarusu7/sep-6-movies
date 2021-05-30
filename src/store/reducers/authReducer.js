import { createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase/firebase";
import gc_axios from "../requests/gc_axios";
import requests from "../requests/requests";

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
        var isNewUser = result.additionalUserInfo.isNewUser;
        if (isNewUser) {
          dispatch(createAdditionalUserInfo(result.user.uid));
        }
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

const createAdditionalUserInfo = (user_id) => {
  return () => {
    gc_axios.post(requests.postAdditionalUserInfo(user_id)).catch((error) => {
      console.log(error);
    });
  };
};
