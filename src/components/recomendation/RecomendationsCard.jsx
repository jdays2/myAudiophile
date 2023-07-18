import { setCurrentProduct } from '../../redux/slices/productsSlice';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const RecomendationsCard = ({ img, title, id }) => {
	const [key, setKey] = useState(0);

	const dispatch = useDispatch();
	const setCurrentProd = (id) => {
		dispatch(setCurrentProduct(id));

		window.scrollTo({
			top: 0,
			left: 0,
		});
	};
	return (
		<div className="recomendations__card" key={key}>
			<div className="recomendations__img">
				<img
					src={img}
					alt=""
				/>
			</div>
			<p className="recomendations__card-title">{title}</p>
			<Link
				className="btn btn--orange"
				to={`/card-detail/${id}`}
				onClick={() => {
					setCurrentProd(id);
				}}>
				<span>See Product</span>
			</Link>
		</div>
	);
};

export default RecomendationsCard;
