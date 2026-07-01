import { Box, Typography, useTheme } from '@mui/material'
import TableTrafficPens from './TableTrafficPens'

export type TrafficDay = { count: number; text: string }

const TableTraffic = ({
	title,
	value,
	data,
}: {
	title: string
	value: string
	data: TrafficDay[]
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
					justifyContent: 'center',
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
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'start',
						}}
					>
						<Typography sx={{ color: 'grey' }} variant='body1'>
							{title}
						</Typography>
						<Typography sx={{ color: 'white' }} variant='h6'>
							{value}{' '}
							<span
								style={{ color: 'grey', marginLeft: '4px', fontSize: '16px' }}
							>
								присутствуют
							</span>
						</Typography>
					</Box>
					<Typography sx={{ color: 'green' }} variant='body1'>
						+2.45%
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(7, 1fr)',
						gap: 2,
						height: '100%',
						width: '100%',
					}}
				>
					{data.map(day => (
						<TableTrafficPens key={day.text} count={day.count} text={day.text} />
					))}
				</Box>
			</Box>
		</>
	)
}

export default TableTraffic
