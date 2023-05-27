import React from 'react'
import Navbar from '../components/Navbar'
import  Sidebar  from '../components/Sidebar'
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../services/requestMethods'
import UserInfo from '../components/UserInfo';
import UserOrderHistory from '../components/UserOrderHistory';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'


const User = ({user}) => {
  const location = useLocation()
	const id = location.pathname.split('/')[2]
	// const [inputs, setInputs] = useState({})
	const dispatch = useDispatch()
	// let navigate = useNavigate()
// 
	const customer = useSelector((state) =>
		state.customer.users.find((user) => user._id === id)
	)
  return (
    <div>
    <Navbar user={user} />
    <div className='flex'>

      <div>
        <Sidebar />
     
      </div>

      <div class="h-full w-full  mt-8 mb-10">
        <UserInfo />
        
        <UserOrderHistory customer={customer} />
      </div>

    </div>
    </div>
  )
}

export default User