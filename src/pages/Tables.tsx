import { Box } from '@mui/material'
import TableHeaderCards from '../components/TableHeaderCards'
import TableWave from '../components/TableWave'
import TableMountain from '../components/TableMountain'
import TableChecker from '../components/TableChecker'

const Tables = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 2,
				}}
			>
				<TableHeaderCards />
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
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
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 2,
						width: '100%',
						height: '400px',
					}}
				>
					<TableChecker />
				</Box>
			</Box>
		</>
	)
}

export default Tables
