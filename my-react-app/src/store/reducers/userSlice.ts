// src/store/reducers/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User {
    count:number
}


const initialState: User = {
  count:0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCount: (state) => {
      state.count = state.count + 1;
    }
  },
});

export const {
  setCount,
} = userSlice.actions;

export const selectCurrentCount = (state: RootState) => state.user.count;

export default userSlice.reducer;
