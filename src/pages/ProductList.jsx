import { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from '../components/table/DataTable';

export const ProductList = () => {
	const [products, setProducts] = useState([]);
	const columns = [
		{ Header: 'ID', accessor: 'productId' },
		{ Header: 'Name', accessor: 'name' },
		{ Header: 'DescriptionShort', accessor: 'descriptionShort' },
		{ Header: 'DescriptionLong', accessor: 'descriptionLong' },
		{ Header: 'Price', accessor: 'price' },
	];

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(
					'http://localhost:8080/api/product/all',
				);
				setProducts(response.data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div>
			<h1 className='text-2xl font-bold mb-4'>Product List</h1>
			<DataTable columns={columns} data={products} />
		</div>
	);
};

export default ProductList;
