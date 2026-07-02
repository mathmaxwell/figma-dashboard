import { Box, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import SiteBar from './SiteBar'
import Header from './Header'

const Layout = () => {
	const theme = useTheme()
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100vw',
				bgcolor: theme.palette.background.default,
				gap: 2,
				maxHeight: '100vh',
				overflowY: 'hidden',
			}}
		>
			<SiteBar />
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					minWidth: 0,
					minHeight: 0,
					height: '100vh',
					gap: 2,
				}}
			>
				<Header />
				<Box
					component='main'
					sx={{ flex: 1, minHeight: 0, overflow: 'hidden' }}
				>
					<Outlet />
				</Box>
			</Box>
		</Box>
	)
}

export default Layout
