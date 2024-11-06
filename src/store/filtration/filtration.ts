"use client";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {

}

const initialState: InitialStateProps = {

};

export const filtrationSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {

  },
});

export const {} = filtrationSlice.actions;
export default filtrationSlice.reducer;
