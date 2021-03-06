import { createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase/firebase";
import gc_axios from "../requests/gc_axios";
import requests from "../requests/requests";
import { getAdditionalUserInfo, userReset } from "./userReducer";

/************** STATE **************/
const initialState = {
  user: null, // Indicates the user auth data
  dateCreation: null,
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
    setDateCreation(state, action) {
      state.dateCreation = action.payload;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default authSlice.reducer;
export const { authSetUser, authReset, setDateCreation } = authSlice.actions;

/************** THUNKS **************/
export const signIn = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var isNewUser = result.additionalUserInfo.isNewUser;
        if (isNewUser) {
          dispatch(createAdditionalUserInfo(result.user.uid));
        } else {
          dispatch(getAdditionalUserInfo(result.user.uid));
        }
        dispatch(authSetUser(result.user));
        dispatch(setDateCreation(result.user.metadata.creationTime));
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
        dispatch(userReset());
      })
      .catch((error) => console.log(error));
  };
};

const createAdditionalUserInfo = (uid) => {
  return (dispatch) => {
    gc_axios
      .post(requests.postAdditionalUserInfo(uid))
      .then(() => dispatch(getAdditionalUserInfo(uid)))
      .catch((error) => {
        console.log(error);
      });
  };
};
