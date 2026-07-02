import { Box, CircularProgress } from '@mui/material'

const LoadingProgress = () => {
	return (
		<>
			<Box
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			>
				<CircularProgress aria-label='Loading…' />
			</Box>
		</>
	)
}

export default LoadingProgress
