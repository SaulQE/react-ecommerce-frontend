import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataTable from '../../components/table/DataTable';

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    // Definir las columnas de la tabla
    const columns = [
        { Header: 'ID', accessor: 'productId' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'DescriptionShort', accessor: 'descriptionShort' },
        { Header: 'DescriptionLong', accessor: 'descriptionLong' },
        { Header: 'Price', accessor: 'price' },
        {
            Header: 'Actions',
            accessor: 'productId',
            Cell: ({ value }) => renderActions(value),
        },
    ];

    // Función para cargar los productos
    const loadProducts = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/product/all');
            setProducts(result.data);
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    // Función para eliminar un producto
    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:8080/api/product/delete/${productId}`);
            loadProducts(); // Volver a cargar los productos después de eliminar
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Renderizar las acciones
    const renderActions = (productId) => (
        <div className='flex space-x-2'>
            <Link to={`/products/update/${productId}`}>
                <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded'>
                    Edit
                </button>
            </Link>
            <button
                onClick={() => handleDelete(productId)}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
            >
                Delete
            </button>
        </div>
    );

    // Cargar productos al montar el componente
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
