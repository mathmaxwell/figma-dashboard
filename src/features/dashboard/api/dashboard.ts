import api, { API_CONFIG } from '../../../api/api'
import type { IGetForms, IScheduleSearch } from '../types/dashboard'

export async function getAllForms(token: string) {
	try {
		const responce = await api.post('/form/getForms', {
			...API_CONFIG,
			data: {
				token: `Token ${token}`,
				name: '',
				limit: 100,
				page: 1,
			},
		})

		const result = responce.data.data as IGetForms[]
		return result
	} catch (error) {
		console.log(error)
		return []
	}
}
export async function getSchedulesByDay(
	token: string,
	formId: string,
	academicPeriodId: string,
	startTimeGte: string,
	endTimeLt: string,
) {
	try {
		const responce = await api.post('/schedule/getSchedules', {
			...API_CONFIG,
			data: {
				token: `Token ${token}`,
				formId: formId,
				academicPeriodId,
				teacherId: '',
				subjectName: '',
				subjectId: '',
				startTimeGte,
				endTimeLt,
				limit: 200,
				page: 1,
				isVisible: true,
			},
		})
		const result = responce.data.data as IScheduleSearch[]
		return result
	} catch (error) {
		console.log(error)
		return
	}
}
export async function getStudentByClassName(token: string, formName: string) {
 try {
  const responce = await api.post('/card/getStudents', {
   ...API_CONFIG,
   data: {
    token: `Token ${token}`,
    name: '',
    gender: '',
    idIn: [],
    formName: formName,
    lastEmotion: '',
    limit: 100,
    page: 1,
   },
  })
  const result = responce.data.data as any[]
  return result
 } catch (error) {
  console.log(error)
  return []
 }
}
