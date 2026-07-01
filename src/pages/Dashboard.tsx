import { Box } from '@mui/material'
import DashboardImages from '../components/DashboardImages'
import DashboardStatistics from '../components/DashboardStatistics'
import DashboardNav from '../components/DashboardNav'
import DashboardNews from '../components/DashboardNews'

const Dashboard = () => {
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
						flex: 2,
						width: '100%',
						height: '100%',
						maxHeight: '100%',
						minHeight: 0,
						overflowY: 'auto',
					}}
				>
					<DashboardImages />
					<DashboardNav />
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
					<DashboardStatistics />
				</Box>
			</Box>
		</>
	)
}

export default Dashboard
