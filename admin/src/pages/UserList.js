import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import '../styles/userList.css'
import { deleteUser } from '../services/apiCalls'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import moment from 'moment'
import { userRequest } from '../services/requestMethods'
import { useNavigate } from 'react-router'
import { getUsers } from '../services/apiCalls'

const UserList = ({ user }) => {
	const dispatch = useDispatch()
	let navigate = useNavigate()
	const users = useSelector((state) => state.customer.users)

	useEffect(() => {
		getUsers(dispatch)
	}, [dispatch])



	// ***Previous Delete function with redux***
	// const handleDelete = (id) => {
	// 	deleteUser(id, dispatch)
	// }

	const handleDelete = async (id) => {
		await userRequest.delete(`/users/${id}`)
		navigate(0)
	}

	const columns = [
		{
			field: '_id',
			headerName: 'ID',
			width: 150,
			renderCell: (params) => {
				return <div className="text-gray-400">{params.row._id}</div>
			},
		},
		{
			field: 'user',
			headerName: 'Name',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="userListUser text-white font-play">
						
						<AccountCircleIcon className="userListImg" />
						{params.row.name}
					</div>
				)
			},
		},

		{
			field: 'email',
			headerName: 'Email',
			width: 250,
			renderCell: (params) => {
				return <div className="text-white font-play">{params.row.email}</div>
			},
		},
		{
			field: 'dateJoined',
			headerName: 'Date Joined',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="text-white text-md">
						{moment(params.row.createdAt).format('MMM DD, YYYY')}
					</div>
				)
			},
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<>
						<Link to={'/user/' + params.row._id}>
							<button className="userListEdit">Edit</button>
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
					<h1 className=" text-[3rem] text-[#FFFFFF]  pb-2">Customers</h1>

					<Box className=" w-[75%]  h-[95vh]  bg-[#3167b2] rounded ">
						<DataGrid
							rows={users}
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

export default UserList
