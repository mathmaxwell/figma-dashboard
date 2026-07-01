import { Box, useTheme } from '@mui/material'
import { useId } from 'react'
import { Chance } from 'chance'
import { BarPlot } from '@mui/x-charts/BarChart'
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis'
import { LinePlot } from '@mui/x-charts/LineChart'
import { ChartsContainer } from '@mui/x-charts/ChartsContainer'
import { ChartsClipPath } from '@mui/x-charts/ChartsClipPath'
const chance = new Chance(42)

const xAxisData = Array.from({ length: 26 }, (_, i) =>
	String.fromCharCode(65 + i),
)
const firstSeriesData = Array.from({ length: 26 }, () =>
	chance.integer({ min: 0, max: 10 }),
)
const secondSeriesData = Array.from({ length: 26 }, () =>
	chance.integer({ min: 0, max: 10 }),
)

const TableLongLines = () => {
	const clipPathId = useId()
	const theme = useTheme()
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '400px',
					display: 'flex',
					flexDirection: 'column',
					bgcolor: theme.palette.background.secondary,
					borderRadius: 4,
					p: 2,
				}}
			>
				<ChartsContainer
					series={[
						{ type: 'line', data: firstSeriesData },
						{ type: 'line', data: secondSeriesData },
					]}
					xAxis={[
						{
							data: xAxisData,
							scaleType: 'band',
							id: 'x-axis-id',
							height: 45,
						},
					]}
					height={200}
				>
					<g clipPath={`url(#${clipPathId})`}>
						<BarPlot />
						<LinePlot />
					</g>
					<ChartsXAxis label='X axis' axisId='x-axis-id' />
					<ChartsClipPath id={clipPathId} />
				</ChartsContainer>
			</Box>
		</>
	)
}

export default TableLongLines
