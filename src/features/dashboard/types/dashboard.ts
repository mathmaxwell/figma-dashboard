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