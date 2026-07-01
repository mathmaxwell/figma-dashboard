import { Box, Typography, useTheme } from '@mui/material'
import { PieChart } from '@mui/x-charts'

const TablePieChart = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '400px',
					bgcolor: theme.palette.background.secondary,
					borderRadius: 4,
					p: 2,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 2,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<Typography variant='h6' sx={{ color: 'white' }}>
						Your Pie Chart
					</Typography>
					<Typography sx={{ color: 'grey' }} variant='body1'>
						Monthly
					</Typography>
				</Box>
				<PieChart
					series={[
						{
							data: [
								{ id: 0, value: 10, label: 'series A' },
								{ id: 1, value: 15, label: 'series B' },
								{ id: 2, value: 20, label: 'series C' },
							],
						},
					]}
					width={300}
					height={300}
				/>
			</Box>
		</>
	)
}

export default TablePieChart
