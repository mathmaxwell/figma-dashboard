import { Box, Typography, useTheme } from '@mui/material'

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
				</Box>
				<Box>
					<Typography variant='body2' sx={{ color: 'grey' }}>
						Name
					</Typography>
				</Box>
			</Box>
			<Box sx={{ bgcolor: theme.palette.background.paper }}>sometext</Box>
		</>
	)
}

export default DashboardStatistics
