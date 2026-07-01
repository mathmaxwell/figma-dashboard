import { Box, Typography, useTheme } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import PersonOffIcon from '@mui/icons-material/PersonOff'
import GradeIcon from '@mui/icons-material/Grade'
import done from '../images/done.svg'
const TableHeaderCards = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
					alignItems: 'stretch',
					gap: 2,
					width: '100%',
				}}
			>
				<Box
					sx={{
						width: '100%',
						bgcolor: theme.palette.background.secondary,
						height: 90,
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'start',
						gap: 2,
						borderRadius: 4,
					}}
				>
					<Box
						sx={{
							bgcolor: theme.palette.background.default,
							borderRadius: '50%',
							height: '56px',
							width: '56px',
							flexShrink: 0,
							position: 'relative',
						}}
					>
						<GroupsIcon
							sx={{
								color: 'white',
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'center',
						}}
					>
						<Typography variant='body1' sx={{ color: 'grey' }}>
							Всего учеников
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							1240
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: '100%',
						bgcolor: theme.palette.background.secondary,
						height: 90,
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'start',
						gap: 2,
						borderRadius: 4,
					}}
				>
					<Box
						sx={{
							bgcolor: theme.palette.background.default,
							borderRadius: '50%',
							height: '56px',
							width: '56px',
							flexShrink: 0,
							position: 'relative',
						}}
					>
						<HowToRegIcon
							sx={{
								color: 'white',
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'center',
						}}
					>
						<Typography
							variant='body1'
							sx={{ color: 'grey', textWrap: 'nowrap' }}
						>
							Пришли сегодня
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							1180
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: '100%',
						bgcolor: theme.palette.background.secondary,
						height: 90,
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'start',
						gap: 2,
						borderRadius: 4,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'center',
						}}
					>
						<Typography
							variant='body1'
							sx={{ color: 'grey', textWrap: 'nowrap' }}
						>
							Посещаемость
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							95%
						</Typography>
						<Typography
							variant='body1'
							sx={{ color: 'grey', textWrap: 'nowrap' }}
						>
							<span style={{ color: 'green' }}>+2%</span> за неделю
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: '100%',
						bgcolor: theme.palette.background.secondary,
						height: 90,
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'start',
						gap: 2,
						borderRadius: 4,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'center',
						}}
					>
						<Typography
							variant='body1'
							sx={{ color: 'grey', textWrap: 'nowrap' }}
						>
							Средняя оценка
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							4.3
						</Typography>
					</Box>
					<Box
						sx={{
							bgcolor: theme.palette.background.default,
							borderRadius: '50%',
							height: '56px',
							width: '56px',
							flexShrink: 0,
							position: 'relative',
						}}
					>
						<GradeIcon
							sx={{
								color: 'white',
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
							}}
						/>
					</Box>
				</Box>

				<Box
					sx={{
						width: '100%',
						bgcolor: theme.palette.background.secondary,
						height: 90,
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'start',
						gap: 2,
						borderRadius: 4,
					}}
				>
					<Box
						sx={{
							bgcolor: theme.palette.primary.main,
							borderRadius: '50%',
							height: '56px',
							width: '56px',
							flexShrink: 0,
							position: 'relative',
						}}
					>
						<img
							src={done}
							alt=''
							style={{
								color: 'white',
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'center',
						}}
					>
						<Typography
							variant='body1'
							sx={{ color: 'grey', textWrap: 'nowrap' }}
						>
							Учителя на месте
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							84
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: '100%',
						bgcolor: theme.palette.background.secondary,
						height: 90,
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'start',
						gap: 2,
						borderRadius: 4,
					}}
				>
					<Box
						sx={{
							bgcolor: theme.palette.background.default,
							borderRadius: '50%',
							height: '56px',
							width: '56px',
							flexShrink: 0,
							position: 'relative',
						}}
					>
						<PersonOffIcon
							sx={{
								color: 'white',
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
							}}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'start',
							justifyContent: 'center',
						}}
					>
						<Typography variant='body1' sx={{ color: 'grey' }}>
							Отсутствуют
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							60
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default TableHeaderCards
