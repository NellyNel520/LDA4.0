import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'

const Navbar = ({ user, handleLogout }) => {
	return (
		// <div className="">
			<div className=" w-full flex items-center justify-between h-14 text-white z-10 bg-[#3167b2]">
				<div className="font-bold text-2xl cursor-pointer flex items-center font-ari text-white">
					<span className="w-[5rem]  ">
						<img
							src="https://i.postimg.cc/5tQscMm2/LDA-Logo-Blue1.png"
							alt="logo"
						/>
					</span>
					<span className=' hidden md:flex'>London Dior Apparel</span>
				</div>

				<div className="flex justify-between items-center h-14 b header-right">
					<ul className="flex items-center">
						<li>
							<span className="mr-3 text-lg font-play">{user.name}</span>
						</li>
						<li>
							<AccountCircleIcon />
						</li>
						<li>
							<NotificationsNoneIcon />
						</li>
						<li>
							<SettingsIcon />
						</li>
						<li>
							<div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
						</li>
						<li>
							<a href="/" className="flex items-center mr-4 hover:text-blue-100 ">
								<span onClick={handleLogout} className="inline-flex mr-1">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										></path>
									</svg>
								</span>
								<span className="hidden md:flex">Logout</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		// </div>
	)
}

export default Navbar
