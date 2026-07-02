import GroupsIcon from '@mui/icons-material/Groups'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import PersonOffIcon from '@mui/icons-material/PersonOff'
import GradeIcon from '@mui/icons-material/Grade'
import StatCards, { type StatCard } from '../../../components/ui/StatCards'
import done from '../../../images/done.svg'
import type { TableStats } from '../api'

const TableHeaderCards = ({ stats }: { stats: TableStats }) => {
	const cards: StatCard[] = [
		{
			icon: <GroupsIcon sx={{ color: 'white' }} />,
			label: 'Всего учеников',
			value: stats.totalStudents,
		},
		{
			icon: <HowToRegIcon sx={{ color: 'white' }} />,
			label: 'Пришли сегодня',
			value: stats.arrivedToday,
		},
		{
			label: 'Посещаемость',
			value: stats.attendance,
			sub: (
				<>
					<span style={{ color: 'green' }}>{stats.attendanceDelta}</span> за
					неделю
				</>
			),
		},
		{
			icon: <GradeIcon sx={{ color: 'white' }} />,
			label: 'Средняя оценка',
			value: stats.avgGrade,
		},
		{
			icon: <img src={done} alt='' />,
			iconBg: 'primary',
			label: 'Учителя на месте',
			value: stats.teachersPresent,
		},
		{
			icon: <PersonOffIcon sx={{ color: 'white' }} />,
			label: 'Отсутствуют',
			value: stats.absent,
		},
	]

	return <StatCards cards={cards} />
}

export default TableHeaderCards
