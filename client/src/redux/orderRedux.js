import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({ 
  name: "order",
  initialState: { 
    orders: [], 
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL USER ORDERS
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getAllOrdersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getAllOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getAllOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders.push(action.payload);
    },
    addOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});


export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  getAllOrdersStart,
  getAllOrdersSuccess,
  getAllOrdersFailure,
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
