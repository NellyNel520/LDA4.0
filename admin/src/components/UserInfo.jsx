import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

import moment from 'moment'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { updateUser } from '../services/apiCalls'
import { useNavigate } from 'react-router'
import '../styles/user.css'
import { userRequest } from '../services/requestMethods'

const UserInfo = () => {
	const location = useLocation() 
	const id = location.pathname.split('/')[2]
	const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()
	let navigate = useNavigate()

	const user = useSelector((state) =>
		state.customer.users.find((user) => user._id === id)
	)

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}
	// ***Previous Update function***
	// const handleUpdate = (e) => {
	// 	e.preventDefault()
	// 	const customer = {
	// 		...inputs,
	// 	}
	// 	updateUser(id, customer, dispatch)
	// 	navigate('/users')
	// 	navigate(0)
	// }
	const handleUpdate = async (e) => {
		e.preventDefault()
		const customer = {
			...inputs,
		}
		await userRequest.put(`/users/${id}`, customer)
		navigate('/users')
		navigate(0)
	}

	return (
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 p-4 gap-4 text-black dark:text-white">
			{/* <div class="md:col-span-2 xl:col-span-3">
      <h3 class="text-lg font-semibold">Task summaries of recent sprints</h3>
    </div> */}
			<div class="md:col-span-2 xl:col-span-1">
				{/* card 1 */}
				<div class="rounded bg-gray-200 dark:bg-gray-800">
					{/* <div class="flex justify-between py-1 text-black dark:text-white">
          <h3 class="text-sm font-semibold">Tasks in TO DO</h3>
          
        </div> */}
					<div class="text-sm w-full text-black dark:text-gray-50 mt-2">
						<div className="userShow  p-3 rounded font-play">
							<div className="userShowTop">
								<img
									src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
									alt=""
									className="userShowImg"
								/>
								<div className="userShowTopTitle">
									<span className="userShowUsername text-lg md:text-3xl text-blue-500 font-abril">
										{user.name}
									</span>
									<span className="userShowUserTitle text-md md:text-lg">
										Loyal Customer
									</span>
								</div>
							</div>
							<div className="userShowBottom">
								<span className="userShowTitle">Account Details</span>
								<div className="userShowInfo justify-between md:flex">
									<span className="flex ">
										<PermIdentityIcon className="userShowIcon " />
										<span className="hidden md:flex ml-1 text-gray-400">
											ID:
										</span>
									</span>

									<span className="userShowInfoTitle tracking-wide truncate">
										{user._id}
									</span>
								</div>
								<div className="userShowInfo justify-between md:flex">
									<span className="flex ">
										<CalendarTodayIcon className="userShowIcon" />
										<span className="hidden md:flex ml-1 text-gray-400">
											Member Since:
										</span>
									</span>
									<span className="userShowInfoTitle">
										{moment(user.createdAt).format('MMM DD, YYYY')}
										{/* 10.12.1999 */}
									</span>
								</div>
								<span className="userShowTitle">Contact Details</span>
								<div className="userShowInfo justify-between md:flex">
									<span className="flex">
										<MailOutlineIcon className="userShowIcon" />
										<span className="hidden md:flex ml-1 text-gray-400">
											Email:
										</span>
									</span>
									<span className="userShowInfoTitle">{user.email}</span>
								</div>
								<div className="userShowInfo justify-between md:flex">
									<span className="flex">
										<PhoneAndroidIcon className="userShowIcon" />
										<span className="hidden md:flex ml-1 text-gray-400">
											Phone Number:
										</span>
									</span>
									<span className="userShowInfoTitle">{user.phoneNumber}</span>
								</div>
								<div className="userShowInfo justify-between md:flex">
									<span className="flex">
										<LocationSearchingIcon className="userShowIcon" />
										<span className="hidden md:flex ml-1 text-gray-400">
											Address:{' '}
										</span>
									</span>
									<span className="userShowInfoTitle">{user.address}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* card 2 */}
			</div>
			<div>
				<div class="rounded bg-gray-200 dark:bg-gray-800 p-3">
					<div class="flex justify-between py-1 text-black dark:text-white">
						<h3 class="text-3xl font-abril font-semibold text-blue-500">Update User</h3>
					</div>
					<div class="text-sm text-black dark:text-gray-50 mt-2">
						{/* form */}
						<form class="space-y-1 md:space-y-2 font-play" action="#">
							<div className="">
								<label
									for="name"
									class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
								>
									Full Name
								</label>
								<input
									name="name"
									onChange={handleChange}
									type="text"
									placeholder={user.name}
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="true"
								/>
							</div>
							<div>
								<label
									for="email"
									class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
								>
									Email
								</label>
								<textarea
									name="email"
									onChange={handleChange}
									type="text"
									placeholder={user.email}
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="true"
								/>
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="true"
									// value={formValues.password}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label
									for="confirm-password"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Confirm password
								</label>
								<input
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									placeholder="••••••••"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

									// value={formValues.confirmPassword}
									// onChange={handleChange}
								/>
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
								>
									Phone Number (optional)
								</label>
								<input
									name="phoneNumber"
									placeholder={user.phoneNumber}
									onChange={handleChange}
									type="text"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="true"
								/>
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
								>
									Address (optional)
								</label>
								<input
									name="address"
									placeholder={user.address}
									onChange={handleChange}
									type="text"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required="true"
								/>
							</div>

							<button
								// onClick={handleClick}
								// disabled={isFetching}
								onClick={handleUpdate}
								class="w-full text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								UPDATE
							</button>
						</form>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default UserInfo
