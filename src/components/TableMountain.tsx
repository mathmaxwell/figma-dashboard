import { Box, Typography, useTheme } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import BarChartIcon from '@mui/icons-material/BarChart'
const thisMonth = [4.5, 4.2, 3.9, 4.1, 4.4, 3.8, 4.6]
const lastMonth = [4.3, 4.0, 4.1, 3.9, 4.2, 4.0, 4.4]
const xLabels = [
	'Алгебра',
	'Геометрия',
	'Физика',
	'Химия',
	'Биология',
	'История',
	'Языки',
]

const TableMountain = () => {
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
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant='h6' sx={{ color: 'white' }}>
						Средние оценки
					</Typography>

					<Typography variant='h5' sx={{ color: 'white' }}>
						По предметам
					</Typography>
					<Box
						sx={{
							position: 'relative',
							bgcolor: theme.palette.background.default,
							p: 3,
							borderRadius: '50%',
						}}
					>
						<BarChartIcon
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
								color: 'white',
							}}
						/>
					</Box>
				</Box>
				<BarChart
					series={[
						{ data: thisMonth, label: 'Этот месяц', id: 'thisMonth' },
						{ data: lastMonth, label: 'Прошлый месяц', id: 'lastMonth' },
					]}
					xAxis={[{ data: xLabels, height: 50 }]}
					yAxis={[{ width: 50 }]}
				/>
			</Box>
		</>
	)
}

export default TableMountain
