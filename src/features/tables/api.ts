import type { CheckerRow } from '../../components/ui/TableChecker'
import type { EmotionSlice } from '../../components/ui/TablePieChart'

export interface TableStats {
	totalStudents: number
	arrivedToday: number
	attendance: string
	attendanceDelta: string
	avgGrade: number
	teachersPresent: number
	absent: number
}

export interface Role {
	title: string
	rows: CheckerRow[]
	emotions: EmotionSlice[]
}

export interface TablesData {
	stats: TableStats
	roles: Role[]
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

// TODO: заменить на реальный запрос к backend (fetch/axios)
export function getTablesData(): TablesData {
	return {
		stats: {
			totalStudents: 1240,
			arrivedToday: 1180,
			attendance: '95%',
			attendanceDelta: '+2%',
			avgGrade: 4.3,
			teachersPresent: 84,
			absent: 60,
		},
		roles: [students, psychologists],
	}
}
