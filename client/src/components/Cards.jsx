import NavBar from './NavBar';
import Card from './Card';
import { useGetProductsQuery } from './productsApiSlice';

const Cards = () => {
	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetProductsQuery(undefined, {
		pollingInterval: 60000,
		refetchOnFocus: true,
		refetchOnMountOrArgChange: true,
	});

	let content;

	if (isLoading) content = <p>Loading...</p>;

	if (isError) {
		content = (
			<p className="mb-0.5 inline-block p-0.5 text-red-500">
				{error?.data?.message}
			</p>
		);
	}

	if (isSuccess) {
		const { ids } = products;

		const cardContent =
			ids?.length &&
			ids.map(productId => <Card key={productId} productId={productId} />);

		content = (
			<>
				<NavBar />

				<div className="grid grid-cols-3 gap-y-4 justify-center ml-8">
					{cardContent}
				</div>
			</>
		);
	}

	return content;
};

export default Cards;
