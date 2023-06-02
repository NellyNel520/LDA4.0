import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import StatCards from '../components/dashboard/stat-cards/index'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../services/requestMethods'
import RecentOrders from '../components/dashboard/latestOrders/RecentOrders'
import NewestUsers from '../components/dashboard/userAnalytics/NewestUsers'
import Chart from '../components/dashboard/userAnalytics/Chart'
import OrderChart from '../components/dashboard/latestOrders/OrderChart'

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

				<div class="h-[100vh] w-full ">
					<StatCards /> 
					<div className="block md:flex lg:flex justify-between m-4 ">
						<NewestUsers />
						<Chart />
					</div>
					<div className='block md:flex lg:flex justify-between m-4 h-[70%]'>
						<OrderChart />
						<RecentOrders />
					</div>
					{/* <UserActivity /> */}
				</div>
			</div>
		</div>
	)
}

export default Home
