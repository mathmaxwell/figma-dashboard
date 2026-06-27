import { Box, Button, Typography, useTheme } from '@mui/material'
import bgImage from '../images/dashboard-bg-img.png'

const DashboardImages = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${bgImage})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					width: '100%',
					maxWidth: '1090px',
					height: '350px',
					p: '24px 64px',
					borderRadius: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'start',
					gap: 2,
				}}
			>
				<Typography
					variant='h4'
					sx={{
						maxWidth: '300px',
						width: '100%',
						textAlign: 'unset',
						color: theme.palette.text.primary,
					}}
				>
					Discover, collect, and sell extraordinary NFTs
				</Typography>
				<Typography
					variant='body1'
					sx={{
						maxWidth: '300px',
						width: '100%',
						textAlign: 'unset',
						color: theme.palette.text.primary,
					}}
				>
					Enter in this creative world. Discover now the latest NFTs or start
					creating your own!
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 2,
					}}
				>
					<Button
						sx={{
							p: '11px 27px',
							color: 'black',
							bgcolor: 'white',
							borderRadius: 4,
						}}
					>
						Discover now
					</Button>
					<Typography sx={{ color: 'white' }} variant='body1'>
						Watch video
					</Typography>
				</Box>
			</Box>
		</>
	)
}

export default DashboardImages
