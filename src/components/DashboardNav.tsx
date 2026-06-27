import { Box, Typography, useTheme } from '@mui/material'

const DashboardNav = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 2,
					mt: 2,
				}}
			>
				<Typography sx={{ flex: 1, color: 'white' }} variant='h5'>
					Trending NFTs
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 2,
					}}
				>
					<Typography
						sx={{
							color: 'white',
							p: '4px 25px',
							bgcolor: theme.palette.background.secondary,
							borderRadius: 4,
						}}
						variant='h6'
					>
						Art
					</Typography>
					<Typography sx={{ color: 'white', p: 2 }} variant='h6'>
						Music
					</Typography>
					<Typography sx={{ color: 'white', p: 2 }} variant='h6'>
						Sport
					</Typography>
				</Box>
			</Box>
		</>
	)
}

export default DashboardNav
