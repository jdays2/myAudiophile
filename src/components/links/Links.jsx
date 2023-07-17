import { Link } from 'react-router-dom';
import LinkCard from './LinkCard';

import { setCurrentCategory } from '../../redux/slices/productsSlice';

import { useSelector, useDispatch } from 'react-redux';

// const linkArray = [
// 	{ img: headphonesImg, title: 'HEADPHONES' },
// 	{ img: speakersImg, title: 'SPEAKERS' },
// 	{ img: earphonesImg, title: 'EARPHONES' },
// ];

const Links = () => {
	const dispatch = useDispatch();
	const linksArray = useSelector((state) => state.categorys);

	const setCategory = (id) => {
		dispatch(setCurrentCategory(id));

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="links">
			<nav className="links__wrapper">
				{linksArray.map((card, id) => {
					return (
						<Link to={`/category/${card.title}`} onClick={()=> {setCategory(id)}}>
							<LinkCard
								key={id}
								img={card.img}
								title={card.title}
							/>
						</Link>
					);
				})}
			</nav>
		</div>
	);
};

export default Links;
