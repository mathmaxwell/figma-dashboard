import { Box } from '@mui/material'
import TableHeaderCards from '../components/TableHeaderCards'
import TableWave from '../components/TableWave'
import TableMountain from '../components/TableMountain'
import TableChecker, { type CheckerRow } from '../components/TableChecker'
import TablePieChart, { type EmotionSlice } from '../components/TablePieChart'

type Role = {
	title: string
	rows: CheckerRow[]
	emotions: EmotionSlice[]
}

const students: Role = {
	title: 'Посещаемость учеников',
	rows: [
		{ id: 1, firstName: 'Азиза', lastName: 'Рахимова', arrived: '08:12', left: '14:30', status: 'Вовремя', emotion: 'Счастливый' },
		{ id: 2, firstName: 'Карим', lastName: 'Валиев', arrived: '08:41', left: '14:30', status: 'Опоздал', emotion: 'Нейтральный' },
		{ id: 3, firstName: 'Андрей', lastName: 'Зотов', arrived: '08:05', left: '14:30', status: 'Вовремя', emotion: 'Счастливый' },
		{ id: 4, firstName: 'Иброхим', lastName: 'Юсупов', arrived: '—', left: '—', status: 'Отсутствует', emotion: '—' },
		{ id: 5, firstName: 'Алишер', lastName: 'Пулатов', arrived: '08:20', left: '14:30', status: 'Вовремя', emotion: 'Грустный' },
		{ id: 6, firstName: 'Леонид', lastName: 'Петров', arrived: '08:55', left: '14:30', status: 'Опоздал', emotion: 'Злой' },
		{ id: 7, firstName: 'Мадина', lastName: 'Салимова', arrived: '08:03', left: '14:30', status: 'Вовремя', emotion: 'Счастливый' },
		{ id: 8, firstName: 'Тимур', lastName: 'Насыров', arrived: '08:15', left: '14:30', status: 'Вовремя', emotion: 'Нейтральный' },
		{ id: 9, firstName: 'Ольга', lastName: 'Ким', arrived: '—', left: '—', status: 'Отсутствует', emotion: '—' },
	],
	emotions: [
		{ id: 0, value: 62, label: 'Счастливый' },
		{ id: 1, value: 24, label: 'Нейтральный' },
		{ id: 2, value: 9, label: 'Грустный' },
		{ id: 3, value: 5, label: 'Злой' },
	],
}

const teachers: Role = {
	title: 'Посещаемость учителей',
	rows: [
		{ id: 1, firstName: 'Азиз', lastName: 'Каримов', arrived: '07:45', left: '15:00', status: 'Вовремя', emotion: 'Нейтральный' },
		{ id: 2, firstName: 'Дилноза', lastName: 'Юсупова', arrived: '07:50', left: '15:00', status: 'Вовремя', emotion: 'Счастливый' },
		{ id: 3, firstName: 'Шерзод', lastName: 'Рахимов', arrived: '08:10', left: '15:00', status: 'Опоздал', emotion: 'Нейтральный' },
		{ id: 4, firstName: 'Марат', lastName: 'Бахтиёров', arrived: '07:40', left: '15:00', status: 'Вовремя', emotion: 'Счастливый' },
		{ id: 5, firstName: 'Пётр', lastName: 'Власов', arrived: '—', left: '—', status: 'Отсутствует', emotion: '—' },
		{ id: 6, firstName: 'Мунира', lastName: 'Гафурова', arrived: '07:55', left: '15:00', status: 'Вовремя', emotion: 'Нейтральный' },
	],
	emotions: [
		{ id: 0, value: 40, label: 'Счастливый' },
		{ id: 1, value: 50, label: 'Нейтральный' },
		{ id: 2, value: 7, label: 'Грустный' },
		{ id: 3, value: 3, label: 'Злой' },
	],
}

const psychologists: Role = {
	title: 'Посещаемость психологов',
	rows: [
		{ id: 1, firstName: 'Нигора', lastName: 'Исмоилова', arrived: '08:00', left: '15:00', status: 'Вовремя', emotion: 'Счастливый' },
		{ id: 2, firstName: 'Виктор', lastName: 'Ли', arrived: '08:05', left: '15:00', status: 'Вовремя', emotion: 'Нейтральный' },
		{ id: 3, firstName: 'Сабина', lastName: 'Юлдашева', arrived: '08:30', left: '15:00', status: 'Опоздал', emotion: 'Нейтральный' },
		{ id: 4, firstName: 'Рустам', lastName: 'Обидов', arrived: '08:00', left: '15:00', status: 'Вовремя', emotion: 'Счастливый' },
	],
	emotions: [
		{ id: 0, value: 55, label: 'Счастливый' },
		{ id: 1, value: 40, label: 'Нейтральный' },
		{ id: 2, value: 3, label: 'Грустный' },
		{ id: 3, value: 2, label: 'Злой' },
	],
}

const roles: Role[] = [students, teachers, psychologists]

const Tables = () => {
	return (
		<>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					justifyItems: 'center',
					gap: 2,
					height: '100%',
					overflowY: 'auto',
				}}
			>
				<TableHeaderCards />
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						alignItems: 'stretch',
						gap: 2,
						width: '100%',
						height: '400px',
					}}
				>
					<Box sx={{ minWidth: 0 }}>
						<TableWave />
					</Box>
					<Box sx={{ minWidth: 0 }}>
						<TableMountain />
					</Box>
				</Box>
				{roles.map(role => (
					<Box
						key={role.title}
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							alignItems: 'stretch',
							gap: 2,
							width: '100%',
							height: '400px',
						}}
					>
						<Box sx={{ minWidth: 0 }}>
							<TableChecker title={role.title} rows={role.rows} />
						</Box>
						<Box sx={{ minWidth: 0 }}>
							<TablePieChart title='Эмоции' data={role.emotions} />
						</Box>
					</Box>
				))}
			</Box>
		</>
	)
}

export default Tables
