import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, getUsers } from '../../../services/apiCalls'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const TotalOrders = () => {
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.order.orders)

	useEffect(() => {
		getOrders(dispatch)
	}, [dispatch])

	useEffect(() => {
		getUsers(dispatch)
	}, [dispatch])
	return (
		<div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
			<div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
				<svg
					width="30"
					height="30"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
					></path>
				</svg>
			</div>
			<div class="text-right">
				<p class="text-2xl">{orders.length}</p>
				<p>Orders</p>
			</div>
		</div>
	)
}

export default TotalOrders
