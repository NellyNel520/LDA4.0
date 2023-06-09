
import './styles/index.css';
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './redux/userRedux';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import UserList from './pages/UserList';
import OrderList from './pages/OrderList';
import Product from './pages/Product';
import User from './pages/User';
import OrderDetails from './pages/Order';
import NewProduct from './pages/NewProduct';
import NewUser from './pages/NewUser';


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
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home user={user}/>} />
      <Route path="/products" element={<ProductList user={user}/>} />
      <Route path="/users" element={<UserList user={user}/>} />
      <Route path="/orders" element={<OrderList user={user}/>} />
      <Route path="/product/:productId" element={<Product user={user}/>} />
      <Route path="/user/:userId" element={<User user={user}/>} />
      <Route path="/order/:orderId" element={<OrderDetails user={user}/>} />
      <Route path="/newProduct" element={<NewProduct user={user}/>} />
      <Route path="/newUser" element={<NewUser user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
