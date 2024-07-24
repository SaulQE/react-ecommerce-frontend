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
			<DataTable columns={columns} data={products} />
		</>
	);
};

export default ProductList;
