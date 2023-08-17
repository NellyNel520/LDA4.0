import React from 'react'
import { userRequest } from '../services/requestMethods'
import { useEffect, useState } from 'react'
// import OrderProducts from './OrderProducts'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import moment from 'moment'
import '../styles/orderHistory.css'
import OrderProducts from './oder-info/OrderProducts'

const UserOrderHistory = ({ customer }) => {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [orders, setOrders] = useState([])
	const dispatch = useDispatch()
	let navigate = useNavigate()
	const user = useSelector((state) =>
		state.customer.users.find((user) => user._id === id)
	)
	// const userId = user._id

	const Button = ({ type }) => {
		return <button className={'orderStatusButton ' + type}>{type}</button>
	}

	useEffect(() => {
		const getUsersOrders = async () => {
			try {
				const res = await userRequest.get(`/orders/find/${user._id}`)
				setOrders(res.data)
			} catch {}
		}
		getUsersOrders()
		console.log(orders)
	}, [])

	return (
		<div className=" mx-4">
			<h1 className="text-blue-500 text-4xl font-abril mb-4">Order History</h1>

			{orders.length > 0 ? (
				<div className="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
					{/* <h4 className="text-lg font-semibold"></h4> */}
					{orders.slice(0, 60).map((order) => (
						<div className="mb-10">
							<div className="order rounded ">
								<div className="orderTop bg-[#316dc2] rounded mb-5 py-6 flex-wrap lg:flex border text-md lg:text-xl justify-between">
									<div className="px-4 ">
										<span className="font-bold text-gray-700 font-abril">
											Order Number{' '}
										</span>
										<div>
											<span>#{order._id}</span>
										</div>
									</div>

									<div className="px-4">
										<span className="font-bold  text-gray-700 font-abril">
											Date Placed
										</span>

										<div>{moment(order.createdAt).format('MMM DD, YYYY')}</div>
									</div>

									<div className="px-4">
										<span className="font-bold  text-gray-700 font-abril">
											Total
										</span>
										<div>${order.amount.toFixed(2)}</div>
									</div>

									<div className="px-4">
										<span className="font-bold  text-gray-700 font-abril ">
											Status
										</span>

										<div className="mt-2 ">
											<Button type={order.status} />
										</div>
									</div>
								</div>
							</div>
							<div>
								<OrderProducts order={order} />
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="text-white text-3xl text-center font-play">No Orders Placed</div>
			)}
		</div>
	)
}

export default UserOrderHistory
