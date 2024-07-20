import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/dashboard/Sidebar';
import { ProductList } from './pages/ProductList';

function App() {
	return (
		<Router>
			<Sidebar />

			<Routes>
				<Route path='/products' element={<ProductList />} />
				{/* Otras rutas */}
			</Routes>
		</Router>
	);
}

export default App;
