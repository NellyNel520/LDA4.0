import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'
import { Link } from 'react-router-dom'

const Navbar = ({ user, handleLogout }) => {
	return (
		// <div className="">
			<div class=" w-full flex items-center justify-between h-14 text-white z-10 bg-[#3167b2]">
				<div className="font-bold text-2xl cursor-pointer flex items-center font-ari text-white">
					<span className="w-[5rem]  ">
						<img
							src="https://i.postimg.cc/5tQscMm2/LDA-Logo-Blue1.png"
							alt="logo"
						/>
					</span>
					<span className=' hidden md:flex'>London Dior Apparel</span>
				</div>

				<div class="flex justify-between items-center h-14 b header-right">
					<ul class="flex items-center">
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
							<div class="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
						</li>
						<li>
							<a href="/" class="flex items-center mr-4 hover:text-blue-100 ">
								<span onClick={handleLogout} class="inline-flex mr-1">
									<svg
										class="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
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
