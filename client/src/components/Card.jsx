import { useSelector } from 'react-redux';
import { selectProductById } from './productsApiSlice';
import { useNavigate } from 'react-router-dom';

const Card = ({ productId }) => {
	const product = useSelector(state => selectProductById(state, productId));

	const navigate = useNavigate();

	if (product) {
		console.log('calling card');

		const handleEdit = () => {
			navigate(`products/${productId}`);
		};

		return (
			<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img
						className="p-8 rounded-t-lg"
						src={product.images}
						alt={product.images}
					/>
				</a>
				<div className="px-5 pb-5">
					<a href="#">
						<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
							{product.name}
						</h5>
					</a>
					<div className="flex ixtems-center justify-between">
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							{`$${product.price}`}
						</span>
						<button
							onClick={handleEdit}
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Editar
						</button>
					</div>
				</div>
			</div>
		);
	} else return null;
};

export default Card;
