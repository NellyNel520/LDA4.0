import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, getUsers } from '../../../services/apiCalls'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const AnnualSales = () => {
	const [annualIncome, setAnnualIncome] = useState([])
	const [currentYearIncome, setCurrentYearIncome] = useState()
	const [annualPercent, setAnnualPercent] = useState(0)
	const dispatch = useDispatch()

	useEffect(() => {
		const getAnnualIncome = async () => {
			try {
				const res = await userRequest.get('orders/annual-income')
				console.log(res.data[0].total)
				setAnnualIncome(res.data)
				setCurrentYearIncome(res.data[0].total)
				setAnnualPercent((res.data[0].total * 100) / res.data[1].total - 100)
			} catch {}
		}
		getAnnualIncome()
	}, [])

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
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			</div>
			<div class="text-right">
				<p class="text-2xl">${currentYearIncome}</p>
				<p>Annual Sales</p>
			</div>
		</div>
	)
}

export default AnnualSales
