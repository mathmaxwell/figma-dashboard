import { useMemo } from 'react'
import { Box, Typography, useTheme } from '@mui/material'

import cost from '../../../images/cost.svg'
import type { IGetForms, IGrade, IScheduleSearch } from '../types/dashboard'
const HumanHistory = ({
	subjects,
	grades,
	classes,
}: {
	subjects: IScheduleSearch[]
	grades: IGrade[]
	classes: IGetForms[]
}) => {
	const ratingArr = useMemo(() => {
		const formatTime = (iso: string) =>
			iso
				? new Date(iso).toLocaleTimeString('ru-RU', {
						hour: '2-digit',
						minute: '2-digit',
					})
				: ''
		return subjects
			.map(subject => {
				const lessonGrades = grades.filter(g => g.scheduleId === subject.id)
				const avgGrade = lessonGrades.length
					? lessonGrades.reduce((sum, g) => sum + g.grade, 0) /
						lessonGrades.length
					: 0
				return {
					title: subject.subjectName,
					text: subject.teacherName,
					className: classes.find(c => c.id === subject.formId)?.name ?? '',
					const: avgGrade.toFixed(1),
					start: formatTime(subject.startTime),
					end: formatTime(subject.endTime),
					count: lessonGrades.length,
				}
			})
			.filter(lesson => lesson.count > 0)
			.sort((a, b) => Number(b.const) - Number(a.const))
			.slice(0, 10)
	}, [subjects, grades, classes])

	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						bgcolor: theme.palette.background.secondary,
						width: '100%',
						mt: 2,
						p: 2,
						gap: 2,
						borderTopLeftRadius: '16px',
						borderTopRightRadius: '16px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Typography sx={{ color: 'white' }} variant='h5'>
							Последние уроки
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
							alignItems: 'center',
							gap: 2,
						}}
					>
						<Typography variant='body2' sx={{ color: 'grey', flex: 1 }}>
							Урок
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'grey', width: 90, textAlign: 'center' }}
						>
							Класс
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'grey', width: 70, textAlign: 'center' }}
						>
							Баллы
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'grey', width: 100, textAlign: 'center' }}
						>
							Время
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						p: 2,
						gap: 2,
						bgcolor: theme.palette.background.paper,
					}}
				>
					{ratingArr.map((card, ind) => (
						<Box
							key={ind}
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
									flexDirection: 'column',
								}}
							>
								<Typography sx={{ color: 'white' }} variant='body1'>
									{card.title}
								</Typography>
								<Typography sx={{ color: 'grey' }} variant='body2'>
									{card.text}
								</Typography>
							</Box>
							<Typography
								variant='body2'
								sx={{ color: 'white', width: 90, textAlign: 'center' }}
							>
								{card.className}
							</Typography>
							<Box
								sx={{
									width: 70,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 1,
								}}
							>
								<img src={cost} alt='' />
								<Typography sx={{ color: 'white' }} variant='h6'>
									{card.const}
								</Typography>
							</Box>
							<Typography
								variant='body2'
								sx={{ color: 'white', width: 100, textAlign: 'center' }}
							>
								{card.start} - {card.end}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</>
	)
}

export default HumanHistory
