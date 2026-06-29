import { Box } from '@mui/material'
import TableHeaderCards from '../components/TableHeaderCards'

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
			</Box>
		</>
	)
}

export default Tables
