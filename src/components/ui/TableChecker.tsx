import { Box, Typography, useTheme } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'

export type CheckerRow = {
	id: number
	firstName: string
	lastName: string
	arrived: string
	left: string
	status: string
	emotion: string
}

const columns: GridColDef[] = [
	{ field: 'firstName', headerName: 'Имя', flex: 1, minWidth: 90 },
	{ field: 'lastName', headerName: 'Фамилия', flex: 1, minWidth: 100 },
	{ field: 'arrived', headerName: 'Пришёл', width: 85 },
	{ field: 'left', headerName: 'Ушёл', width: 75 },
	{ field: 'status', headerName: 'Статус', width: 115 },
	{ field: 'emotion', headerName: 'Эмоция', width: 115 },
]

const TableChecker = ({
	title,
	rows,
}: {
	title: string
	rows: CheckerRow[]
}) => {
	const paginationModel = { page: 0, pageSize: 5 }
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
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography sx={{ color: 'white' }} variant='h6'>
						{title}
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
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{ pagination: { paginationModel } }}
					pageSizeOptions={[5, 10]}
					sx={{
						flex: 1,
						minHeight: 0,
						border: 0,
						color: 'white',
						bgcolor: theme.palette.background.secondary,
						'& .MuiDataGrid-cell': { border: 0 },
						'& .MuiDataGrid-columnHeaders': { border: 0 },
						'& .MuiDataGrid-columnSeparator': { display: 'none' },
						'& .MuiDataGrid-footerContainer': { border: 0 },
						'& .MuiDataGrid-row': { border: 0 },
						'& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus': {
							outline: 'none',
						},
					}}
				/>
			</Box>
		</>
	)
}

export default TableChecker
