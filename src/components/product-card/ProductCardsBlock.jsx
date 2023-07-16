import mainImgOne from '../../assets/products/headphones/XX99-mark-2/main-img.png';
import mainImgTwo from '../../assets/products/headphones/XX99-mark-1/main-img.png';
import mainImgThree from '../../assets/products/headphones/XX59/main-img.png';

import ProductCard from './ProductCard';

const array = [
	{
		img: mainImgOne,
		isNew: true,
		title: 'XX99 Mark II"Headphones"',
		subtitle:
			'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
	},
	{
		img: mainImgTwo,
		isNew: false,
		title: 'XX99 Mark I"Headphones"',
		subtitle:
			'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
	},
	{
		img: mainImgThree,
		isNew: false,
		title: 'XX59 Headphones',
		subtitle:
			'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
	},
];

const ProductCardBlock = () => {
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
