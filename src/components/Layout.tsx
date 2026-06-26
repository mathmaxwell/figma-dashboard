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
			}}
		>
			<SiteBar />
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					minWidth: 0,
				}}
			>
				<Header />
				<Box component='main' sx={{ flex: 1, p: 2 }}>
					<Outlet />
				</Box>
			</Box>
		</Box>
	)
}

export default Layout
