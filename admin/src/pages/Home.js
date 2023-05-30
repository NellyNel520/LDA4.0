import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import StatCards from '../components/dashboard/stat-cards/index'
import UserActivity from '../components/dashboard/userAnalytics'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../services/requestMethods'
import RecentOrders from '../components/dashboard/latestOrders/RecentOrders'

const Home = ({ user }) => {
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
			<Navbar user={user} />
			<div className="flex">
				<div>
					<Sidebar />
				</div>

				<div class="h-full w-full  mt-8 mb-10">
					<StatCards />
					<UserActivity />
					<RecentOrders />
				</div>
			</div>
		</div>
	)
}

export default Home
