import { Box, Typography, useTheme } from '@mui/material'
import TableTrafficPens from './TableTrafficPens'

const TableTraffic = () => {
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
							Daily Traffic
						</Typography>
						<Typography sx={{ color: 'white' }} variant='h6'>
							2.579{' '}
							<span
								style={{ color: 'grey', marginLeft: '4px', fontSize: '16px' }}
							>
								Visitors
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
					<TableTrafficPens count={50} text='01' />
					<TableTrafficPens count={100} text='02' />
					<TableTrafficPens count={90} text='03' />
					<TableTrafficPens count={25} text='04' />
					<TableTrafficPens count={87} text='05' />
					<TableTrafficPens count={75} text='06' />
					<TableTrafficPens count={50} text='07' />
				</Box>
			</Box>
		</>
	)
}

export default TableTraffic
