import React from 'react'
import { userRequest } from '../../services/requestMethods'
import { useEffect, useState } from 'react'
import OrderProducts from './OrderProducts'
import moment from 'moment'
import '../../styles/order.css'

const LatestOrder = ({ user }) => {
	const id = user._id
	console.log(id)
	const [orders, setOrders] = useState([])

	const Button = ({ type }) => {
		return <button className={'orderStatusButton ' + type}>{type}</button>
	}

	useEffect(() => {
		const getUsersOrders = async () => {
			try {
				const res = await userRequest.get(`/orders/find/${id}/?new=true`)
				setOrders(res.data)
			} catch {}
		}
		getUsersOrders()
		console.log(orders)
	}, [])

	return (
		<div className="text-white">
			{orders.map((order) => (
				<div>
					<div className="order border ">
						<div className="orderTop py-6 flex-wrap lg:flex border text-xl">
							<div className="px-4">
								<span className="font-bold text-gray-400">Order Number </span>
								<div>
									<span>#{order._id}</span>
								</div>
							</div>

							<div className="px-4">
								<span className="font-bold  text-gray-400">Date Placed</span>

								<div>{moment(order.createdAt).format('MMM DD, YYYY')}</div>
							</div>

							<div className="px-4">
								<span className="font-bold  text-gray-400">Total</span>
								<div>${order.amount.toFixed(2)}</div>
							</div>

							<div className="px-4">
								<span className="font-bold  text-gray-400">Status</span>
								{/* <div>{order.status}</div> */}
								<div>
									<Button type={order.status} />
								</div>
							</div>
						</div>
					</div>
						<div><OrderProducts order={order} /></div>
				</div>
			))}
		</div>
	)
}

export default LatestOrder
