import { Box, Typography, useTheme } from '@mui/material'
import img1 from '../images/bg-img-1.png'
import img2 from '../images/bg-img-2.png'
import img3 from '../images/bg-img-3.png'
import img4 from '../images/bg-img-4.png'
import img5 from '../images/bg-img-5.png'
import img6 from '../images/bg-img-6.png'
import human1 from '../images/human1.png'
import human2 from '../images/human2.png'
import human3 from '../images/human3.png'
const DashboardCards = ({
	imgNumber,
}: {
	imgNumber: 1 | 2 | 3 | 4 | 5 | 6
}) => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					p: 2,
					bgcolor: theme.palette.background.secondary,
					width: '100%',
					borderRadius: 2,
				}}
			>
				<Box
					sx={{
						backgroundImage: `url(${imgNumber === 1 ? img1 : imgNumber === 2 ? img2 : imgNumber === 3 ? img3 : imgNumber === 4 ? img4 : imgNumber === 5 ? img5 : img6})`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
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
							{imgNumber === 1
								? 'Abstract Colors'
								: imgNumber === 2
									? 'ETH AI Brain'
									: 'Mesh Gradients'}
						</Typography>
						<Typography variant='body2' sx={{ color: 'grey' }}>
							{imgNumber === 1
								? 'By Esthera Jackson'
								: imgNumber === 2
									? 'By Nick Wilson'
									: 'By Will Smith'}
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
						{imgNumber === 1
							? '0.91 ETH'
							: imgNumber === 2
								? '2.82 ETH'
								: '0.56 ETH'}
					</Typography>
					<Box
						sx={{
							p: '5px 24px',
							bgcolor: theme.palette.primary.main,
							color: 'white',
							borderRadius: 4,
						}}
					>
						Place Bid
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default DashboardCards
