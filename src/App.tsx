import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import IntroPage from './pages/IntroPage'
import Tables from './pages/Tables'

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Dashboard />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/tables' element={<Tables />} />
				<Route path='/register' element={<RegisterPage />} />
			</Route>

			<Route path='/intro-page' element={<IntroPage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	)
}

export default App
