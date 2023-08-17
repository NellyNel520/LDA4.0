import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import '../styles/orderList.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { getOrders, deleteOrder } from '../services/apiCalls'
import { format } from 'timeago.js'
import moment from 'moment'
import { userRequest } from '../services/requestMethods'
import { useNavigate } from 'react-router'

const OrderList = ({ user }) => {
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.order.orders)
	let navigate = useNavigate()

	const Button = ({ type }) => {
		return <button className={'orderStatusButton ' + type}>{type}</button>
	}

	useEffect(() => {
		getOrders(dispatch)
	}, [dispatch])

	// ***Previous Delete function with redux***
	// const handleDelete = (id) => {
	// 	deleteOrder(id, dispatch)
	// }

	const handleDelete = async (id) => {
		await userRequest.delete(`/orders/${id}`)
		navigate(0)
	}

	const columns = [
		{
			field: '_id',
			headerName: 'Order ID',
			width: 80,
			renderCell: (params) => {
				return <div className="text-gray-400 font-play">{params.row._id}</div>
			},
		},
		{
			field: 'email',
			headerName: 'User Email',
			width: 250,
			renderCell: (params) => {
				return (
					<div className="productListItem text-white font-play">
						<img
							className="productListImg"
							src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
							alt=""
						/>
						{params.row.email}
					</div>
				)
			},
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 120,
			renderCell: (params) => {
				return (
					<div>
						<Button type={params.row.status} />
					</div>
				)
			},
		},
		{
			field: 'createdAt',
			headerName: 'Date',
			width: 280,
			renderCell: (params) => {
				return (
					<div className="text-white font-play text-lg">
						{moment(params.row.createdAt).format('MMM DD, YYYY')}
						<span className="ml-2 text-sm text-gray-400">
							({format(params.row.createdAt)})
						</span>
					</div>
				)
			},
		},
		{
			field: 'products',
			headerName: 'Items',
			width: 110,
			renderCell: (params) => {
				return (
					<div className="text-white text-xl font-play">
						{params.row.products.length}
					</div>
				)
			},
		},
		{
			field: 'amount',
			headerName: 'Total',
			width: 160,
			renderCell: (params) => {
				return (
					<div className="text-white text-lg font-play">
						${params.row.amount.toFixed(2)}
					</div>
				)
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/order/' + params.row._id}>
							<button className="productListEdit">Edit</button>
						</Link>

						<DeleteOutlineIcon
							className="userListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				)
			},
		},
	]
	return (
		<div className="w-[100vw]">
			<Navbar user={user} />
			<div className="flex">
				<div>
					<Sidebar />
				</div>

				<div className="h-full w-full mx-8 mt-3 mb-10 font-abril ">
					<h1 className=" text-[3rem] text-[#FFFFFF]  pb-2">Transactions</h1>

					<Box className=" w-[85%]  h-[95vh]  bg-[#3167b2] rounded ">
						<DataGrid
							rows={orders}
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

export default OrderList
