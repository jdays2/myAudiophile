import headphonesImg from '../../assets/png/headphones-link-img.png';
import speakersImg from '../../assets/png/speakers-link-img.png';
import earphonesImg from '../../assets/png/earphones-link-img.png';

import LinkCard from './LinkCard';

const linkArray = [
	{ img: headphonesImg, title: 'HEADPHONES' },
	{ img: speakersImg, title: 'SPEAKERS' },
	{ img: earphonesImg, title: 'EARPHONES' },
];

const Links = () => {
	return (
		<div className="links">
			<nav className="links__wrapper">
				{linkArray.map((card, id) => {
					return (
						<LinkCard
							key={id}
							img={card.img}
							title={card.title}
						/>
					);
				})}
			</nav>
		</div>
	);
};

export default Links;
