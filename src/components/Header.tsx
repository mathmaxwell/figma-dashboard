import { Box, Typography, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import HelpIcon from '@mui/icons-material/Help'
const Header = () => {
	const theme = useTheme()

	return (
		<>
			<Box
				sx={{
					width: '100%',
					p: 2,
					bgcolor: theme.palette.background.secondary,
					borderRadius: 4,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant='h5' sx={{ color: theme.palette.text.primary }}>
					Smart Save Education
				</Typography>
				<Box sx={{ color: 'white', display: 'flex', gap: 2 }}>
					<SearchIcon />
					<DarkModeIcon />
					<HelpIcon />
				</Box>
			</Box>
		</>
	)
}

export default Header
