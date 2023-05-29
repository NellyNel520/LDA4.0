import React from 'react'
import { useEffect, useState } from 'react'
import { userRequest } from '../services/requestMethods'
import { format } from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import '../styles/orderList.css'


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
			<div class="mx-4">
				<div class="w-full overflow-hidden rounded-lg shadow-xs">
					<div class="w-full overflow-x-auto">
          <h1 className='text-3xl font-abril pb-3'>Latest Orders</h1>
						<table class="w-full">
							<thead>
								<tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
									<th class="px-4 py-3">Client</th>
									<th class="px-4 py-3">Amount</th>
									<th class="px-4 py-3">Status</th>
									<th class="px-4 py-3">Date</th>
                  <th class="px-4 py-3">ID</th>
                  <th class="px-4 py-3">Edit Order</th>
                  
								</tr>
							</thead>
							<tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
								{/* map orders here */}
								{orders.map((order) => (
									<tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
										<td class="px-4 py-3">
											<div class="flex items-center text-sm">
												<div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
													<img
														class="object-cover w-full h-full rounded-full"
														src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
														alt=""
														loading="lazy"
													/>
													<div
														class="absolute inset-0 rounded-full shadow-inner"
														aria-hidden="true"
													></div>
												</div>
												<div>
													<p class="font-semibold">{order.email}</p>
													<p class="text-xs text-gray-600 dark:text-gray-400">
														10x Developer
													</p>
												</div>
											</div>
										</td>
										<td class="px-4 py-3 text-sm">${order.amount}</td>
										<td class="px-4 py-3 text-xs">
											{/* <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
												{' '}
												Approved{' '}
											</span> */}
                      <Button type={order.status.toUpperCase()} />
										</td>
										<td class="px-4 py-3 text-sm">{moment(order.createdAt).format('MMM DD, YYYY')}<span className='pl-3 text-gray-600'>({format(order.createdAt)})</span> </td>
                    <td class="px-4 py-3 text-sm">{order._id}</td>
                    <td class="px-4 py-3 text-xs">
											<Link to={'/order/' + order._id}>
                      <button class="p-4 py-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
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
