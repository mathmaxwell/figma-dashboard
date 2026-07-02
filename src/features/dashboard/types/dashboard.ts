import type { IEmotionsType, IGender } from '../../../types/types'

export interface IGetForms {
	id: string
	name: string
	studentsTotalCount: number
	studentsCountToday: number
}
export interface IScheduleSearch {
	id: string
	formId: string
	subjectId: string
	subjectName: string
	teacherId: string
	teacherName: string
	startTime: string
	endTime: string
	academicPeriodId: string
	isVisible: boolean
	isReplaced: boolean
}
export interface IGrade {
	id: string
	scheduleId: string
	subjectName: string
	grade: number
	studentId: string
	formId: string
	createdAt: string
}
export interface IStudent {
	face: { src: string; thumbnail: string } | null
	firstEventTime: string | null
	formId: string
	formName: string
	gender: IGender
	id: string
	lastEmotion: IEmotionsType | null
	lastEventTime: string | null
	name: string
}
