import { Box, Typography, useTheme } from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import flag from '../images/flag.jpg'
import done from '../images/done.svg'
const TableHeaderCards = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
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
						<BarChartIcon
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
							Earnings
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							$350.4
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
						<AttachMoneyIcon
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
							Spend this Month
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							$682.5
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
							Sales
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							$574.34
						</Typography>
						<Typography
							variant='body1'
							sx={{ color: 'grey', textWrap: 'nowrap' }}
						>
							<span style={{ color: 'green' }}>+23%</span> since last month
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
							Your balance
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							$1,000
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
						<img
							src={flag}
							alt=''
							style={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
								borderRadius: '50%',
								width: '50px',
								height: '50px',
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
							New Tasks
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							154
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
						<FolderCopyIcon
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
							Total Projects
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							2935
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default TableHeaderCards
