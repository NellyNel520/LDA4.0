import React from 'react'
import Navbar from '../components/Navbar'
import  Sidebar  from '../components/Sidebar'
import OrderInfo from '../components/oder-info/OrderInfo';
import OrderDetails from '../components/oder-info/OrderDetails';




const Order = ({user}) => {
  return (
    <div>
    <Navbar user={user} />
    <div className='flex'>

      <div>
        <Sidebar />
     
      </div>

      <div className="h-full w-full  mt-8 mb-10">
       <OrderInfo />
       <OrderDetails />

       
      </div>

    </div>
    </div>
  )
}

export default Order