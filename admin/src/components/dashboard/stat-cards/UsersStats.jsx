import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, getUsers } from '../../../services/apiCalls'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const UsersStats = () => {
	const [userStats, setUserStats] = useState([])
	const users = useSelector((state) => state.customer.users)
	const dispatch = useDispatch()
	const [perc, setPerc] = useState(0)

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
				const res = await userRequest.get('/users/stats')
				res.data.map((item) =>
					setUserStats((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], 'Active User': item.total },
					])
				)
				setPerc((res.data[0].total * 100) / res.data[1].total - 100)
			} catch {}
		}
		getStats()
	
	}, [MONTHS])

	useEffect(() => {
		getUsers(dispatch)
	}, [dispatch])

	
	return (
		<div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md  items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
			{/* image and animation */}
			<div className="flex justify-between">
				<div className="text-right text-xl font-play">
					{/* <p className="text-2xl">{users.length}</p> */}
					<p>Total Customers</p>
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
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
			</div>

			<div className="text-2xl">{users.length}</div>
			<div className="flex justify-between mt-6">
				<div className="">
					{/* percent */}
					<div>
					{perc < 0 ? (
						<ArrowDownwardIcon className="featuredIcon negative text-red-600" />
					) : (
						<ArrowUpwardIcon className="featuredIcon text-green-600" />
					)}
					<span>{Math.floor(perc)}%</span>
				</div>
				</div>
				<div className="font-play text-gray-500">Compared to last month</div>
			</div>
		</div>
	)
}

export default UsersStats
