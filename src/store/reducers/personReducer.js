import { createSlice } from "@reduxjs/toolkit";
import axios from "../requests/heroku_axios";
import requests from "../requests/requests";

/************** STATE **************/
const initialState = {
actor:null
};

/************** STATE SLICE **************/
const personSlice = createSlice({
  name: "people",
  initialState: initialState,
  reducers: {
    setActor(state, action) {
      state.actor = action.payload;
    }
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default personSlice.reducer;
export const {
  setActor,
} = personSlice.actions;

/************** THUNKS **************/



export const getActorById = ({ id }) => {
  return (dispatch) => {
    axios
      .get(requests.fetchActorById(id))
      .then((result) => {
        console.log(result);
        dispatch(setActor(result.data));
      })
      .catch((error) => {
        if (error.response.status === 404) {
          window.location.href = "/404";
          return;
        }
      });
  };
};

