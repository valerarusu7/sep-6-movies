import { createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../../firebase/firebase";
import db from "../../firebase/firebase";
import { createAdditionalUserInfo } from "../../firebase/utils";

/************** STATE **************/
const initialState = {
  user: null, // Indicates the user auth data
  favoriteMovies: [], // Indicates the favorite movies
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
    moviesSetFavoriteMovies(state, action) {
      state.favoriteMovies = action.payload;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default authSlice.reducer;
export const { authSetUser, authReset, moviesSetFavoriteMovies } =
  authSlice.actions;

/************** THUNKS **************/
export const signIn = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var isNewUser = result.additionalUserInfo.isNewUser;
        if (isNewUser) {
          createAdditionalUserInfo(result.user);
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
