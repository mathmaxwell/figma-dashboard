import { useMemo } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import Rating from './Rating'
import { useSelectClassStore } from '../store/selectClass'
import { useQuery } from '@tanstack/react-query'
import type { IGrade, IStudent } from '../types/dashboard'
import { useAuthStore } from '../../register/store/auth'
import { getStudentByClassName } from '../api/dashboard'
import LoadingProgress from '../../../components/ui/LoadingProgress'

const HumansRating = ({ grades }: { grades: IGrade[] }) => {
	const { token } = useAuthStore()
	const selectClass = useSelectClassStore(state => state.selectClassName)
	const { data: students = [], isLoading: isStudentLoading } = useQuery<
		IStudent[],
		Error
	>({
		queryKey: ['forms', selectClass],
		queryFn: () => {
			if (!token) throw new Error('No token provided')
			if (!selectClass) throw new Error('No selectClass provided')
			return getStudentByClassName(token, selectClass)
		},
		enabled: !!token,
	})

	const ratedStudents = useMemo(() => {
		const withAvg = students.map(student => {
			const studentGrades = grades.filter(g => g.studentId === student.id)
			const avgGrade = studentGrades.length
				? studentGrades.reduce((sum, g) => sum + g.grade, 0) /
					studentGrades.length
				: 0
			return { student, avgGrade }
		})
		withAvg.sort((a, b) => b.avgGrade - a.avgGrade)
		return withAvg.slice(0, 10)
	}, [students, grades])

	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					flex: 1,
					minHeight: 0,
					overflowY: 'auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'normal',
					gap: 2,
					p: 2,
					bgcolor: theme.palette.background.paper,
					width: '100%',
					borderBottomLeftRadius: 16,
					borderBottomRightRadius: 16,
				}}
			>
				{isStudentLoading ? (
					<LoadingProgress />
				) : (
					ratedStudents.map(({ student, avgGrade }) => (
						<Box
							key={student.id}
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 2,
							}}
						>
							<Box
								sx={{
									flex: 1,
									display: 'flex',
									alignItems: 'center',
									gap: 1,
								}}
							>
								<img
									src={student.face?.thumbnail}
									style={{
										width: '50px',
										height: '50px',
										objectFit: 'cover',
										borderRadius: '50%',
									}}
									alt=''
								/>
								<Typography variant='body1' sx={{ color: 'white' }}>
									{student.name}
								</Typography>
							</Box>
							<Typography
								variant='body1'
								sx={{ color: 'white', width: 70, textAlign: 'center' }}
							>
								{avgGrade.toFixed(1)}
							</Typography>
							<Box
								sx={{
									width: 70,
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<Rating rating={(avgGrade / 5) * 100} />
							</Box>
						</Box>
					))
				)}
			</Box>
		</>
	)
}

export default HumansRating
