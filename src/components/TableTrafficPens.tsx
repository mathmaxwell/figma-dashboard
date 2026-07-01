import { Box, Typography, useTheme } from '@mui/material'

const TableTrafficPens = ({ count, text }: { count: number; text: string }) => {
	const theme = useTheme()

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 1,
				}}
			>
				<Box
					sx={{
						bgcolor: theme.palette.background.default,
						height: '100%',
						width: '15px',
						borderRadius: 4,
						display: 'flex',
						flexDirection: 'column-reverse',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							bgcolor: theme.palette.primary.main,
							width: '100%',
							height: `${count}%`,
							marginTop: 'auto',
							borderRadius: 4,
						}}
					></Box>
				</Box>
				<Typography variant='body1' sx={{ color: 'grey' }}>
					{text}
				</Typography>
			</Box>
		</>
	)
}

export default TableTrafficPens
