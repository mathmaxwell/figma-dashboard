import { Box, useTheme } from '@mui/material'
import SiteBar from '../components/SiteBar'
import Header from '../components/Header'

function HomePage() {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 2,
					width: '100vw',
					bgcolor: theme.palette.background.default,
				}}
			>
				<SiteBar />
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Header />
				</Box>
			</Box>
		</>
	)
}

export default HomePage
