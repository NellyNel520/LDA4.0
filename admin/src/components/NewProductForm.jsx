import React from 'react'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { userRequest } from '../services/requestMethods'

const NewProductForm = () => {
	let navigate = useNavigate()
	const [err, setErr] = useState(false)
	const [inputs, setInputs] = useState({})
	const [file, setFile] = useState(null)
	const [color, setColor] = useState([])
	const [size, setSize] = useState([])
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleColor = (e) => {
		setColor(e.target.value.split(','))
	}
	const handleSize = (e) => {
		setSize(e.target.value.split(','))
	}

	const addNewProduct = (e) => {
		e.preventDefault()
		const date = new Date().getTime()
		const storageRef = ref(storage, `${file.name + date}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				console.log('Upload is ' + progress + '% done')
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused')
						break
					case 'running':
						console.log('Upload is running')
						break
					default:
				}
			},
			(error) => {
				setErr(true)
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
					console.log('File available at', downloadURL)
					const product = {
						...inputs,
						img: downloadURL,
						size: size,
						color: color,
					}
					console.log(product)

					await userRequest.post('/products/add', product)
					navigate('/products')
					navigate(0)
				})
			}
		)
	}

	return (
		<div className="text-white m-4">
			<div className='className="p-10 space-y-4 md:space-y-6 sm:p-8"'>
				<p className=" text-center font-bold  font-abril text-blue-500 md:text-[3rem] ">
					Add Product
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 p-4 gap-4 text-black dark:text-white">
					<form className="space-y-4 md:space-y-6" action="#">
						<div className="">
							<label
								for="email"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Product Name
							</label>
							<input
								name="title"
								onChange={handleChange}
								type="text"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div>
							<label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
								Image
							</label>
							<input
								type="file"
								id="file"
								onChange={(e) => setFile(e.target.files[0])}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>

						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Product Description
							</label>
							<textarea
								name="desc"
								onChange={handleChange}
								rows="5"
								cols="50"
								id="password"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Categories
							</label>
							<input
								onChange={handleChange}
								type="text"
								name="categories"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Price
							</label>
							<input
								name="price"
								onChange={handleChange}
								type="number"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Sizes(s) <span className="text-gray-600">*required</span>
							</label>
							<input
								name="size"
								onChange={handleSize}
								type="text"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Available Color(s){' '}
								<span className="text-gray-600">*required</span>
							</label>
							<input
								name="color"
								onChange={handleColor}
								type="text"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Count In Stock
							</label>
							<input
								name="inStock"
								onChange={handleChange}
								type="number"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<div>
							<label
								for="password"
								className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
							>
								Rating (1-5)
							</label>
							<input
								name="rating"
								type="number"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>

						<button
							onClick={addNewProduct}
							className="w-full text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							ADD
						</button>
					</form>
					{err && <span>Something went wrong</span>}
				</div>
			</div>
		</div>
	)
}

export default NewProductForm
