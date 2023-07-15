import heroImg from '../../assets/png/hero-background.png';

const Hero = () => {
	return (
		<div className="hero">
			<div className='hero__wrapper'>

			
			<div className="hero__content">
				<div className="hero__message">
					<span>NEW PRODUCT</span>
					<strong className='title'>XX99 Mark II HeadphoneS</strong>
					<p className='subtitle'>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
				</div>
				<button className="btn btn--orange">
					<span>See Product</span>
				</button>
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
