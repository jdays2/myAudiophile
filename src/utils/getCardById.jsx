import _ from 'lodash';

export const getCardById = (id, categories) => {
	const allItems = _.flatMap(categories, 'advertisement');
	return _.find(allItems, { id: parseInt(id) });
};
