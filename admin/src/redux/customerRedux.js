import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: { 
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getCustomerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCustomerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.customer;
    },
    updateCustomerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //add
    addCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    addCustomerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCustomerStart,
  getCustomerSuccess,
  getCustomerFailure,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailure,
  updateCustomerStart,
  updateCustomerSuccess,
  updateCustomerFailure,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailure,
} = customerSlice.actions;

export default customerSlice.reducer;
