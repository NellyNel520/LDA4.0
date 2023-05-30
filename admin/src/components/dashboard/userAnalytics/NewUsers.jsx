import React from 'react'
import '../../../styles/userActivity.css'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useEffect, useState } from 'react'
import { userRequest } from '../../../services/requestMethods'
import { Link } from 'react-router-dom'

const NewUsers = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await userRequest.get('/users/?new=true')
				setUsers(res.data)
			} catch {}
		}
		getUsers()
		// console.log(users)
	}, [])

	return (
		<div className="widgetSm text-white ">
			<h3 className="chartTitle font-play  text-2xl">Newest Users</h3>
			<ul className="widgetSmList">
				{users.map((user) => (
					<li className="widgetSmListItem my-3" key={user._id}>
						<div className="flex">
							<img
								src={
									user.img ||
									'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
								}
								alt=""
								className="widgetSmImg"
							/>
							<div className="widgetSmUser   mx-3 ">
								<span className="widgetSmUsername">{user.name}</span>
								<span className="widgetSmUserTitle ">{user.email}</span>
							</div>
						</div>
						<Link to={`/user/${user._id}`}>
							<button className="widgetSmButton p-1">
								<div className="">
									<VisibilityIcon />
								</div>
								<span className="hidden md:flex">Display</span>
							</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NewUsers
