import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../services/apiCalls'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import '../styles/productList.css'
import { userRequest } from '../services/requestMethods'
import { useNavigate } from 'react-router'


const ProductList = ({ user }) => {
	const dispatch = useDispatch()
	const products = useSelector((state) => state.product.products)
	let navigate = useNavigate()

	useEffect(() => {
		getProducts(dispatch)
	}, [dispatch])
 

	// ***Previous Delete function with redux***
	// const handleDelete = (id) => {
	// 	deleteProduct(id, dispatch)
	// }

	const handleDelete = async (id) => {
		await userRequest.delete(`/products/${id}`)
		navigate(0)
	}

	const columns = [
		{ field: '_id', headerName: 'ID', width: 80,
    renderCell: (params) => {
      return (
        <div className='text-white'>
        {params.row._id}
        </div>
      )
    }, },
		{
			field: 'product',
			headerName: 'Product',
			width: 270,
			renderCell: (params) => {
				return (
					<div className="productListItem font-play text-md font-bold text-white">
						<img className="productListImg" src={params.row.img} alt="" />
						{params.row.title}
					</div>
				)
			},
		},
		{
			field: 'inStock',
			headerName: 'Stock',
			width: 85,
			renderCell: (params) => {
				return (
					<div className="text-white text-lg font-play">
						{params.row.inStock}
					</div>
				)
			},
		},
		{
			field: 'categories',
			headerName: 'Category',
			width: 120,
      renderCell: (params) => {
        return (
          <div className='text-white font-play'>
          {params.row.categories}
          </div>
        )
      }
		},
		{
			field: 'rating',
			headerName: 'Rating',
			width: 100,
      renderCell: (params) => {
        return (
          <div className='text-white'>
          {params.row.rating}
          </div>
        )
      }
		},
		{
			field: 'price',
			headerName: 'Price',
			width: 100,
			renderCell: (params) => {
				return <div className='text-white font-play text-lg'>${params.row.price.toFixed(2)}</div>
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 100,
			renderCell: (params) => {
				return (
					<div className=''>
						<Link to={'/product/' + params.row._id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutlineIcon
							className="productListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</div>
				)
			},
		},
	]

	return (
		<div>
			<Navbar user={user} />
			<div className="flex">
				<div>
					<Sidebar />
				</div>

				<div className="h-full w-full mx-6 mt-3 mb-10 font-abril ">
					<h1 className=" text-[3rem] text-[#FFFFFF]  pb-2">Products</h1>

					<Box
					
						className=" w-[85%]  h-[95vh]  bg-[#3167b2] rounded "
					>
						<DataGrid
							rows={products}
							disableSelectionOnClick
							columns={columns}
							getRowId={(row) => row._id}
							pageSize={8}
							checkboxSelection
						/>
					</Box>
				</div>
			</div>
		</div>
	)
}

export default ProductList
