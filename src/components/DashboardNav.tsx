import { useState } from 'react'
import { Box, MenuItem, Select, Typography, useTheme } from '@mui/material'
import DashboardCards from './DashboardCards'
import img1 from '../images/bg-img-1.png'
import img2 from '../images/bg-img-2.png'
import img3 from '../images/bg-img-3.png'
import img4 from '../images/bg-img-4.png'
import img5 from '../images/bg-img-5.png'
import img6 from '../images/bg-img-6.png'

type Subject = { title: string; teacher: string; lessons: string }

const images = [img1, img2, img3, img4, img5, img6]

const categories: Record<string, Subject[]> = {
	Математика: [
		{ title: 'Алгебра', teacher: 'Учитель: Азиз Каримов', lessons: '12 уроков' },
		{ title: 'Геометрия', teacher: 'Учитель: Дилноза Юсупова', lessons: '18 уроков' },
		{ title: 'Тригонометрия', teacher: 'Учитель: Шерзод Рахимов', lessons: '9 уроков' },
		{ title: 'Статистика', teacher: 'Учитель: Марат Бахтиёров', lessons: '7 уроков' },
	],
	Языки: [
		{ title: 'Английский', teacher: 'Учитель: Мунира Гафурова', lessons: '20 уроков' },
		{ title: 'Русский', teacher: 'Учитель: Пётр Власов', lessons: '15 уроков' },
		{ title: 'Немецкий', teacher: 'Учитель: Азиза Рахимова', lessons: '10 уроков' },
		{ title: 'Французский', teacher: 'Учитель: Карим Валиев', lessons: '8 уроков' },
	],
	Наука: [
		{ title: 'Математика', teacher: 'Учитель: Азиз Каримов', lessons: '12 уроков' },
		{ title: 'Физика', teacher: 'Учитель: Шерзод Рахимов', lessons: '14 уроков' },
		{ title: 'Алгебра', teacher: 'Учитель: Дилноза Юсупова', lessons: '11 уроков' },
		{ title: 'Химия', teacher: 'Учитель: Марат Бахтиёров', lessons: '9 уроков' },
		{ title: 'Биология', teacher: 'Учитель: Пётр Власов', lessons: '13 уроков' },
		{ title: 'Астрономия', teacher: 'Учитель: Мунира Гафурова', lessons: '6 уроков' },
	],
}

const grades = ['8 класса', '9 класса', '10 класса', '11 класса']

const DashboardNav = () => {
	const theme = useTheme()
	const tabs = Object.keys(categories)
	const [active, setActive] = useState(tabs[0])
	const [grade, setGrade] = useState(grades[0])
	const subjects = categories[active]

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
				<Select
					value={grade}
					onChange={e => setGrade(e.target.value)}
					variant='standard'
					disableUnderline
					sx={{
						color: 'white',
						fontSize: '1.5rem',
						fontWeight: 500,
						'& .MuiSelect-select': { pr: '28px !important' },
						'& .MuiSvgIcon-root': { color: 'white', right: 0 },
					}}
				>
					{grades.map(item => (
						<MenuItem key={item} value={item}>
							Уроки для {item}
						</MenuItem>
					))}
				</Select>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 2,
					}}
				>
					{tabs.map(tab => (
						<Typography
							key={tab}
							onClick={() => setActive(tab)}
							sx={{
								color: 'white',
								p: active === tab ? '4px 25px' : 2,
								cursor: 'pointer',
								borderRadius: 4,
								bgcolor:
									active === tab
										? theme.palette.background.secondary
										: 'transparent',
							}}
							variant='h6'
						>
							{tab}
						</Typography>
					))}
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
				{subjects.map((subject, ind) => (
					<DashboardCards
						key={subject.title}
						img={images[ind % images.length]}
						title={subject.title}
						teacher={subject.teacher}
						lessons={subject.lessons}
					/>
				))}
			</Box>
		</>
	)
}

export default DashboardNav
