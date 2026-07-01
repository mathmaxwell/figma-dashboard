import { Box, Typography, useTheme } from '@mui/material'
import { LineChart } from '@mui/x-charts'
import DateRangeIcon from '@mui/icons-material/DateRange'
import BarChartIcon from '@mui/icons-material/BarChart'
const margin = { right: 24 }
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490]
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300]
const xLabels = [
	'Page A',
	'Page B',
	'Page C',
	'Page D',
	'Page E',
	'Page F',
	'Page G',
]

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
						<Typography>This month</Typography>
					</Box>
					<Typography variant='h4' sx={{ color: 'white' }}>
						table N_1
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
							data: pData,
							label: 'pv',
							shape: 'cross',
							showMark: ({ index }) => index % 2 === 0,
						},
						{
							data: uData,
							label: 'uv',
							shape: 'diamond',
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
