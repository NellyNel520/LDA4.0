import React from 'react'
import Sidebar from '../../components/Sidebar'
import '../../styles/userProfile.css'
import FullOrderHistory from '../../components/orderHistory/FullOrderHistory'


const OrderHistory = ({user}) => {
  return (
    <div className="text-white w-[100vw] ">
			<div className="flex">
				<Sidebar className="rounded" />

				<div>
				<div className="ml-10 mt-10 text-2xl font-play">Order History</div>

				<div className=" mx-10 mt-6">
						<FullOrderHistory  user={user}/>
					</div>
        </div>
			</div>
		</div>
  )
}

export default OrderHistory