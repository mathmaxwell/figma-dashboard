import { Box, Typography, useTheme } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import BarChartIcon from '@mui/icons-material/BarChart'
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
						Weekly Revenue
					</Typography>

					<Typography variant='h4' sx={{ color: 'white' }}>
						table N_2
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
						{ data: pData, label: 'pv', id: 'pvId' },
						{ data: uData, label: 'uv', id: 'uvId' },
					]}
					xAxis={[{ data: xLabels, height: 50 }]}
					yAxis={[{ width: 50 }]}
				/>
			</Box>
		</>
	)
}

export default TableMountain
