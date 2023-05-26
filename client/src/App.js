import { Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Announcement from './components/Announcement'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './redux/userRedux'
import Success from './pages/Success'
import UserProfile from './pages/profilePages/UserProfile'
import OrderHistory from './pages/profilePages/OrderHistory'

function App() {
	const user = useSelector((state) => state.user.currentUser)

	const dispatch = useDispatch()
	let navigate = useNavigate()

	const handleLogOut = (e) => {
		//Reset all auth related state and clear localStorage
		e.preventDefault()
		dispatch(logout())
		navigate('/')
	}

	return (
		<div className="App">
			<Navbar user={user} handleLogOut={handleLogOut} />
			<Announcement user={user} />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/success" element={<Success />} />
					<Route path="/profile" element={<UserProfile user={user} />} />
					<Route path="/products/:category" element={<Products />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route
						path="/profile/orderHistory"
						element={<OrderHistory user={user} />}
					/>
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
