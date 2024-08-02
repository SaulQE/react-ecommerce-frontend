import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EntityForm } from '../../components/forms/EntityForm';

export const CreateProduct = () => {
	let navigate = useNavigate();

	// Variables de estado
	const [formData, setFormData] = useState({
		name: '',
		descriptionShort: '',
		descriptionLong: '',
		price: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:8080/api/product/create', formData);
			navigate('/products');
		} catch (error) {
			console.error('Error creating product:', error);
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
			label: 'Short Description',
			type: 'text',
			name: 'descriptionShort',
			placeholder: 'Enter short description',
			required: true,
		},
		{
			label: 'Long Description',
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
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Create Product</h1>
			<EntityForm
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				fields={fields}
			/>
		</div>
	);
};
