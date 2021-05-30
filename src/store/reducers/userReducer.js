import { createSlice } from "@reduxjs/toolkit";
import db from "../../firebase/firebase";
import gc_axios from "../requests/gc_axios";
import requests from "../requests/requests";

/************** STATE **************/
const initialState = {
  favoriteMovies: [], // Indicates the favorite movies
  additionalUserInfo: null,
};

/************** STATE SLICE **************/
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setFavoriteMovies(state, action) {
      state.favoriteMovies = action.payload;
    },
    setAdditionalUserInfo(state, action) {
      state.additionalUserInfo = action.payload;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default userSlice.reducer;
export const { setFavoriteMovies, setAdditionalUserInfo } = userSlice.actions;

/************** THUNKS **************/
export const getFavoriteMovies = (uid) => {
  return (dispatch) => {
    const ref = db.ref("users/" + uid).orderByChild("index");
    ref.on(
      "value",
      function (snapshot) {
        let data = [];
        snapshot.forEach((item) => {
          data.push(item.val());
        });
        dispatch(setFavoriteMovies(data));
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  };
};

export const getAdditionalUserInfo = (uid) => {
  return (dispatch) => {
    gc_axios
      .get(requests.getAdditionalUserInfo(uid))
      .then((response) => {
        dispatch(setAdditionalUserInfo(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
