//! creating the createSlice

import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

//! initial State
const initialState = {
  noOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfIceCreams--;
    },
    restocked: (state, action) => {
      state.noOfIceCreams += action.payload;
    },
  },

  //! Offer! When customer buys a cake then give it a free icecream to him/her
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.noOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
