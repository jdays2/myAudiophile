import Links from '../components/links/Links';
import ProductCardDet from '../components/prod-card-det/ProductCardDet';
import ProdPublicity from '../components/prod-publicity/ProdPublicity';
import RecomendationsBlock from '../components/recomendation/RecomendationsBlock';
import Seo from '../components/seo/Seo';

import {getCardById} from '../utils/getCardById'

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
	const { cardId } = useParams();
	const categories = useSelector((state) => state.categorys);

	const currentProduct = getCardById(cardId, categories);
	
	return (
		<>
			<ProductCardDet product={currentProduct}/>
			<ProdPublicity {...currentProduct.publicity}/>
			<RecomendationsBlock />
			<Links/>
			<Seo />
		</>
	);
};

export default ProductDetail;
