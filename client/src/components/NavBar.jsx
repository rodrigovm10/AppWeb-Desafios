import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 mb-5">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<a href="https://flowbite.com/" className="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-6 mr-3 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Productos
					</span>
				</a>
				<div className="flex md:order-2">
					<Link to="/AñadirProductos">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Añadir Productos
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
