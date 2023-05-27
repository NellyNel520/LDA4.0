import React from 'react'
import Navbar from '../components/Navbar'
import  Sidebar  from '../components/Sidebar'
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../services/requestMethods'
import UserOrderHistory from '../components/UserOrderHistory';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import OrderInfo from '../components/OrderInfo';



const OrderDetails = ({user}) => {
  return (
    <div>
    <Navbar user={user} />
    <div className='flex'>

      <div>
        <Sidebar />
     
      </div>

      <div class="h-full w-full  mt-8 mb-10">
       <OrderInfo />

       
      </div>

    </div>
    </div>
  )
}

export default OrderDetails