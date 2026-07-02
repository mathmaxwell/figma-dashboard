import { Box, Typography, useTheme } from '@mui/material'
import type { ReactNode } from 'react'

export interface StatCard {
	/** Иконка внутри кружка. Если не задана — кружок не рисуется. */
	icon?: ReactNode
	/** Фон кружка: обычный или акцентный (primary). */
	iconBg?: 'default' | 'primary'
	label: string
	value: ReactNode
	/** Доп. строка под значением (например "+2% за неделю"). */
	sub?: ReactNode
}

const StatCards = ({ cards }: { cards: StatCard[] }) => {
	const theme = useTheme()
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
				alignItems: 'stretch',
				gap: 2,
				width: '100%',
			}}
		>
			{cards.map((card, i) => (
				<Box
					key={i}
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
					{card.icon && (
						<Box
							sx={{
								bgcolor:
									card.iconBg === 'primary'
										? theme.palette.primary.main
										: theme.palette.background.default,
								borderRadius: '50%',
								height: '56px',
								width: '56px',
								flexShrink: 0,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{card.icon}
						</Box>
					)}
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
							{card.label}
						</Typography>
						<Typography variant='h6' sx={{ color: 'white' }}>
							{card.value}
						</Typography>
						{card.sub && (
							<Typography
								variant='body1'
								sx={{ color: 'grey', textWrap: 'nowrap' }}
							>
								{card.sub}
							</Typography>
						)}
					</Box>
				</Box>
			))}
		</Box>
	)
}

export default StatCards
