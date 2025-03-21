// src/store/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "./userSlice"

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
