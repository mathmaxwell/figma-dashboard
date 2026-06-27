import { Box, Typography, useTheme } from '@mui/material'
import HumansRating from './HumansRating'
import HumanHistory from './HumanHistory'

const DashboardStatistics = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: 2,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						bgcolor: theme.palette.background.secondary,
						width: '100%',
						p: 2,
						gap: 2,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Typography sx={{ color: 'white' }} variant='h5'>
							Top Creators
						</Typography>
						<Box
							sx={{
								p: '4px 20px',
								bgcolor: theme.palette.primary.main,
								borderRadius: 4,
								color: 'white',
							}}
						>
							See all
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<Typography variant='body2' sx={{ color: 'grey', flex: 1 }}>
							Name
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'grey', width: 70, textAlign: 'center' }}
						>
							Artworks
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'grey', width: 70, textAlign: 'center' }}
						>
							Rating
						</Typography>
					</Box>
				</Box>
			</Box>
			<HumansRating />
			<HumanHistory />
		</>
	)
}

export default DashboardStatistics
