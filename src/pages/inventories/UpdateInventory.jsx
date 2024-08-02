import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EntityForm } from '../../components/forms/EntityForm';

export const UpdateInventory = () => {
	// variables de estado
	const { inventoryId } = useParams();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		quantity: '',
		productId: '',
	});

	useEffect(() => {
		const loadInventory = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8080/api/inventory/search/${inventoryId}`,
				);
				setFormData(response.data);
			} catch (error) {
				console.error('Error loading inventory data:', error);
			}
		};
		if (inventoryId) {
			loadInventory();
		}
	}, [inventoryId]);

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
				`http://localhost:8080/api/inventory/update/${inventoryId}`,
				formData,
			);
			navigate('/inventories');
		} catch (error) {
			console.error('Error updating inventory:', error);
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
		<div>
			<h1 className='text-2xl font-bold mb-4'>Update Inventory</h1>
			<EntityForm
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				fields={fields}
			/>
		</div>
	);
};
