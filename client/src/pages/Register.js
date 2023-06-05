import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/apiCalls'
import { Link } from 'react-router-dom'

const Register = () => {

	let navigate = useNavigate()
	const initialState = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	}
	const [formValues, setFormValues] = useState(initialState)

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await registerUser({
			name: formValues.name,
			email: formValues.email,
			password: formValues.password,
		})
		setFormValues(initialState)
		navigate('/login')
	}


	return (
		<div className="regContainer font-play">
			
				<div className="flex flex-col items-center justify-center px-[1rem] py-8 mx-auto md:h-screen lg:py-0">
					{/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite    
      </a> */}
					<div className="regWrapper w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-10 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create Account
							</h1>
							<form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
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
										placeholder="John Doe"
										value={formValues.name}
										onChange={handleChange}
										required="true"
									/>
								</div>
								<div>
									<label
										for="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
										required="true"
										value={formValues.email}
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
										value={formValues.password}
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
										required="true"
										value={formValues.confirmPassword}
										onChange={handleChange}
									/>
								</div>
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="terms"
											aria-describedby="terms"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
											required=""
										/>
									</div>
									<div className="ml-3 text-sm">
										<label
											for="terms"
											className="font-light text-gray-500 dark:text-gray-300"
										>
											I accept the{' '}
											<a
												className="font-medium text-blue-700 hover:underline dark:text-blue-700"
												href="#"
											>
												Terms and Conditions
											</a>
										</label>
									</div>
								</div>
								<button
								disabled={
										!formValues.email ||
										(!formValues.password &&
											formValues.confirmPassword === formValues.password)
									}
									type="submit"
									className="w-full text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Create an account
								</button>

								<p className="text-md font-light text-black ">
									Already have an account?{' '}
									<a
										href="/login"
										className="font-medium text-blue-500 hover:underline dark:text-primary-500 "
									>
										Login here
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			
		</div>
	)
}

export default Register
