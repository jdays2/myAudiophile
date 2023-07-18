import { setCurrentProduct } from '../../redux/slices/productsSlice';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProductCard = ({ id, img, isNew, title, subtitle }) => {
	const dispatch = useDispatch();
	const setCurrentProd = (id) => {
		dispatch(setCurrentProduct(id));

		window.scrollTo({
			top: 0,
			left: 0,
		});
	};

	const isEven = (value) => {
		return value % 2 === 0;
	};

	return (
		<div className={`product-card ${isEven(id) ? 'product-card--revert' : ''}`}>
			<div className="product-card__img">
				<img
					src={img}
					alt=""
				/>
			</div>

			<div className="product-card__message">
				{isNew ? (
					<span className="title title--new-product">NEW PRODUCT</span>
				) : null}

				<p className="title-black">{title}</p>
				<p className="subtitle subtitle--black">{subtitle}</p>

				<Link
					to={`/card-detail/${id}`}
					onClick={() => {
						setCurrentProd(id);
					}}
					className="btn btn--orange">
					<span>See Product</span>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
