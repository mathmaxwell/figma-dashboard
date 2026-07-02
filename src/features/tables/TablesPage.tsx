import { Box } from '@mui/material'
import TableHeaderCards from './components/TableHeaderCards'
import TableWave from './components/TableWave'
import TableMountain from './components/TableMountain'
import TableChecker from '../../components/ui/TableChecker'
import TablePieChart from '../../components/ui/TablePieChart'
import { getTablesData } from './api'

const Tables = () => {
	// данные приходят "сверху" (позже — реальный запрос в backend)
	const { stats, roles } = getTablesData()

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
				<TableHeaderCards stats={stats} />
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
						<TableWave />
					</Box>
					<Box sx={{ minWidth: 0 }}>
						<TableMountain />
					</Box>
				</Box>
				{roles.map(role => (
					<Box
						key={role.title}
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
							<TableChecker title={role.title} rows={role.rows} />
						</Box>
						<Box sx={{ minWidth: 0 }}>
							<TablePieChart title='Эмоции' data={role.emotions} />
						</Box>
					</Box>
				))}
			</Box>
		</>
	)
}

export default Tables
