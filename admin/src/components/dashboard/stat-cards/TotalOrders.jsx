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
	const [orderStats, setOrderStats] = useState([])
	const [currentMonth, setCurrentMonth] = useState([])
	const [perc, setPerc] = useState(0)

	useEffect(() => {
		getOrders(dispatch)
	}, [dispatch])

	useEffect(() => {
		getUsers(dispatch)
	}, [dispatch])

	const MONTHS = useMemo(
		() => [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Agu',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		[]
	)

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await userRequest.get('/orders/stats')
				setOrderStats(res.data)
				setCurrentMonth(res.data[0].total)
				setPerc((res.data[0].total * 100) / res.data[1].total - 100)
			} catch {}
		}
		getStats()
	
	}, [MONTHS])

	return (
		<div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md  items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
			<div className="flex justify-between">
				<div className="text-right text-xl font-play">
					<p>Monthly Orders</p>
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
							d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
						></path>
					</svg>
				</div>
			</div>
			<div className='text-2xl'>{currentMonth}</div>

			<div className="flex justify-between mt-6">
			<div>
					{perc < 0 ? (
						<ArrowDownwardIcon className="featuredIcon negative text-red-600" />
					) : (
						<ArrowUpwardIcon className="featuredIcon text-green-600" />
					)}
					<span>{Math.floor(perc)}%</span>
				</div>
				<div>Compared to last month</div>
			</div>
		</div>
	)
}

export default TotalOrders
