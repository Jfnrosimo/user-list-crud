import { createSlice } from "@reduxjs/toolkit";

//import initial state
import { UsersData } from "../mockData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      //Code for adding a user
    },
  },
});

export default userSlice.reducer;
