import { createSlice } from "@reduxjs/toolkit";
import db from "../../firebase/firebase";

/************** STATE **************/
const initialState = {
  favoriteMovies: [], // Indicates the favorite movies
};

/************** STATE SLICE **************/
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    moviesSetFavoriteMovies(state, action) {
      state.favoriteMovies = action.payload;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default userSlice.reducer;
export const { moviesSetFavoriteMovies } = userSlice.actions;

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
        dispatch(moviesSetFavoriteMovies(data));
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  };
};
