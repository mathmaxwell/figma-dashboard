import { Box, Typography, useTheme } from '@mui/material'
import HumansRating from './HumansRating'
import HumanHistory from './HumanHistory'
import type { IGetForms, IGrade, IScheduleSearch } from '../types/dashboard'

const DashboardStatistics = ({
	subjects,
	grades,
	classes,
}: {
	subjects: IScheduleSearch[]
	grades: IGrade[]
	classes: IGetForms[]
}) => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '350px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						bgcolor: theme.palette.background.secondary,
						width: '100%',
						p: 2,
						gap: 2,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Typography sx={{ color: 'white' }} variant='h5'>
							Топ ученики
						</Typography>
						<Box
							sx={{
								p: '4px 20px',
								bgcolor: theme.palette.primary.main,
								borderRadius: 4,
								color: 'white',
							}}
						>
							Все
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<Typography variant='body2' sx={{ color: 'grey', flex: 1 }}>
							Имя
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'grey', width: 70, textAlign: 'center' }}
						>
							Баллы
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'grey', width: 70, textAlign: 'center' }}
						>
							Рейтинг
						</Typography>
					</Box>
				</Box>
				<HumansRating grades={grades} />
			</Box>
			<HumanHistory subjects={subjects} grades={grades} classes={classes} />
		</>
	)
}

export default DashboardStatistics
