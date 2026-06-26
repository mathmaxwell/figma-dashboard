import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import IntroPage from './pages/IntroPage'

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Dashboard />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/register' element={<RegisterPage />} />
			</Route>

			<Route path='/intro-page' element={<IntroPage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	)
}

export default App
