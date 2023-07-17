import ProductCardBlock from '../components/product-card/ProductCardsBlock';
import Seo from '../components/seo/Seo';
import Links from '../components/links/Links';
import CategoryHead from '../components/category-head/CategoryHead';

import { useSelector } from 'react-redux';

const Category = () => {
	const categoryId = useSelector((state) => state.currentCategory);
	const categoryArray = useSelector(
		(state) => state.categorys[categoryId].advertisement
	);
	const categoryTitle = useSelector(
		(state) => state.categorys[categoryId].title
	);

	return (
		<>
			<CategoryHead title={categoryTitle} />
			<ProductCardBlock array={categoryArray} />
			<Links />
			<Seo />
		</>
	);
};

export default Category;
