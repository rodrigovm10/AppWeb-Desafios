import { store } from '../../app/store';
import { productsApiSlice } from './productsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
	useEffect(() => {
		console.log('subscribing');
		const users = store.dispatch(
			productsApiSlice.endpoints.getProducts.initiate()
		);

		return () => {
			console.log('unsubscribing');
			notes.unsubscribe();
			users.unsubscribe();
		};
	}, []);

	return <Outlet />;
};
export default Prefetch;
