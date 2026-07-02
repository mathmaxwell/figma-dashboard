import GroupsIcon from '@mui/icons-material/Groups'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import PersonOffIcon from '@mui/icons-material/PersonOff'
import GradeIcon from '@mui/icons-material/Grade'
import StatCards, { type StatCard } from '../../../components/ui/StatCards'
import done from '../../../images/done.svg'
import type { TeacherStats } from '../api'

const TeacherHeader = ({ stats }: { stats: TeacherStats }) => {
	const cards: StatCard[] = [
		{
			icon: <GroupsIcon sx={{ color: 'white' }} />,
			label: 'Всего учителей',
			value: stats.totalTeachers,
		},
		{
			icon: <HowToRegIcon sx={{ color: 'white' }} />,
			label: 'Пришли сегодня',
			value: stats.arrivedToday,
		},
		{
			label: 'Посещаемость',
			value: stats.attendance,
		},
		{
			icon: <GradeIcon sx={{ color: 'white' }} />,
			label: 'Средняя эмоция',
			value: stats.avgEmotion,
		},
		{
			icon: <img src={done} alt='' />,
			iconBg: 'primary',
			label: 'Учителя на уроке',
			value: stats.teachersInClass,
		},
		{
			icon: <PersonOffIcon sx={{ color: 'white' }} />,
			label: 'Отсутствуют',
			value: stats.absent,
		},
	]

	return <StatCards cards={cards} />
}

export default TeacherHeader
