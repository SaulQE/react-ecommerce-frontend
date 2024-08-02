import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EntityForm } from '../../components/forms/EntityForm';

export const UpdateProduct = () => {
	// variables de estado
	const { productId } = useParams();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
		descriptionShort: '',
		descriptionLong: '',
		price: '',
	});

	useEffect(() => {
		const loadProduct = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8080/api/product/search/${productId}`,
				);
				setFormData(response.data);
			} catch (error) {
				console.error('Error loading product data:', error);
			}
		};
		if (productId) {
			loadProduct();
		}
	}, [productId]);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await axios.put(
				`http://localhost:8080/api/product/update/${productId}`,
				formData,
			);
			navigate('/products');
		} catch (error) {
			console.error('Error updating product:', error);
		}
	};

	const fields = [
		{
			label: 'Name',
			type: 'text',
			name: 'name',
			placeholder: 'Enter product name',
			required: true,
		},
		{
			label: 'Description Short',
			type: 'text',
			name: 'descriptionShort',
			placeholder: 'Enter short description',
			required: true,
		},
		{
			label: 'Description Long',
			type: 'text',
			name: 'descriptionLong',
			placeholder: 'Enter long description',
			required: true,
		},
		{
			label: 'Price',
			type: 'number',
			name: 'price',
			placeholder: 'Enter price',
			required: true,
		},
	];

	return (
		<div>
			<h1 className='text-2xl font-bold mb-4'>Update Product</h1>
			<EntityForm
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				fields={fields}
			/>
		</div>
	);
};

export default UpdateProduct;
