import { moveTop } from '../../utils/moveTop';

import { Link } from 'react-router-dom';

const RecomendationsCard = ({ img, title, id, updateKey,ky }) => {
	const redrawHandler = () => {
		moveTop()
		updateKey(ky+1)
	}

	return (
		<div className="recomendations__card">
			<div className="recomendations__img">
				<img
					src={img}
					alt=""
				/>
			</div>
			<p className="recomendations__card-title">{title}</p>
			<Link style={{ textDecoration: 'none' }}  
				className="btn btn--orange"
				to={`/card-detail/${id}`}
				onClick={redrawHandler}>
				<span>See Product</span>
			</Link>
		</div>
	);
};

export default RecomendationsCard;
