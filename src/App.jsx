import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/dashboard/Sidebar';
import { ProductList } from './pages/products/ProductList';
import { CreateProduct } from './pages/products/CreateProduct';
import { UpdateProduct } from './pages/products/UpdateProduct';
import { InventoryList } from './pages/inventories/InventoryList';
import { CreateInventory } from './pages/inventories/CreateInventory';
import { UpdateInventory } from './pages/inventories/UpdateInventory';

function App() {
	return (
		<Router>
			<div className='flex h-screen'>
				<Sidebar />
				<div className='flex-1 p-4 overflow-auto'>
					<Routes>
						{/* Ruta para productos */}
						<Route path='/products' element={<ProductList />} />
						<Route path='/products/create' element={<CreateProduct />} />
						<Route
							path='/products/update/:productId'
							element={<UpdateProduct />}
						/>
						{/* Ruta para inventarios */}
						<Route path='/inventories' element={<InventoryList />} />
						<Route path='/inventories/create' element={<CreateInventory />} />
						<Route
							path='/inventories/update/:inventoryId'
							element={<UpdateInventory />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
