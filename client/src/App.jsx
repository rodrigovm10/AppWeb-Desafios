import './index.css';
import Formulario from './components/Formulario';
import Cards from './components/Cards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditProduct from './components/EditProduct';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Cards />} />
					<Route path={'AñadirProductos'} element={<Formulario />} />
					<Route path="products">
						<Route path=":id" element={<EditProduct />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
