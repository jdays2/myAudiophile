import heroImg from '../../assets/png/hero-background.png';

import { moveTop } from '../../utils/moveTop';

import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__wrapper">
				<div className="hero__content">
					<div className="message">
						<span>NEW PRODUCT</span>
						<strong className="title">XX99 Mark II HeadphoneS</strong>
						<p className="subtitle">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
					</div>
					<Link
						style={{ textDecoration: 'none' }}
						onClick={moveTop}
						to={`/card-detail/0`}
						className="btn btn--orange">
						<span>See Product</span>
					</Link>
				</div>
				<div className="hero__img">
					<img
						src={heroImg}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
