import { Box, Typography, useTheme } from '@mui/material'
import human6 from '../../../images/humans/Rectangle 346-2.png'
import human5 from '../../../images/humans/Rectangle 346-3.png'
import human4 from '../../../images/humans/Rectangle 346-4.png'
import human3 from '../../../images/humans/Rectangle 346-5.png'
import human2 from '../../../images/humans/Rectangle 346-6.png'
import human1 from '../../../images/humans/Rectangle 346.png'
import Rating from './Rating'

const creators = [
	{ img: human1, name: 'Азиза Рахимова', artworks: 9821, rating: 90 },
	{ img: human2, name: 'Карим Валиев', artworks: 7032, rating: 85 },
	{ img: human3, name: 'Андрей Зотов', artworks: 5204, rating: 80 },
	{ img: human4, name: 'Иброхим Юсупов', artworks: 4309, rating: 70 },
	{ img: human5, name: 'Алишер Пулатов', artworks: 2907, rating: 50 },
	{ img: human6, name: 'Леонид Петров', artworks: 2309, rating: 30 },
]

const HumansRating = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'normal',
					gap: 2,
					p: 2,
					bgcolor: theme.palette.background.paper,
					width: '100%',
					borderBottomLeftRadius: 16,
					borderBottomRightRadius: 16,
				}}
			>
				{creators.map(creator => (
					<Box
						key={creator.name}
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<Box
							sx={{
								flex: 1,
								display: 'flex',
								alignItems: 'center',
								gap: 1,
							}}
						>
							<img src={creator.img} alt='' />
							<Typography variant='body1' sx={{ color: 'white' }}>
								{creator.name}
							</Typography>
						</Box>
						<Typography
							variant='body1'
							sx={{ color: 'white', width: 70, textAlign: 'center' }}
						>
							{creator.artworks}
						</Typography>
						<Box
							sx={{
								width: 70,
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Rating rating={creator.rating} />
						</Box>
					</Box>
				))}
			</Box>
		</>
	)
}

export default HumansRating
