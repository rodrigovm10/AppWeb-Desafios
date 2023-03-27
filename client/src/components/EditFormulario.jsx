import { useState, useEffect } from 'react';
import {
	useUpdateProductMutation,
	useDeleteProductMutation,
} from './productsApiSlice';
import { useNavigate } from 'react-router-dom';

const EditFormulario = ({ product }) => {
	const navigate = useNavigate();

	const [updateProduct, { isLoading, isSuccess, isError, error }] =
		useUpdateProductMutation();

	const [
		deleteProduct,
		{ isSuccess: isDelSuccess, isError: isDelError, error: delerror },
	] = useDeleteProductMutation();

	const [name, setName] = useState(product.name);
	const [price, setPrice] = useState(product.price);
	const [description, setDescription] = useState(product.description);
	const [images, setImages] = useState(product.images);

	useEffect(() => {
		console.log(isSuccess);
		if (isSuccess || isDelSuccess) {
			setName('');
			setPrice('');
			setDescription('');
			setImages('');
			navigate(`/`);
		}
	}, [isSuccess, isDelSuccess, navigate]);

	const onNameChanged = e => setName(e.target.value);
	const onPriceChanged = e => setPrice(e.target.value);
	const onDescriptionChanged = e => setDescription(e.target.value);
	const onImageChanged = e => setImages(e.target.value);

	const onSaveProductClicked = async e => {
		await updateProduct({ id: product.id, name, price, description, images });
	};

	const onDeleteProductClicked = async () => {
		await deleteProduct({ id: product.id });
	};

	const content = (
		<div className="w-full mt-2 px-[64px] font-monserrat">
			<div className="relative mr-auto ml-auto max-w-1440 pt-0">
				<div className="mr-auto mb-0 ml-auto w-[388px] max-w-full rounded-xl bg-white p-6 shadow-sombra2">
					<form onSubmit={e => e.preventDefault()}>
						<label
							htmlFor={'Name'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Name:
						</label>
						<input
							id={'Name'}
							name={'Name'}
							type="text"
							autoComplete="off"
							value={name}
							onChange={onNameChanged}
							required
							placeholder="Name:"
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<label
							htmlFor={'Description'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Description:
						</label>
						<input
							id={'Description'}
							htmlFor={'Description'}
							type="text"
							value={description}
							onChange={onDescriptionChanged}
							required
							placeholder="Description"
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<label
							htmlFor={'Price'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Price:
						</label>
						<input
							id={'Price'}
							htmlFor={'Price'}
							type="number"
							required
							value={price}
							onChange={onPriceChanged}
							placeholder="Price"
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<label
							htmlFor={'Image'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Image:
						</label>
						<input
							id={'Image'}
							htmlFor={'Image'}
							type="text"
							value={images}
							onChange={onImageChanged}
							required
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<input
							id={'Submit'}
							name="Submit"
							type="submit"
							value={'Submit'}
							onClick={onSaveProductClicked}
							className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-green-700 p-4 text-center leading-4 text-white"
						/>
						<input
							id={'Submit'}
							name="Submit"
							type="submit"
							value={'Delete'}
							onClick={onDeleteProductClicked}
							className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-red-700 p-4 text-center leading-4 text-white"
						/>
					</form>
				</div>
			</div>
		</div>
	);
	return content;
};

export default EditFormulario;
