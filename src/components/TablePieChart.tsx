import { Box, useTheme } from '@mui/material'

const TablePieChart = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					bgcolor: theme.palette.background.secondary,
					borderRadius: 4,
					p: 2,
				}}
			></Box>
		</>
	)
}

export default TablePieChart
