import { Box } from '@mui/material'
import TableHeaderCards from '../components/TableHeaderCards'
import TableWave from '../components/TableWave'
import TableMountain from '../components/TableMountain'
import TableChecker from '../components/TableChecker'
import TableTraffic from '../components/TableTraffic'
import TablePieChart from '../components/TablePieChart'

const Tables = () => {
	return (
		<>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					justifyItems: 'center',
					gap: 2,
					height: '100%',
					overflowY: 'auto',
				}}
			>
				<TableHeaderCards />
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
					<TableWave />
					<TableMountain />
				</Box>
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
					<TableChecker />
					<Box
						sx={{
							width: '100%',
							height: '400px',
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							alignItems: 'stretch',
							gap: 2,
						}}
					>
						<TableTraffic />
						<TablePieChart />
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Tables
