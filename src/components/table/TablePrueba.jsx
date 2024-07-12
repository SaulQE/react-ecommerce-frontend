import PropTypes from 'prop-types';

export const TablePrueba = ({ columns, data }) => {
	return (
		<>
			<div className='flex min-h-screen items-center justify-center bg-white'>
				<div className='p-6 overflow-scroll px-0'>
					<table className='w-full min-w-max table-auto text-left'>
						<thead>
							<tr>
								{columns.map(column => (
									<th
										key={column.accessor}
										className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'
									>
										<p className='block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70'>
											{column.Header}
										</p>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.map((row, rowIndex) => (
								<tr key={rowIndex} className='hover'>
									{columns.map(column => (
										<td
											key={column.accessor}
											className='p-4 border-b border-blue-gray-50'
										>
											<div className='flex items-center gap-3'>
												<p className='block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold'>
													{row[column.accessor]}
												</p>
											</div>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

TablePrueba.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
};

export default TablePrueba;
