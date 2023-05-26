import '../styles/sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ReportIcon from '@mui/icons-material/Report'
import SettingsIcon from '@mui/icons-material/Settings'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper font-play ">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/profile" className="link">
							<li className="sidebarListItem">
								<PermIdentityIcon className="sidebarIcon" />
								<span className="hidden md:flex">User Dashboard</span>
							</li>
						</Link>
						<Link to="/profile/orderHistory" className="link">
							<li className="sidebarListItem">
								<StorefrontIcon className="sidebarIcon" />
								<span className="hidden md:flex">Order History</span>
							</li>
						</Link>
						<Link to="/profile/orderHistory" className="link">
							<li className="sidebarListItem">
								<AttachMoneyIcon className="sidebarIcon" />
								<span className="hidden md:flex">Transactions</span>
							</li>
						</Link>
						<Link to="/profile/edit" className="link">
							<li className="sidebarListItem">
								<SettingsIcon className="sidebarIcon" />
								<span className="hidden md:flex">Manage Account</span>
							</li>
						</Link>
						<li className="sidebarListItem">
							<FavoriteIcon className="sidebarIcon" />
							<span className="hidden md:flex">Wishlist</span>
						</li>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle hidden lg:flex">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<MailOutlineIcon className="sidebarIcon" />
							<span className="hidden md:flex">Mail</span>
						</li>
						<li className="sidebarListItem">
							<DynamicFeedIcon className="sidebarIcon" />
							<span className="hidden md:flex">Feedback</span>
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutlineIcon className="sidebarIcon" />
							<span className="hidden md:flex">Messages</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
