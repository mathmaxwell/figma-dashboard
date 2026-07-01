import { Box, Typography, useTheme } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'

const TableChecker = () => {
	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'firstName', headerName: 'First name', width: 130 },
		{ field: 'lastName', headerName: 'Last name', width: 130 },
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			width: 90,
		},
		{
			field: 'fullName',
			headerName: 'Full name',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
			valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
		},
	]

	const rows = [
		{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
		{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
		{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
		{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
		{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
		{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
		{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
		{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
		{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
	]
	const paginationModel = { page: 0, pageSize: 5 }
	const theme = useTheme()

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '400px',
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
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{ pagination: { paginationModel } }}
					pageSizeOptions={[5, 10]}
					checkboxSelection
					sx={{
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
