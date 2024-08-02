import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';

export const InventoryList = () => {
	const [inventories, setInventories] = useState([]);

	// Definir las columnas de la tabla
	const columns = [
		{ Header: 'ID', accessor: 'inventoryId' },
		{ Header: 'Cantidad', accessor: 'quantity' },
		{ Header: 'Producto ID', accessor: 'productId' },
		{
			Header: 'Actions',
			accessor: 'inventoryId',
			Cell: ({ value }) => renderActions(value),
		},
	];

	// Función para cargar los inventarios
	const loadInventories = async () => {
		try {
			const result = await axios.get('http://localhost:8080/api/inventory/all');
			setInventories(result.data);
		} catch (error) {
			console.error('Error loading inventories:', error);
		}
	};

	// Función para eliminar un inventario
	const handleDelete = async inventoryId => {
		try {
			await axios.delete(
				`http://localhost:8080/api/inventory/delete/${inventoryId}`,
			);
			loadInventories(); // Volver a cargar los inventarios después de eliminar
		} catch (error) {
			console.error('Error deleting inventory:', error);
		}
	};

	// Renderizar las acciones
	const renderActions = inventoryId => (
		<div className='flex space-x-2'>
			<Link to={`/inventories/update/${inventoryId}`}>
				<button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded'>
					Edit
				</button>
			</Link>
			<button
				onClick={() => handleDelete(inventoryId)}
				className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
			>
				Delete
			</button>
		</div>
	);

	// Cargar inventarios al montar el componente
	useEffect(() => {
		loadInventories();
	}, []);

	return (
		<>
			<h1 className='text-2xl font-bold mb-4'>Inventario List</h1>
			<Link to='/inventories/create'>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'>
					Create New Inventory
				</button>
			</Link>
			<DataTable columns={columns} data={inventories} />
		</>
	);
};
