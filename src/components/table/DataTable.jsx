import PropTypes from 'prop-types';

export const DataTable = ({ columns, data }) => {
	return (
		<div className='p-4'>
			<div className='bg-white/50 rounded-lg shadow-md overflow-auto'>
				<table className='w-full'>
					<thead className='border-b-2 border-gray-500'>
						<tr>
							{columns.map(column => (
								<th
									className='p-3 text-sm font-bold tracking-wide text-left'
									key={column.accessor}
								>
									{column.Header}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='divide-y divide-white'>
						{data.map((row, rowIndex) => (
							<tr
								key={rowIndex}
								className='bg-white/50 even:bg-slate-50 text-white'
							>
								{columns.map(column => (
									<td
										className='p-3 text-sm text-gray-700 whitespace-no-wrap'
										key={column.accessor}
									>
										{row[column.accessor]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

DataTable.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
};

export default DataTable;
