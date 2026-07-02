import { Box, Typography, useTheme } from '@mui/material'
import { PieChart } from '@mui/x-charts'

export type EmotionSlice = { id: number; value: number; label: string }

const TablePieChart = ({
	title,
	data,
}: {
	title: string
	data: EmotionSlice[]
}) => {
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
						{title}
					</Typography>
					<Typography sx={{ color: 'grey' }} variant='body1'>
						Сегодня
					</Typography>
				</Box>
				<Box sx={{ width: '100%', flex: 1, minHeight: 0 }}>
					<PieChart series={[{ data }]} />
				</Box>
			</Box>
		</>
	)
}

export default TablePieChart
