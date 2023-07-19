import ProductCardBlock from '../components/product-card/ProductCardsBlock';
import Seo from '../components/seo/Seo';
import Links from '../components/links/Links';
import CategoryHead from '../components/category-head/CategoryHead';

import { getCardByTitle } from '../utils/getCategoryByTitle';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Category = () => {
	const { title } = useParams();
	const categoryId = useSelector(state => state.categorys);
	const category = getCardByTitle(title, categoryId);
	const categoryArray = category.advertisement;

	return (
		<>
			<CategoryHead title={title} />
			<ProductCardBlock array={categoryArray} />
			<Links/>
			<Seo />
		</>
	);
};

export default Category;
