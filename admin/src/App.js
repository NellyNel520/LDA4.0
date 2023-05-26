
import './styles/index.css';
import { Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './redux/userRedux';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
