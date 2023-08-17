import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
// import { updateOrder} from '../../services/apiCalls'
import { useNavigate } from 'react-router'
import {  userRequest } from '../../services/requestMethods'

const OrderInfo = () => {
	const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [status, setStatus] = useState('')
	const [name, setName ] = useState('')
	// const [order, setOrder] = useState({})

	// const dispatch = useDispatch()
	let navigate = useNavigate()

	const order = useSelector((state) =>
		state.order.orders.find((order) => order._id === id)
	)
	console.log(order)

	useEffect(() => {
		const getCustomerName =  async () => {
		try {
			const res = await userRequest.get(`/users/find/${order.userId}`)
			setName(res.data.name)
		} catch {}
		}
		getCustomerName()
	}, [])

	
	


	const handleChange = (e) => {
		setStatus((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
 
	// ***Previous Update function***
	// const handleUpdate = (e) => {
	// 	e.preventDefault()
	// 	const order = {
	// 		...status,
	// 	}
	// 	updateOrder(id, order, dispatch)
	// 	navigate('/orders')
	// 	navigate(0)
	// }

	const handleUpdate = async (e) => {
		e.preventDefault()
		const order = {
			...status,
		}
		await userRequest.put(`/orders/${id}`, order)
		navigate('/orders')
		navigate(0)
	}

	

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 p-4 gap-4 text-black dark:text-white">
			{/* <div className="md:col-span-2 xl:col-span-3">
      <h3 className="text-lg font-semibold">Task summaries of recent sprints</h3>
    </div> */}

			{/* card 1 */}
			<div className="md:col-span-2 xl:col-span-1">
				<div className="rounded bg-gray-200 dark:bg-gray-800">
					<form className="space-y-4 md:space-y-6 px-4 pt-6 pb-10" action="#">
						<div>
							<label
								for="email"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white font-abril text-lg md:text-2xl px-2 py-4"
							>
								Update Order Status:
							</label>
							<select
								name="status"
								id="status"
								onChange={handleChange}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@company.com"
								required="true"
							>
								<option>Select</option>
								<option value="pending">pending</option>
								<option value="approved">approved</option>
								<option value="declined">declined</option>
							</select>
						</div>

						<button
							onClick={handleUpdate}

							className="w-full text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							Update
						</button>
					</form>
				</div>
			</div>

			{/* card 2 */}
			<div>
				<div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
					<div className="flex justify-between py-1 text-black dark:text-white">
						<h3 className="text-2xl font-abril font-semibold p-2">Shipping Info</h3>
					</div>
					<div className="text-sm text-black dark:text-gray-50 mt-2">
						{/* form */}
						
							<div className="text-md md:text-xl font-play p-2">
								<div className="orderShowInfo ">
									Name:
									<span className="orderShowInfoTitle ">
										{' '}
										{name}
									</span>
									
								</div>
								<div className="mt-[]">
									Address:
									<span className="orderShowInfoTitle ">
										{' '}
										{order.address.line1}
									</span>
									
								</div>
								<div className="mt-[]">
									City:{' '}
									<span className="orderShowInfoTitle">
										{' '}
										{order.address.city}
									</span>
								</div>
								<div className="mt-[]">
									State:{' '}
									<span className="orderShowInfoTitle">
										{' '}
										{order.address.state}
									</span>
								</div>
								<div className="mt-[]">
									ZipCode:{' '}
									<span className="orderShowInfoTitle">
										{' '}
										{order.address.postal_code}
									</span>
								</div>
								<div className="mt-[]">
									Country:{' '}
									<span className="orderShowInfoTitle">
										{' '}
										{order.address.country}
									</span>
								</div>
							</div>
						
					</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default OrderInfo
