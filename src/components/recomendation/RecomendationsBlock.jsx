import RecomendationsCard from './RecomendationsCard';

import { useSelector } from 'react-redux';
import { useState } from 'react';

import _ from 'lodash';

const RecomendationsBlock = () => {
	const [ky, setKy] = useState(0);


	const categorys = useSelector((state) => state.categorys);
	const allAdvertisements = _.flatMap(categorys, 'advertisement');
	const randomAdvertisements = _.sampleSize(allAdvertisements, 3);

	return (
		<div className="recomendations" ky={ky}>
			<p className="recomendations__title">you may also like</p>
			<div className="recomendations__list">
				{randomAdvertisements.map((card, id) => {
					return (
						<RecomendationsCard
							updateKey={setKy}
							ky={ky}
							key={id}
							id={card.id}
							title={card.model}
							img={card.img}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RecomendationsBlock;
