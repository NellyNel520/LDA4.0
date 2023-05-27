import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { userRequest } from '../services/requestMethods'
import { useNavigate } from 'react-router'
import moment from 'moment'
import OrderProducts from './OrderProducts'


const OrderDetails = () => {
  const location = useLocation()
	const id = location.pathname.split('/')[2]
	const [status, setStatus] = useState('')
	// const [order, setOrder] = useState({})

	const dispatch = useDispatch()
	let navigate = useNavigate()

	const order = useSelector((state) =>
		state.order.orders.find((order) => order._id === id)
	)
	console.log(order)

	const Button = ({ type }) => {
		return <button className={'orderStatusButton ' + type}>{type}</button>
	}
  return (
    <div class=" mx-4">
    <h1 className='text-blue-500 text-2xl md:text-4xl font-abril mb-4'>Order Details</h1>
          <div class="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
            {/* <h4 class="text-lg font-semibold"></h4> */}
            
 {/* {orders.slice(0, 60).map((order) => ( */}
 <div className='mb-10'>
 <div className="order rounded ">
   <div className="orderTop bg-[#316dc2] rounded mb-5 py-6 flex-wrap lg:flex border text-md lg:text-xl justify-between">
     <div className="px-4 ">
       <span className="font-bold text-gray-700 font-abril">Order Number </span>
       <div>
         <span>#{order._id}</span>
       </div>
     </div>

     <div className="px-4">
       <span className="font-bold  text-gray-700 font-abril">Date Placed</span>

       <div>{moment(order.createdAt).format('MMM DD, YYYY')}</div>
     </div>

     <div className="px-4">
       <span className="font-bold  text-gray-700 font-abril">Total</span>
       <div>${order.amount.toFixed(2)}</div>
     </div>

     <div className="px-4">
       <span className="font-bold  text-gray-700 font-abril ">Status</span>
       
       <div className='mt-2 '>
         <Button type={order.status} />
       </div>
     </div>
   </div>
 </div>
   <div><OrderProducts order={order} /></div>
</div>
{/* ))} */}


          </div>
        </div>
  )
}

export default OrderDetails