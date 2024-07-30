import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/dashboard/Sidebar';
import { ProductList } from './pages/ProductList';
import { CreateProduct } from './pages/CreateProduct';

function App() {
	return (
		<Router>
			<div className='flex h-screen'>
				<Sidebar />
				<div className='flex-1 p-4 overflow-auto'>
					<Routes>
						<Route path='/products' element={<ProductList />} />
						<Route path='/products/create' element={<CreateProduct />} /> {/* Ruta anidada */}
						{/* Otras rutas */}
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
