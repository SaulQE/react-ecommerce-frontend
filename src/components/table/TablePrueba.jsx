import PropTypes from 'prop-types';

export const TablePrueba = ({ columns, data }) => {
	return (
		<>
			<div className='p-4'>
				<div className='bg-white/50 rounded-lg shadow-md overflow-auto'>
					<table className='w-full'>
						<thead className='border-b-2 border-gray-500'>
							<tr>
								<th className='p-3 text-sm font-bold tracking-wide text-left'>
									Name
								</th>
								<th className='p-3 text-sm font-bold tracking-wide text-left'>
									LastName
								</th>
								<th className='p-3 text-sm font-bold tracking-wide text-left'>
									Email
								</th>
								<th className='p-3 text-sm font-bold tracking-wide text-left'>
									Avenida
								</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-white'>
							<tr className='bg-white/50 even:bg-slate-50 text-white'>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Albert Robert
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Bravo Quintana
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Bravo gmail.com
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Av. TuCasa
								</td>
							</tr>
							<tr className='bg-white/50 even:bg-white/35'>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Albert Robert
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Bravo Quintana
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Bravo gmail.com
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Av. TuCasa
								</td>
							</tr>
							<tr className='bg-white/50 even:bg-slate-50'>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Albert Robert
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Bravo Quintana
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Bravo gmail.com
								</td>
								<td className='p-3 text-sm text-gray-700 whitespace-no-wrap'>
									Av. TuCasa
								</td>
							</tr>
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
