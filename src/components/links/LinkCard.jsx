import bgShadow from '../../assets/svg/background-shadow.svg';

import { Link } from 'react-router-dom';

const LinkCard = ({ title, img }) => {
	return (
		// <Link>
			<div className="links__card">
				<div className="links__card-imgs">
					<img
						src={img}
						alt="headphones image"
					/>
				</div>

				<div className="links__card-shadow">
					<img
						src={bgShadow}
						alt="bg-shadow"
					/>
				</div>
				<div className="links__card-content">
					<strong>{title}</strong>
					<div className="links__ref">
						<span>Shop</span>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 8 12"
								fill="none">
								<path
									d="M1.3219 1L6.3219 6L1.3219 11"
									stroke="#D87D4A"
									stroke-width="2"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		// </Link>
	);
};

export default LinkCard;
