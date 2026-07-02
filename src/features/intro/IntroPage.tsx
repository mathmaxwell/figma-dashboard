import { Box, Typography, useTheme } from '@mui/material'
import background from '../../images/Background.png'
import o from '../../images/o.svg'
import { useNavigate } from 'react-router-dom'
const IntroPage = () => {
	const navigate = useNavigate()
	const theme = useTheme()
	return (
		<>
			<Box
				onClick={() => {
					navigate('/')
				}}
				sx={{
					backgroundImage: `url(${background})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100vh',
					width: '100vw',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 5,
				}}
			>
				<img src={o} alt='' />
				<Typography
					sx={{ color: theme.palette.text.primary, letterSpacing: 4 }}
					variant='h3'
				>
					ABDURAHIM
				</Typography>
			</Box>
		</>
	)
}

export default IntroPage
