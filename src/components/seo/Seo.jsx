import seoImg from '../../assets/png/seo-img.png'

const Seo = () => {
	return (
		<div className="seo">
			<div className="seo__wrapper">
				<div className="seo__content">
					<p className="title-black">
						Bringing you the <span>best</span> audio gear
					</p>
					<p className="subtitle subtitle--black">
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>

        <div className="seo__img">
          <img src={seoImg} alt="seo-img"/>
        </div>
			</div>
		</div>
	);
};

export default Seo;
