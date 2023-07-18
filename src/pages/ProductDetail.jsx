import Links from '../components/links/Links';
import ProductCardDet from '../components/prod-card-det/ProductCardDet';
import RecomendationsBlock from '../components/recomendation/RecomendationsBlock';
import Seo from '../components/seo/Seo';

const ProductDetail = () => {
	return (
		<>
			<ProductCardDet />
			<RecomendationsBlock />
			<Links />
			<Seo />
		</>
	);
};

export default ProductDetail;
