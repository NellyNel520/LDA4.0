import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useEffect, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { Link } from 'react-router-dom'
import '../../../styles/userActivity.css'

const NewestUsers = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await userRequest.get('/users/?new=true')
				setUsers(res.data)
			} catch {}
		}
		getUsers()
		// console.log(users)
	}, [])

	return (
		<div className="relative mr-6 flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded h-[45%] overflow-auto">
			<div className="rounded-t mb-0 px-0 border-0">
				{/* Card heading */}
				<div className="flex flex-wrap items-center px-4 py-2">
					<div className="relative w-full max-w-full flex-grow flex-1">
						<h3 className="font-semibold text-lg text-gray-900 dark:text-gray-50 font-abril">
							Recent Users
						</h3>
					</div>
					<div className="relative w-full max-w-full flex-grow flex-1 text-right">
						<Link to={'/users'}>
							<button
								className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-400 hover:text-white"
								type="button"
							>
								See all
							</button>
						</Link>
					</div>
				</div>

				<div className="block w-full overflow-x-auto">
					<table className="items-center w-full bg-transparent border-collapse">
						{/* table heading */}
						<thead>
							<tr>
								<th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
									User
								</th>
								<th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
									Email
								</th>
								<th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
							</tr>
						</thead>

						<tbody>
							{users.map((user) => (
								<tr className="text-gray-700 dark:text-gray-100 font-play text-md">
									<th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  text-left">
										{/* name and icon */}
										<div className="flex text-md">
											<span className="mr-2 ">
												<AccountCircleIcon />
											</span>
											<span>{user.name}</span>
										</div>
									</th>
									<td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
										{/* user email */}
										{user.email}
									</td>
									<td className="border-t-0 align-middle border-l-0 border-r-0 justify-end text-xs whitespace-nowrap p-">
										{/* <div className="flex items-center">button */}

										<Link to={`/user/${user._id}`}>
											<button className="widgetSmButton p-1 bg-[#eeeef7] hover:bg-blue-400 hover:text-white">
												<div className="">
													<VisibilityIcon />
												</div>
												<span className="hidden md:flex">Display</span>
											</button>
										</Link>

										{/* </div> */}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default NewestUsers
