import React from 'react'
import NewUsers from './NewUsers'
import UserChart from './UserChart'
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'

const UserActivity = () => {
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
		<div>
			<div class="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 p-4 gap-4 text-black dark:text-white">
				{/* Card 1 */}
				<div class="md:col-span-2 xl:col-span-1">
					<div class="rounded bg-gray-200 dark:bg-gray-800 p-3">
						<NewUsers />
					</div>
				</div>

				{/* Card 2 */}
				<div>
					<div class="rounded bg-gray-200 dark:bg-gray-800 p-3">
						<UserChart
							data={userStats}
							title="User Analytics"
							grid
							dataKey="Active User"
						/>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	)
}

export default UserActivity
