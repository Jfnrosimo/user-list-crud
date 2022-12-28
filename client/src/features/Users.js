import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: [] },
  reducers: {
    addUser: (state, action) => {
      //Code for adding a user
    },
  },
});
