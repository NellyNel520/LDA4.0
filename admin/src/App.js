
import './styles/index.css';
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './redux/userRedux';
import Login from './pages/Login';
import Home from './pages/Home';


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
      </Routes>
    </div>
  );
}

export default App;
