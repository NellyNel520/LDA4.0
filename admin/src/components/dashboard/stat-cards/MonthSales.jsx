import React from 'react'
import { useEffect, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../services/apiCalls'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const MonthSales = () => {
	const [income, setIncome] = useState([])
	const [currentMonthIncome, setCurrentMonthIncome] = useState()
	const [perc, setPerc] = useState(0)
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.order.orders)

	let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

	useEffect(() => {
		getOrders(dispatch)
	}, [dispatch])

	useEffect(() => {
		const getMonthlyIncome = async () => {
			try {
				const res = await userRequest.get('orders/stats')
				setIncome(res.data)
				setPerc((res.data[0].income * 100) / res.data[1].income - 100)
				setCurrentMonthIncome(res.data[0].income)
			} catch {}
		}
		getMonthlyIncome()
	}, [])
	return (
		<div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md  items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
			<div className="flex justify-between">
				<div className="text-right">
					<p className="text-lg font-play">Monthly Sales</p>
				</div>
				<div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
					<svg
						width="30"
						height="30"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
						></path>
					</svg>
				</div>
			</div>

			<div className="text-2xl">{USDollar.format(currentMonthIncome)}</div>
			<div className="flex justify-between mt-6">
				<div>
					{perc < 0 ? (
						<ArrowDownwardIcon className="featuredIcon negative text-red-600" />
					) : (
						<ArrowUpwardIcon className="featuredIcon text-green-600" />
					)}
					<span>{Math.floor(perc)}%</span>
				</div>
				<div className="font-play text-gray-500">Compared to last month</div>
			</div>
		</div>
	)
}

export default MonthSales
