import { Box, Typography, useTheme } from '@mui/material'
import img1 from '../images/bg-img-1.png'
import img2 from '../images/bg-img-2.png'
import img3 from '../images/bg-img-3.png'
import img4 from '../images/bg-img-4.png'
import img5 from '../images/bg-img-5.png'
import img6 from '../images/bg-img-6.png'

type News = { img: string; date: string; title: string; text: string }

const news: News[] = [
	{
		img: img1,
		date: '2 июня',
		title: 'Чемпионат по футболу',
		text: 'Школьный турнир между 8–11 классами на стадионе.',
	},
	{
		img: img2,
		date: '5 июня',
		title: 'Собрание родителей',
		text: 'Итоги учебного года и планы на следующий семестр.',
	},
	{
		img: img3,
		date: '10 июня',
		title: 'Олимпиада по математике',
		text: 'Городской этап для учеников старших классов.',
	},
	{
		img: img4,
		date: '15 июня',
		title: 'День открытых дверей',
		text: 'Экскурсия по школе для будущих учеников.',
	},
	{
		img: img5,
		date: '20 июня',
		title: 'Выпускной вечер',
		text: 'Торжественное вручение аттестатов 11 классам.',
	},
	{
		img: img6,
		date: '25 июня',
		title: 'Летний лагерь',
		text: 'Запись на школьный летний лагерь открыта.',
	},
]

const DashboardNews = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 2,
					mt: 2,
				}}
			>
				<Typography sx={{ color: 'white' }} variant='h5'>
					Последние новости
				</Typography>
				<Box
					sx={{
						p: '4px 20px',
						bgcolor: theme.palette.primary.main,
						borderRadius: 4,
						color: 'white',
					}}
				>
					Все
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'stretch',
					gap: 2,
					mt: 2,
					width: '100%',
					overflowX: 'auto',
					pb: 1,
				}}
			>
				{news.map(item => (
					<Box
						key={item.title}
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
								backgroundImage: `url(${item.img})`,
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								width: '100%',
								height: '160px',
								borderRadius: 2,
							}}
						/>
						<Typography
							variant='body2'
							sx={{ color: theme.palette.primary.main, mt: 2 }}
						>
							{item.date}
						</Typography>
						<Typography variant='h6' sx={{ color: 'white', mt: 0.5 }}>
							{item.title}
						</Typography>
						<Typography variant='body2' sx={{ color: 'grey', mt: 0.5 }}>
							{item.text}
						</Typography>
					</Box>
				))}
			</Box>
		</>
	)
}

export default DashboardNews
