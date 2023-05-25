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

