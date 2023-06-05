import React from 'react'
import { useEffect, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { format } from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import '../../../styles/orderList.css'


const RecentOrders = () => {
	const [orders, setOrders] = useState([])
	const users = useSelector((state) => state.customer.users)

	useEffect(() => {
		const getOrders = async () => {
			try {
				const res = await userRequest.get('/orders/all/?new=true')
				setOrders(res.data)
			} catch {}
		} 
		getOrders()
	}, [])

	const Button = ({ type }) => {
		return <button className={'orderStatusButton ' + type}>{type}</button>
	}

	return (
		<div className="text-white">
			<div className=" ml-4">
				<div className="w-full overflow-hidden rounded-lg shadow-xs">
					<div className="w-full overflow-x-auto">
						<h1 className="text-3xl font-abril pb-3">Latest Orders</h1>
						<table className="w-full rounded">
							<thead>
								<tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
									<th className="px-4 py-3">Client</th>
									<th className="px-4 py-3">Amount</th>
									<th className="px-4 py-3">Status</th>
									<th className="px-4 py-3">Date</th>
									<th className="px-4 py-3">ID</th>
									<th className="px-4 py-3">Edit Order</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
								{/* map orders here */}
								{orders.map((order) => (
									<tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
										<td className="px-4 py-3">
											<div className="flex items-center text-sm">
											 
												<div>
													<p className="font-semibold text-md">{order.email}</p>
												</div>
											</div>
										</td>
										<td className="px-4 py-3 text-sm">${order.amount}</td>
										<td className="px-4 py-3 text-xs">
											{/* <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
												{' '}
												Approved{' '}
											</span> */}
											<Button type={order.status.toUpperCase()} />
										</td>
										<td className="px-4 py-3 text-sm">
											{moment(order.createdAt).format('MMM DD, YYYY')}
											<span className="pl-3 text-gray-600">
												({format(order.createdAt)})
											</span>{' '}
										</td>
										<td className="px-4 py-3 text-sm">{order._id}</td>
										<td className="px-4 py-3 text-xs">
											<Link to={'/order/' + order._id}>
												<button className="p-4 py-2 font-semibold leading-tight  -100 rounded-full bg-blue-500 text-white hover:bg-green-400">
													{' '}
													View{' '}
												</button>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/* <!-- ./Client Table --> */}
		</div>
	)
}

export default RecentOrders
