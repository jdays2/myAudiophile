const ProductCard = ({ id, img, isNew, title, subtitle }) => {
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

				<button className="btn btn--orange">
					<span>See Product</span>
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
