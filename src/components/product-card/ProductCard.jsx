import { moveTop } from '../../utils/moveTop';
import { isEven } from '../../utils/isEven';

import { Link } from 'react-router-dom';

const ProductCard = ({ id, img, isNew, title, subtitle }) => {
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

				<Link style={{ textDecoration: 'none' }}  
					to={`/card-detail/${id}`}
					onClick={moveTop}
					className="btn btn--orange">
					<span>See Product</span>
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
