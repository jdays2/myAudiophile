import largeBlockImg from '../../assets/png/zx9-speaker.png';
import mediumBlockImg from '../../assets/png/zx7-speaker.png';
import smallBlockImg from '../../assets/png/yx1-earphones.png';

import { moveTop } from '../../utils/moveTop';

import { Link } from 'react-router-dom';

const Advisable = () => {
	return (
		<div className="advisable">
			<div className="advisable__wrapper">
				<div className="large-block">
					<div className="large-block__img">
						<img
							src={largeBlockImg}
							alt="product-img"
						/>
					</div>

					<div className="large-block__content">
						<div className="message">
							<strong className="title">ZX9 SPEAKER</strong>
							<p className="subtitle">
								Upgrade to premium speakers that are phenomenally built to
								deliver truly remarkable sound.
							</p>
						</div>
						<Link
							style={{ textDecoration: 'none' }}
							onClick={moveTop}
							to={`/card-detail/3`}
							className="btn btn--black">
							<span>See Product</span>
						</Link>
					</div>
				</div>

				<div className="medium-block">
					<div className="medium-block__img">
						<img
							src={mediumBlockImg}
							alt=""
						/>
					</div>
					<div className="medium-block__content">
						<p className="medium-block__title">ZX7 SPEAKER</p>
						<Link
							style={{ textDecoration: 'none' }}
							onClick={moveTop}
							to={`/card-detail/3`}
							className="btn">
							<span>See Product</span>
						</Link>
					</div>
				</div>

				<div className="small-block">
					<div className="small-block__img">
						<img
							src={smallBlockImg}
							alt=""
						/>
					</div>

					<div className="small-block__content">
						<p className="small-block__title">YX1 EARPHONES</p>
						<Link
							style={{ textDecoration: 'none' }}
							onClick={moveTop}
							to={`/card-detail/5`}
							className="btn">
							<span>See Product</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advisable;
