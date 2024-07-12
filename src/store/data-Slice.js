import { createSlice } from "@reduxjs/toolkit";

export const menuItem = [
    {
      id: Math.floor((Math.random) * 1000),
      path: "/",
      menu: "home",
      icon: "fa-solid fa-house"
    },
    {
      id: Math.floor((Math.random) * 1000),
      path: "/about",
      menu: "about",
      icon: "fa-solid fa-house"
    },
    {
      id: Math.floor((Math.random) * 1000),
      path: "/portfolio",
      menu: "portfolio",
      icon: "fa-solid fa-house"
    },
    {
      id: Math.floor((Math.random) * 1000),
      path: "/contact",
      menu: "contact",
      icon: "fa-solid fa-house"
    },
  ]
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    dataList: []
  },
  reducers: {
    addData(state, action) {
      const newItem = action.payload;

      state.dataList.push(newItem)
    }
  }
})

export const dataActions = dataSlice.actions;

export default dataSlice;