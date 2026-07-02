import { Box, useTheme } from '@mui/material'

const Rating = ({ rating }: { rating: number }) => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					width: '70px',
					height: '8px',
					bgcolor: theme.palette.background.default,
					borderRadius: '4px',
					position: 'relative',
				}}
			>
				<Box
					sx={{
						height: '8px',
						width: `${(70 / 100) * rating}px`,
						bgcolor: theme.palette.primary.main,
						borderRadius: '4px',
					}}
				></Box>
			</Box>
		</>
	)
}

export default Rating
