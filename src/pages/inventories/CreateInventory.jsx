import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EntityForm } from '../../components/forms/EntityForm';

export const CreateInventory = () => {
	let navigate = useNavigate();

	// Variables de estado
	const [formData, setFormData] = useState({
		quantity: '',
		productId: '',
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
			await axios.post('http://localhost:8080/api/inventory/create', formData);
			navigate('/inventories');
		} catch (error) {
			console.error('Error creating inventory:', error);
		}
	};

	const fields = [
		{
			label: 'Cantidad',
			type: 'number',
			name: 'quantity',
			placeholder: 'Enter quantity',
			required: true,
		},
		{
			label: 'Product ID',
			type: 'number',
			name: 'productId',
			placeholder: 'Enter productId',
			required: true,
		},
	];

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>Create Inventory</h1>
			<EntityForm
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				fields={fields}
			/>
		</div>
	);
};
