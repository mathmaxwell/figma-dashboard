import { useEffect } from 'react'
import { Box, MenuItem, Select } from '@mui/material'
import DashboardCards from './DashboardCards'
import { useSelectClassStore } from '../store/selectClass'
import img1 from '../../../images/bg-img-1.png'
import img2 from '../../../images/bg-img-2.png'
import img3 from '../../../images/bg-img-3.png'
import img4 from '../../../images/bg-img-4.png'
import img5 from '../../../images/bg-img-5.png'
import img6 from '../../../images/bg-img-6.png'
import type { IGetForms, IScheduleSearch } from '../types/dashboard'

const images = [img1, img2, img3, img4, img5, img6]

const DashboardNav = ({
	classes,
	subjects,
}: {
	classes: IGetForms[]
	subjects: IScheduleSearch[]
}) => {
	const selectClassId = useSelectClassStore(state => state.selectClassId)
	const setSelectClass = useSelectClassStore(state => state.setSelectClass)

	useEffect(() => {
		if (!selectClassId && classes[0]?.id) {
			setSelectClass({ id: classes[0].id, name: classes[0].name })
		}
	}, [classes, selectClassId, setSelectClass])

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
					value={selectClassId}
					onChange={e => {
						const selected = classes.find(item => item.id === e.target.value)
						if (selected) {
							setSelectClass({ id: selected.id, name: selected.name })
						}
					}}
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
					{classes.map(item => (
						<MenuItem key={item.id} value={item.id}>
							Уроки для {item.name}
						</MenuItem>
					))}
				</Select>
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
				{subjects.map((subject, ind) => {
					if (subject.formId == selectClassId) {
						return (
							<DashboardCards
								key={subject.subjectName}
								img={images[ind % images.length]}
								title={subject.teacherName}
								teacher={''}
								lessons={subject.subjectName}
								id={subject.id}
							/>
						)
					}
				})}
			</Box>
		</>
	)
}

export default DashboardNav
