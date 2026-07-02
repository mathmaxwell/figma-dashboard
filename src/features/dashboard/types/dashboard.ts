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
