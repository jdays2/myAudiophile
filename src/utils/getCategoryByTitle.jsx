export const getCardByTitle = (title, categories) => {
	for (const category of categories) {
		if (category.title === title) {
			return category;
		}
	}
};
