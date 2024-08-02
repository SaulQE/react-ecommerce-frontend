import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/dashboard/Sidebar';
import { ProductList } from './pages/products/ProductList';
import { CreateProduct } from './pages/products/CreateProduct';
import { UpdateProduct } from './pages/products/UpdateProduct';

function App() {
	return (
		<Router>
			<div className='flex h-screen'>
				<Sidebar />
				<div className='flex-1 p-4 overflow-auto'>
					<Routes>
						<Route path='/products' element={<ProductList />} />
						<Route path='/products/create' element={<CreateProduct />} />
						<Route
							path='/products/update/:productId'
							element={<UpdateProduct />}
						/>
						{/* Otras rutas */}
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
