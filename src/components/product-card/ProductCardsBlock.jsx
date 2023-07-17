import ProductCard from './ProductCard';

const ProductCardBlock = ({array}) => {

	return (
		<div className="product-list">
			<div className="product-list__wrapper">
				{array.map((card, id) => {
					return (
						<ProductCard
							id={id + 1}
							key={id}
							{...card}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProductCardBlock;
