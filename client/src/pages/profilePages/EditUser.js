import React from 'react'
import Sidebar from '../../components/Sidebar'
import '../../styles/userProfile.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../services/apiCalls'

const EditUser = ({ user }) => {
	const id = user._id
	const [inputs, setInputs] = useState({})
	let navigate = useNavigate()
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		const user = {
			...inputs,
		}
		console.log(user)
		updateUser(id, user, dispatch)
		navigate('/profile')
	}

	return (
		<div>
			<div className="flex">
				<Sidebar />

				<div className="ml-20 mt-10">
					<div className="regWrapper w-full md:w-[100%] rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-10 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-center font-bold  font-play text-white md:text-[3rem]">
								Edit Account
							</h1>
							<form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label
										for="name"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Full Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder={user.name}
										onChange={handleChange}
									
									/>
								</div>
								<div>
									<label
										for="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										 Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder={user.email}
										required="true"
										// value={formValues.email}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label
										for="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required="true"
										// value={formValues.password}
										onChange={handleChange}
									/>
								</div>
								<div>
									<label
										for="confirm-password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Confirm password
									</label>
									<input
										type="password"
										name="confirmPassword"
										id="confirmPassword"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										
										// value={formValues.confirmPassword}
										// onChange={handleChange}
									/>
								</div>
                <div>
									<label
										
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Phone Number (Optional)
									</label>
									<input
										type="text"
										name="phoneNumber"
										id="confirmPassword"
										placeholder={user.phoneNumber}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										
										// value={formValues.confirmPassword}
										onChange={handleChange}
									/>
								</div>
                <div>
									<label
										for="confirm-password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Address (Optional)
									</label>
									<input
										type="password"
										name="address"
										id="address"
										placeholder={user.address}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									
										// value={formValues.confirmPassword}
										onChange={handleChange}
									/>
								</div>
								
								<button
									onClick={handleUpdate}
									type="submit"
									className="w-full text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Update Account
								</button>

								
								
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditUser
