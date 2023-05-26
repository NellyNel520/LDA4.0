import React from 'react'
import Sidebar from '../../components/Sidebar'
import '../../styles/userProfile.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
// import OrderHistory from '../../components/orderHistory/FullOrderHistory'
import LatestOrder from '../../components/orderHistory/LatestOrder'
// import { useSelector } from "react-redux";
import moment from 'moment'

const UserProfile = ({ user }) => {
	let dateJoined = moment(user.createdAt).format('MMM DD, YYYY')
	return (
		<div className="text-white  h-auto ">
			{/* UserProfile */}
			<div className="flex">
				<Sidebar className="rounded" />

				<div className="main py-6 font-play">
					<div className="text-3xl text-center font-play ">My Profile</div>
					<div className=" flex">
						<div className="userShow border rounded h-[43%] mt-8 ml-5 mr-10">
							<div className="userShowTop">
								<img
									src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
									alt=""
									className="userShowImg"
								/>
								<div className="userShowTopTitle">
									<span className="userShowUsername text-2xl font-play">{user.name}</span>
									<span className="userShowUserTitle">Loyal Customer</span>
								
								</div>
							</div> 
							<div className="userShowBottom">
								<span className="userShowTitle">Account Details</span>
								<div className="userShowInfo">
									<PermIdentityIcon className="userShowIcon" />
									<span className="userShowInfoTitle">ID: {user._id}</span>
								</div>
								<div className="userShowInfo">
									<CalendarTodayIcon className="userShowIcon" />
									<span className="userShowInfoTitle">
										Account Created: {dateJoined}
										{/* 10.12.1999 */}
									</span>
								</div>
								<span className="userShowTitle">Contact Details</span>
								<div className="userShowInfo">
									<MailOutlineIcon className="userShowIcon" />
									<span className="userShowInfoTitle">{user.email}</span>
								</div>
								<div className="userShowInfo">
									<PhoneAndroidIcon className="userShowIcon" />
									<span className="userShowInfoTitle">
										+ {user.phoneNumber}
									</span>
								</div>
								<div className="userShowInfo">
									<LocationSearchingIcon className="userShowIcon" />
									<span className="userShowInfoTitle">{user.address}</span>
								</div>
							</div>
							
						</div>

						

						{/* <div className="mt-10 ml-6">
							<div className="border rounded w-[20rem] h-[10rem] mb-[4rem]">
								<div>Customer Service</div>
							</div>

							<div className="border w-[20rem] rounded h-[10rem]">
								<div>Wishlist</div>
							</div>
						</div> */}
					</div>

					<div className="ml-10 mt-10 text-2xl font-play">Recent Order</div>
					<div className=" rounded mx-10 mt-6">
						<LatestOrder user={user} />
					</div>

					{/* end of main */}
				</div>
			</div>
		</div>
	)
}

export default UserProfile
