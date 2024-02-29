import { createSlice } from "@reduxjs/toolkit";

const CommonReducer = createSlice({
  name: "common",
  initialState: {
    kitchen: [],
    guestroom: [],
    bedroom: [],
    hool: [],
    coupe: [],
    babyroom: [],
    sofa: [],
    likes: [],
    cart: [],
  },
  reducers: {
    productIncrement() {},
  },
});

export const { productIncrement } = CommonReducer.actions;
export default CommonReducer.reducer;
