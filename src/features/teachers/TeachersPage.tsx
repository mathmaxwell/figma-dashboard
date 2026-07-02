import { Box } from '@mui/material'
import TeacherHeader from './components/TeacherHeader'
import TableChecker from '../../components/ui/TableChecker'
import TablePieChart from '../../components/ui/TablePieChart'
import { getTeachersData } from './api'

const Teachers = () => {
	// данные приходят "сверху" (позже — реальный запрос в backend)
	const { stats, teachers } = getTeachersData()

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					gap: 2,
				}}
			>
				<TeacherHeader stats={stats} />

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						alignItems: 'stretch',
						gap: 2,
						width: '100%',
						height: '400px',
					}}
				>
					<Box sx={{ minWidth: 0 }}>
						<TableChecker title={teachers.title} rows={teachers.rows} />
					</Box>
					<Box sx={{ minWidth: 0 }}>
						<TablePieChart title='Эмоции' data={teachers.emotions} />
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Teachers
