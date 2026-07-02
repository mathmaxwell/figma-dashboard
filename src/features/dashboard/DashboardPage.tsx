import { Box } from '@mui/material'
import DashboardImages from './components/DashboardImages'
import DashboardStatistics from './components/DashboardStatistics'
import DashboardNav from './components/DashboardNav'
import DashboardNews from './components/DashboardNews'
import type { IGetForms, IGrade, IScheduleSearch } from './types/dashboard'
import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '../register/store/auth'
import { getAllForms, getAllGrades, getSchedulesByDay } from './api/dashboard'
import { getEndOfDayIso, getStartOfDayIso } from '../../func/day'
const Dashboard = () => {
	const { token } = useAuthStore()
	const { data: classes = [], isLoading: isLoadingClass } = useQuery<
		IGetForms[],
		Error
	>({
		queryKey: ['forms', token],
		queryFn: () => {
			if (!token) throw new Error('No token provided')
			return getAllForms(token)
		},
		enabled: !!token,
	})
	const { data: subjects = [], isLoading: isSubjectsLoading } = useQuery<
		IScheduleSearch[],
		Error
	>({
		queryKey: ['schedules', token],
		queryFn: async () => {
			const dateStr = new Date().toISOString()
			const startOfDay = getStartOfDayIso(dateStr)
			const endOfDay = getEndOfDayIso(dateStr)

			return (
				(await getSchedulesByDay(token!, '', '', startOfDay, endOfDay)) || []
			)
		},
		enabled: !!token,
	})
	const { data: grades = [], isLoading: isGradesLoading } = useQuery<
		IGrade[],
		Error
	>({
		queryKey: ['grades', token],
		queryFn: async () => {
			return (await getAllGrades(token!, '', '')) || []
		},
		enabled: !!token,
	})
	console.log('grades', grades)

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
					gap: 2,
				}}
			>
				<Box
					sx={{
						flex: 1,
						width: '100%',
						height: '100%',
						maxHeight: '100%',
						minHeight: 0,
						overflowY: 'auto',
					}}
				>
					<DashboardImages />
					{!isLoadingClass && !isSubjectsLoading && (
						<DashboardNav classes={classes} subjects={subjects} />
					)}
					<DashboardNews />
				</Box>
				<Box
					sx={{
						flex: 1,
						width: '100%',
						height: '100%',
						maxHeight: '100%',
						minHeight: 0,
						overflowY: 'auto',
						borderRadius: 4,
					}}
				>
					{!isLoadingClass && !isSubjectsLoading && !isGradesLoading && (
						<DashboardStatistics
							classes={classes}
							subjects={subjects}
							grades={grades}
						/>
					)}
				</Box>
			</Box>
		</>
	)
}

export default Dashboard
