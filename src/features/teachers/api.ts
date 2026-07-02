import type { CheckerRow } from '../../components/ui/TableChecker'
import type { EmotionSlice } from '../../components/ui/TablePieChart'

export interface TeacherStats {
	totalTeachers: number
	arrivedToday: number
	attendance: string
	avgEmotion: string
	teachersInClass: number
	absent: number
}

export interface Role {
	title: string
	rows: CheckerRow[]
	emotions: EmotionSlice[]
}

export interface TeachersData {
	stats: TeacherStats
	teachers: Role
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

// TODO: заменить на реальный запрос к backend (fetch/axios)
export function getTeachersData(): TeachersData {
	return {
		stats: {
			totalTeachers: 40,
			arrivedToday: 38,
			attendance: '95%',
			avgEmotion: 'нейтралный',
			teachersInClass: 28,
			absent: 2,
		},
		teachers,
	}
}
