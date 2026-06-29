import { Box, useTheme } from '@mui/material'

const TableHeaderCards = () => {
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 2,
				}}
			>
				<Box
					sx={{
						width: '100%',
						bgcolor: theme.palette.background.secondary,
            height:90, 
						p: 2,
					}}
				>
					test
				</Box>
			</Box>
		</>
	)
}

export default TableHeaderCards
