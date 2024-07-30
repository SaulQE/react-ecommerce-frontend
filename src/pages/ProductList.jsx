import { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../components/table/DataTable';
import { Link } from 'react-router-dom';

export const ProductList = () => {
	const [products, setProducts] = useState([]);
	const columns = [
		{ Header: 'ID', accessor: 'productId' },
		{ Header: 'Name', accessor: 'name' },
		{ Header: 'DescriptionShort', accessor: 'descriptionShort' },
		{ Header: 'DescriptionLong', accessor: 'descriptionLong' },
		{ Header: 'Price', accessor: 'price' },
	];

	const loadProducts = async () => {
		const result = await axios.get('http://localhost:8080/api/product/all');
		setProducts(result.data);
	};

	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<>
			<h1 className='text-2xl font-bold mb-4'>Product List</h1>
			<Link to='/products/create'>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'>
					Create New Product
				</button>
			</Link>
			<DataTable columns={columns} data={products} />
		</>
	);
};
