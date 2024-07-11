import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/dashboard/Sidebar';
import { ProductList } from './pages/ProductList';

function App() {
	return (
		<Router>
			<div className='App flex'>
				<Sidebar />
				<div className='p-4 sm:ml-64 w-full'>
					<div className='p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700'>
						<Routes>
							<Route path='/products' element={<ProductList />} />
							{/* Otras rutas */}
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
