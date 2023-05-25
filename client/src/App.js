import { Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
