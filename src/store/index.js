import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data-Slice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer
  }
})

export default store;