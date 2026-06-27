import { Box, Typography, useTheme } from '@mui/material'
import img1 from '../images/bg-img-1.png'
import img2 from '../images/bg-img-2.png'
import img3 from '../images/bg-img-3.png'
import img4 from '../images/bg-img-4.png'
import img5 from '../images/bg-img-5.png'
import img6 from '../images/bg-img-6.png'
import cost from '../images/cost.svg'
const HumanHistory = () => {
	const histroyArr = [
		{
			img: img1,
			title: 'Colorful Heaven',
			text: 'By Mark Benjamin',
			const: '1.30 ETH',
			time: '30s ago',
		},
		{
			img: img2,
			title: 'Abstract Colors',
			text: 'By Esthera Jackson',
			const: '2.82 ETH',
			time: '58s ago',
		},
		{
			img: img3,
			title: 'ETH AI Brain',
			text: 'By Nick Wilson',
			const: '2.82 ETH',
			time: '1m ago',
		},
		{
			img: img4,
			title: 'Swipe Circles',
			text: 'By Peter Will',
			const: '2.30 ETH',
			time: '1m ago',
		},
		{
			img: img5,
			title: 'Mesh Gradients',
			text: 'By Will Smith',
			const: '0.56 ETH',
			time: '2m ago',
		},
		{
			img: img6,
			title: '3D Cubes Art',
			text: 'By Manny Gates',
			const: '6.58 ETH',
			time: '3m ago',
		},
	]
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						bgcolor: theme.palette.background.secondary,
						width: '100%',
						mt: 2,
						p: 2,
						borderTopLeftRadius: '16px',
						borderTopRightRadius: '16px',
					}}
				>
					<Typography sx={{ color: 'white' }} variant='h5'>
						History
					</Typography>
					<Box
						sx={{
							p: '4px 20px',
							bgcolor: theme.palette.primary.main,
							borderRadius: 4,
							color: 'white',
						}}
					>
						See all
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						p: 2,
						gap: 2,
						bgcolor: theme.palette.background.paper,
					}}
				>
					{histroyArr.map((card, ind) => (
						<Box
							key={ind}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								gap: 2,
							}}
						>
							<img
								src={card.img}
								style={{ width: '66px', height: '66px', borderRadius: '12px' }}
								alt=''
							/>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Typography sx={{ color: 'white' }} variant='body1'>
									{card.title}
								</Typography>
								<Typography sx={{ color: 'grey' }} variant='body1'>
									{card.text}
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 1,
								}}
							>
								<img src={cost} alt='' />
								<Typography sx={{ color: 'white' }} variant='h6'>
									{card.const}
								</Typography>
							</Box>
							<Typography variant='body1' sx={{ color: 'white' }}>
								{card.time}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</>
	)
}

export default HumanHistory
