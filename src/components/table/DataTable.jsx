import PropTypes from 'prop-types';

export const DataTable = ({ columns, data }) => {
	return (
		<div className='overflow-x-auto'>
			<table className='table'>
				<thead>
					<tr>
						{columns.map(column => (
							<th key={column.accessor}>{column.Header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex} className='hover'>
							{columns.map(column => (
								<td key={column.accessor}>{row[column.accessor]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

DataTable.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
};

export default DataTable;
