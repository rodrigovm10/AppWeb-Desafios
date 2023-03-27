import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductById } from './productsApiSlice';
import EditFormulario from './EditFormulario';

const EditProduct = () => {
	const { id } = useParams();

	const product = useSelector(state => selectProductById(state, id));

	const content = product ? (
		<EditFormulario product={product} />
	) : (
		<p>Cargando...</p>
	);

	return content;
};

export default EditProduct;
