import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../services/apiCalls'

const Login = () => {
	let navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isFetching, error } = useSelector((state) => state.user)

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch, { email, password })
		navigate('/')
	}

	return (
		<div className="regContainer font-play">
			<div class="flex flex-col items-center justify-center px-[2rem] py-8 mx-auto md:h-screen lg:py-0">
				{/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite    
      </a> */}
				<div class="regWrapper w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
					<div class="p-10 space-y-4 md:space-y-6 sm:p-8">
						<p class=" text-center font-bold  font-play text-blue-600 md:text-[3rem] ">
							Login
						</p>
						<form class="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									for="email"
									class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required="true"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label
									for="password"
									class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
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
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<button
								onClick={handleClick}
								disabled={isFetching}
								class="w-full text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Login
							</button>

							<p class="text-md font-light text-black ">
								Don'y have an account?{' '}
								<a
									href="/register"
									class="font-medium text-blue-500 hover:underline dark:text-primary-500 "
								>
									Register here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
