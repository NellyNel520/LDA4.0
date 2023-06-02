import React from 'react'
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'
import UserChart from './UserChart'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'

const Chart = () => {
	const [userStats, setUserStats] = useState([])

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
						{ name: MONTHS[item._id], 'Active User': item.total },
					])
				)
			} catch {}
		}
		getStats()
		console.log(userStats)
	}, [MONTHS])
	return (
		<div class="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
			<div class="rounded-t mb-0 px-0 border-0">
				<div class="flex flex-wrap items-center px-4 py-2">
					<div class="relative w-full max-w-full flex-grow flex-1">
						<h3 class="font-semibold text-lg text-gray-900 dark:text-gray-50 font-abril">
							User Analytics
						</h3>
					</div>
					<div class="relative w-full max-w-full flex-grow flex-1 text-right">
						<button
							class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="button"
						>
							Reports
						</button>
					</div>
				</div>

				<div class="block w-full pr-3 h-[35%]">
					<UserChart
						data={userStats}
						// title="User Analytics"
						grid
						dataKey="Active User"
					/>
				</div>
			</div>
		</div>
	)
}

export default Chart