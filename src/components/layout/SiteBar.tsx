import {
	Box,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Typography,
	useTheme,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ManIcon from '@mui/icons-material/Man'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { useLocation, useNavigate } from 'react-router-dom'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import { useState } from 'react'

const EXPANDED_WIDTH = 300
const COLLAPSED_WIDTH = 72

const menuItems = [
	{
		label: 'Home',
		path: '/dashboard',
		icon: <HomeIcon />,
		matches: ['/', '/dashboard'],
	},
	{
		label: 'Dashboard',
		path: '/tables',
		icon: <InsertChartIcon />,
		matches: ['/tables'],
	},
	{
		label: 'Teachers',
		path: '/teachers',
		icon: <ManIcon />,
		matches: ['/', '/teachers'],
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
	const [expanded, setExpanded] = useState(true)

	return (
		<Box
			sx={{
				width: expanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
				flexShrink: 0,
				bgcolor: theme.palette.background.secondary,
				height: '100vh',
				borderRadius: 4,
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.standard,
				}),
				overflowX: 'hidden',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: expanded ? 'space-between' : 'center',
					px: expanded ? 3 : 0,
					py: 3,
				}}
			>
				{expanded && (
					<Typography
						variant='h5'
						noWrap
						sx={{ color: theme.palette.text.primary }}
					>
						ABDURAHIM
					</Typography>
				)}
				<IconButton
					onClick={() => setExpanded(prev => !prev)}
					sx={{ color: theme.palette.text.primary }}
				>
					{expanded ? <MenuOpenIcon /> : <MenuIcon />}
				</IconButton>
			</Box>
			<Divider />
			<List>
				{menuItems.map(item => {
					const selected = item.matches.includes(location.pathname)
					return (
						<ListItem key={item.path} disablePadding>
							<Tooltip title={expanded ? '' : item.label} placement='right'>
								<ListItemButton
									selected={selected}
									onClick={() => navigate(item.path)}
									sx={{
										justifyContent: expanded ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: expanded ? 3 : 'auto',
											justifyContent: 'center',
										}}
									>
										{item.icon}
									</ListItemIcon>
									{expanded && (
										<ListItemText
											primary={item.label}
											sx={{ color: theme.palette.text.primary }}
										/>
									)}
								</ListItemButton>
							</Tooltip>
						</ListItem>
					)
				})}
			</List>
		</Box>
	)
}

export default SiteBar
