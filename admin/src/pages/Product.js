import React from 'react'
import '../styles/product.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import ProductDetails from '../components/product/ProductDetails'
import ProductUpdate from '../components/product/ProductUpdate'
import { useNavigate } from 'react-router'
import { userRequest } from '../services/requestMethods'


const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;

	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`
const FilterSizeOption = styled.option``

const Product = ({ user }) => {
	const location = useLocation()
	const productId = location.pathname.split('/')[2]
	const [pStats, setPStats] = useState([])
	const dispatch = useDispatch()
	let navigate = useNavigate()


	const product = useSelector((state) =>
		state.product.products.find((product) => product._id === productId)
	)

	// const handleDelete = (id) => {
	// 	deleteProduct(id, dispatch) 
	// 	navigate('/products')
	// }

	const handleDelete = async (id) => {
		await userRequest.delete(`/products/${id}`)
		navigate('/products')
	}

	console.log(productId)
	return (
		<div>
			<Navbar user={user} />
			<div className="flex">
				<div>
					<Sidebar />
				</div>

				<div className="h-full w-full  mt-8 mb-10">
					<div className='flex-wrap md:flex justify-between'>
						<ProductDetails product={product} />
						<button onClick={() => handleDelete(product._id)} className="text-white justify-end mx-6 h-10 rounded bg-red-500 hover:bg-blue-500 p-2 border  ">Delete</button>
					</div>
					<ProductUpdate product={product} />
				</div>
			</div>
		</div>
	)
}

export default Product
