import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../services/requestMethods'
import { useDispatch, useSelector } from 'react-redux'
import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import '../styles/userList.css'
import { deleteUser, getUsers } from '../services/apiCalls'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'


const UserList = ({user}) => {
  const dispatch = useDispatch()
	const users = useSelector((state) => state.customer.users) 


	useEffect(() => {
		getUsers(dispatch)
	}, [dispatch])

  const handleDelete = (id) => {
		deleteUser(id, dispatch)
	}

  const columns = [
		{ field: '_id', headerName: 'ID', width: 150,
    renderCell: (params) => {
      return (
        <div className='text-gray-400'>
        {params.row._id}
        </div>
      )
    },
  
  },
		{
			field: 'user',
			headerName: 'Name',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="userListUser text-white font-play">
						{/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
						<AccountCircleIcon className="userListImg" />
						{params.row.name}
					</div>
				)
			},
		},

		{ field: 'email', headerName: 'Email', width: 250,
    renderCell: (params) => {
      return (
        <div className='text-white font-play'>
        {params.row.email}
        </div>
      )
    },
  
  },
		{
			field: 'phoneNumber',
			headerName: 'Phone Number',
			width: 200,
      renderCell: (params) => {
        return (
          <div className='text-white text-md'>
          {params.row.phoneNumber}
          </div>
        )
      },
		},
		// {
		//   field: "transaction",
		//   headerName: "Transaction Volume",
		//   width: 160,
		// },
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
    <div className='w-[100vw]'>
			<Navbar user={user} />
			<div className="flex">
				<div>
					<Sidebar />
				</div>

				<div class="h-full w-full mx-8 mt-3 mb-10 font-abril ">
					<h1 className=" text-[3rem] text-[#FFFFFF]  pb-2">Customers</h1>

					<Box
					
						className=" w-[75%]  h-[95vh]  bg-[#3167b2] rounded "
					>
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