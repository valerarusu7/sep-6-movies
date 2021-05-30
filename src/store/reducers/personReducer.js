import { createSlice } from "@reduxjs/toolkit";
import axios from "../requests/heroku_axios";
import requests from "../requests/requests";

/************** STATE **************/
const initialState = {
  person: null,
};

/************** STATE SLICE **************/
const personSlice = createSlice({
  name: "people",
  initialState: initialState,
  reducers: {
    setPerson(state, action) {
      state.person = action.payload;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default personSlice.reducer;
export const { setPerson } = personSlice.actions;

/************** THUNKS **************/

export const getPersonById = ({ id }) => {
  return (dispatch) => {
    axios
      .get(requests.fetchPersonById(id))
      .then((result) => {
        console.log(result);
        dispatch(setPerson(result.data));
      })
      .catch((error) => {
        if (error.response.status === 404) {
          window.location.href = "/404";
          return;
        }
      });
  };
};
