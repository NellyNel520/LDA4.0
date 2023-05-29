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
import { userRequest } from '../services/requestMethods'

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
						{ name: MONTHS[item._id - 1], 'Active User': item.total },
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
				<div class="md:col-span-2 xl:col-span-3">
					<h3 class="text-lg font-semibold">
						Task summaries of recent sprints
					</h3>
				</div>

				{/* Card 1 */}
				<div class="md:col-span-2 xl:col-span-1">
					<div class="rounded bg-gray-200 dark:bg-gray-800 p-3">
						{/* Title */}
						<div class="flex justify-between py-1 text-black dark:text-white">
							<h3 class="text-2xl font-abril font-semibold text-blue-500">
								Newest Users
							</h3>
							<svg
								class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
							</svg>
						</div>
						<NewUsers />
					</div>
				</div>

				{/* Card 2 */}
				<div>
					<div class="rounded bg-gray-200 dark:bg-gray-800 p-3">
						{/* title */}
						{/* <div class="flex justify-between py-1 text-black dark:text-white">
                <h3 class="text-sm font-semibold">Tasks in QA</h3>
                <svg class="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
              </div> */}
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
