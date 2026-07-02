import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Dashboard from './features/dashboard/DashboardPage'
import RegisterPage from './features/register/RegisterPage'
import IntroPage from './features/intro/IntroPage'
import Tables from './features/tables/TablesPage'
import Teachers from './features/teachers/TeachersPage'
import Subject from './features/subject/Subject'

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Dashboard />} />
				{/*Dashboard bu home */}
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/tables' element={<Tables />} />
				{/*tables bu dashboard */}
				<Route path='/teachers' element={<Teachers />} />
				<Route path='/subject/:id' element={<Subject />} />
				<Route path='/register' element={<RegisterPage />} />
			</Route>

			<Route path='/intro-page' element={<IntroPage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	)
}

export default App
