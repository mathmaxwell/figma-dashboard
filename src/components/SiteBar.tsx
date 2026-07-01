import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { useLocation, useNavigate } from 'react-router-dom'
import InsertChartIcon from '@mui/icons-material/InsertChart'
const menuItems = [
	{
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HomeIcon />,
		matches: ['/', '/dashboard'],
	},
	{
		label: 'Tables',
		path: '/tables',
		icon: <InsertChartIcon />,
		matches: ['/tables'],
	},
	{
		label: 'Register',
		path: '/register',
		icon: <AppRegistrationIcon />,
		matches: ['/register'],
	},
]

const SiteBar = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const theme = useTheme()

	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: '300px',
				minWidth: '30px',
				bgcolor: theme.palette.background.secondary,
				height: '100vh',
				borderRadius: 4,
			}}
		>
			<Typography
				variant='h4'
				sx={{
					color: theme.palette.text.primary,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					py: 5,
				}}
			>
				ABDURAHIM
			</Typography>
			<Divider />
			<List>
				{menuItems.map(item => {
					const selected = item.matches.includes(location.pathname)
					return (
						<ListItem key={item.path} disablePadding>
							<ListItemButton
								selected={selected}
								onClick={() => navigate(item.path)}
							>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText
									primary={item.label}
									sx={{ color: theme.palette.text.primary }}
								/>
							</ListItemButton>
						</ListItem>
					)
				})}
			</List>
		</Box>
	)
}

export default SiteBar
