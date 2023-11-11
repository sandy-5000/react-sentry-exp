import Home from "./pages/Home"
import Vite from "./pages/Vite"
import { Routes, Route } from 'react-router-dom'


function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/vite" element={<Vite />} />
		</Routes>
	)
}

export default App
