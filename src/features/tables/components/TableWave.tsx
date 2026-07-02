import { Box, Typography, useTheme } from '@mui/material'
import { LineChart } from '@mui/x-charts'
import DateRangeIcon from '@mui/icons-material/DateRange'
import BarChartIcon from '@mui/icons-material/BarChart'
const margin = { right: 24 }
const cameRate = [92, 96, 90, 97, 92, 50, 2]
const lateRate = [5, 2, 6, 2, 5, 3, 1]
const absentRate = [3, 2, 4, 1, 3, 47, 97]
const xLabels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const TableWave = () => {
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
					<Box
						sx={{
							color: 'white',
							bgcolor: theme.palette.background.default,
							p: 2,
							borderRadius: 4,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 2,
						}}
					>
						<DateRangeIcon />
						<Typography>Эта неделя</Typography>
					</Box>
					<Typography variant='h5' sx={{ color: 'white' }}>
						Посещаемость
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
				<LineChart
					series={[
						{
							data: cameRate,
							label: 'Пришёл %',
							shape: 'diamond',
							showMark: ({ index }) => index % 2 === 0,
						},
						{
							data: lateRate,
							label: 'Опоздание %',
							shape: 'cross',
							showMark: ({ index }) => index % 2 === 0,
						},
						{
							data: absentRate,
							label: 'Не пришёл %',
							shape: 'circle',
							showMark: ({ index }) => index % 2 === 0,
						},
					]}
					xAxis={[{ scaleType: 'point', data: xLabels, height: 50 }]}
					yAxis={[{ width: 50 }]}
					margin={margin}
				/>
			</Box>
		</>
	)
}

export default TableWave
