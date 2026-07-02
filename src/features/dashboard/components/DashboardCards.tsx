import { Box, Typography, useTheme } from '@mui/material'
import human1 from '../../../images/human1.png'
import human2 from '../../../images/human2.png'
import human3 from '../../../images/human3.png'
import { useNavigate } from 'react-router-dom'

const DashboardCards = ({
	img,
	title,
	teacher,
	lessons,
	id,
}: {
	img: string
	title: string
	teacher: string
	lessons: string
	id: string
}) => {
	const navigate = useNavigate()
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					p: 2,
					bgcolor: theme.palette.background.secondary,
					width: 260,
					flexShrink: 0,
					borderRadius: 2,
				}}
			>
				<Box
					sx={{
						backgroundImage: `url(${img})`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						width: '100%',
						height: '200px',
						borderRadius: 2,
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						my: 2,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'center',
						}}
					>
						<Typography variant='h6' sx={{ color: 'white' }}>
							{title}
						</Typography>
						<Typography variant='body2' sx={{ color: 'grey' }}>
							{teacher}
						</Typography>
					</Box>
					<Box
						sx={{
							position: 'relative',
							height: '27px',
							width: '60px',
						}}
					>
						<img
							src={human1}
							alt=''
							style={{
								height: '27px',
								width: '27px',
								objectFit: 'cover',
								borderRadius: '50%',
								position: 'absolute',
								top: 0,
								left: 0,
								zIndex: 1,
								padding: '2px',
								backgroundColor: theme.palette.background.default,
							}}
						/>
						<img
							src={human2}
							alt=''
							style={{
								height: '27px',
								width: '27px',
								objectFit: 'cover',
								borderRadius: '50%',
								position: 'absolute',
								top: 0,
								left: '16px',
								zIndex: 2,
								padding: '2px',
								backgroundColor: theme.palette.background.default,
							}}
						/>
						<img
							src={human3}
							alt=''
							style={{
								height: '27px',
								width: '27px',
								objectFit: 'cover',
								borderRadius: '50%',
								position: 'absolute',
								top: 0,
								left: '32px',
								zIndex: 3,
								padding: '2px',
								backgroundColor: theme.palette.background.default,
							}}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography variant='body1' sx={{ color: 'white' }}>
						{lessons}
					</Typography>
					<Box
						onClick={() => {
							navigate(`/subject/${id}`)
						}}
						sx={{
							p: '5px 24px',
							bgcolor: theme.palette.primary.main,
							color: 'white',
							borderRadius: 4,
						}}
					>
						Отсчёт
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default DashboardCards
