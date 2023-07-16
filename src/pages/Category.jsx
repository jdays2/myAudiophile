import ProductCardBlock from '../components/product-card/ProductCardsBlock';

import Seo from '../components/seo/Seo';
import Links from '../components/links/Links';
import CategoryHead from '../components/category-head/CategoryHead';

const title = 'HEADPHONES';

const Category = () => {
	return (
		<>
			<CategoryHead title={title} />
			<ProductCardBlock />
			<Links />
			<Seo />
		</>
	);
};

export default Category;
