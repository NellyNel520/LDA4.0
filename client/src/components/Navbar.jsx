import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge'

const Navbar = ({ user, handleLogOut }) => {
	const quantity = useSelector((state) => state.cart.quantity)
	let [open, setOpen] = useState(false)

	let Links = [
		{ name: 'HOME', link: '/' },
		{ name: 'SERVICE', link: '/' },
		{ name: 'ABOUT', link: '/about' },
		{ name: "BLOG'S", link: '/' },
		{ name: 'CONTACT', link: '/' },
	]

	let userOptions
	if (user) {
		userOptions = (
			<div className="shadow-md w-full sticky top-0 left-0">
				<div className="md:flex items-center justify-between bg-black text-blue-400 py-4 md:px-10 px-7">
					<div
						className="font-bold text-2xl cursor-pointer flex items-center font-ari
						
	    "
					>
					<span className="w-[3rem]  ">
						<img
							src="https://i.postimg.cc/5tQscMm2/LDA-Logo-Blue1.png"
							alt="logo"
						/>
					</span>
						London Dior Apparel
					</div>

					<div
						onClick={() => setOpen(!open)}
						className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
					>
						{open ? <CloseIcon /> : <MenuIcon />}
					</div>

					<ul
						className={`font-play md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? 'top-20 ' : 'top-[-490px]'
						}`}
					>
						{/* {
	        Links.map((link)=>(
	         <Link className='md:ml-8 text-xl md:my-0 my-7' to={link.link}>
						<li className='text-blue-400 hover:text-white duration-500'>{link.name}</li>
					</Link>
	        ))
	      } */}

						<Link
							onClick={handleLogOut}
							className="md:ml-8 text-xl md:my-0 my-7"
							to={'/'}
						>
							<li className="text-blue-400 hover:text-white duration-500">
								<ExitToAppOutlinedIcon />
							</li>
						</Link>
						<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/profile'}>
							<li className="text-blue-400 hover:text-white duration-500">
								<PersonIcon />
							</li>
						</Link>
						<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/'}>
							<li className="text-blue-400 hover:text-white duration-500">
								HOME
							</li>
						</Link>
						<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/products'}>
							<li className="text-blue-400 hover:text-white duration-500">
								PRODUCTS
							</li>
						</Link>
						<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/about'}>
							<li className="text-blue-400 hover:text-white duration-500">
								ABOUT
							</li>
						</Link>
						<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/cart'}>
							<li className="text-blue-400 hover:text-white duration-500">
								<Badge badgeContent={quantity} color="error">
									<ShoppingCartIcon />
								</Badge>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		)
	}

	const publicOptions = (
		<div className="shadow-md w-full sticky top-0 left-0">
			<div className="md:flex items-center justify-between bg-black text-blue-400 py-4 md:px-10 px-7">
				<div
					className="font-bold text-2xl cursor-pointer flex items-center font-ari
	    "
				>
				<span className="w-[3rem]  ">
						<img
							src="https://i.postimg.cc/5tQscMm2/LDA-Logo-Blue1.png"
							alt="logo"
						/>
					</span>
					London Dior Apparel
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
				>
					{open ? <CloseIcon /> : <MenuIcon />}
				</div>

				<ul
					className={`font-play md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? 'top-20' : 'top-[-490px]'
					}`}
				>
					{/* {
	        Links.map((link)=>(
	         <Link className='md:ml-8 text-xl md:my-0 my-7' to={link.link}>
						<li className='text-blue-400 hover:text-white duration-500'>{link.name}</li>
					</Link>
	        ))
	      } */}

					<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/register'}>
						<li className="text-blue-400 hover:text-white duration-500">
							REGISTER
						</li>
					</Link>
					<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/login'}>
						<li className="text-blue-400 hover:text-white duration-500">
							LOGIN
						</li>
					</Link>
					<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/'}>
						<li className="text-blue-400 hover:text-white duration-500">
							HOME
						</li>
					</Link>
					<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/products'}>
						<li className="text-blue-400 hover:text-white duration-500">
							PRODUCTS
						</li>
					</Link>
					<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/about'}>
						<li className="text-blue-400 hover:text-white duration-500">
							ABOUT
						</li>
					</Link>
					<Link className="md:ml-8 text-xl md:my-0 my-7" to={'/cart'}>
						<li className="text-blue-400 hover:text-white duration-500">
							<Badge badgeContent={quantity} color="error">
								<ShoppingCartIcon />
							</Badge>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	)

	return <div>{user ? userOptions : publicOptions}</div>
}

export default Navbar
