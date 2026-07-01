import { Box, Typography, useTheme } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
const TableChecker = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					bgcolor: theme.palette.background.secondary,
					borderRadius: 4,
					p: 2,
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography sx={{ color: 'white' }} variant='h6'>
						Check Table
					</Typography>

					<Box
						sx={{
							position: 'relative',
							bgcolor: theme.palette.background.default,
							p: 3,
							borderRadius: '50%',
						}}
					>
						<MoreHorizIcon
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)',
								color: 'white',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default TableChecker
