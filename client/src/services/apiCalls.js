import {
	loginFailure,
	loginStart,
	loginSuccess,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
} from '../redux/userRedux'
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,
} from '../redux/orderRedux'
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "../redux/productRedux";
import { publicRequest, userRequest } from './requestMethods'
import { useEffect, useState } from 'react'

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicRequest.post('/auth/login', user)
		dispatch(loginSuccess(res.data))
	} catch (err) {
		dispatch(loginFailure())
	}
}


export const registerUser = async (data) => {
	try {
		const res = await publicRequest.post('/auth/register', data)
		return res.data
	} catch (error) {
		throw error
	}
}


export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products/");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};


// ORDER

export const createOrder = async (order, dispatch) => {
	dispatch(addOrderStart())
	try {
		const res = await userRequest.post('/orders/new', order);
		dispatch(addOrderSuccess(res.data));
	} catch (err) {
		dispatch(addOrderFailure());
	}
}

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};


