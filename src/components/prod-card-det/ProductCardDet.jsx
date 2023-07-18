import BackBtn from '../back-btn/BackBtn';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const ProductCardDet = () => {
	const [count, setCount] = useState(1);
	const categories = useSelector((state) => state.categorys);
	const currentProdId = useSelector((state) => state.currentProduct);

	const allItems = _.flatMap(categories, 'advertisement');

	const findAdvertisementById = (allItems, id) => {
		return _.find(allItems, { id });
	};

	const currentProduct = findAdvertisementById(allItems, currentProdId);
	const counterPlus = () => {
		setCount(count + 1);
	};

	const counterMinus = () => {
		if (count !== 1) {
			setCount(count - 1);
		}
	};

	return (
		<div className="detail-card">
			<div className="detail-card__wrapper">
				<BackBtn />
				<div className="detail-card__top-block">
					<div className="detail-card__img">
						<img
							src={currentProduct.img}
							alt=""
						/>
					</div>

					<div className="detail-card__message">
						{currentProduct.isNew && (
							<span className="title title--new-product">NEW PRODUCT</span>
						)}

						<p className="title-black">{currentProduct.title}</p>
						<p className="subtitle subtitle--black">
							{currentProduct.subtitle}
						</p>

						<span className="detail-card__price">{currentProduct.price}</span>

						<div className="detail-card__counter-wrapper">
							<div className="detail-card__counter">
								<span
									onClick={counterMinus}
									className="detail-card__counter-controll">
									-
								</span>
								<strong className="detail-card__counter-value">{count}</strong>
								<span
									onClick={counterPlus}
									className="detail-card__counter-controll">
									+
								</span>
							</div>
							<button className="btn btn--orange">
								<span>See Product</span>
							</button>
						</div>
					</div>
				</div>
				<div className="detail-card__bottom-block">
					<div className="detail-card__description-wrapper">
						<p className="detail-card__bottom-block-title">FEATURES</p>
						<div className="detail-card__description">
							{currentProduct.features.map((feature, index) => (
								<p key={index}>{feature}</p>
							))}
						</div>
					</div>

					<div className="detail-card__box">
						<p className="detail-card__bottom-block-title">in the box</p>
						<ul className="detail-card__list">
							<li className="detail-card__list-item">
								<span>{currentProduct.boxfill.unit}x</span>
								<p>Headphone Unit</p>
							</li>
							<li className="detail-card__list-item">
								<span>{currentProduct.boxfill.earcups}x</span>
								<p>Replacement Earcups</p>
							</li>
							<li className="detail-card__list-item">
								<span>{currentProduct.boxfill.manual}x</span>
								<p>User Manual</p>
							</li>
							<li className="detail-card__list-item">
								<span>{currentProduct.boxfill.cable}x</span>
								<p>User Manual</p>
							</li>
							<li className="detail-card__list-item">
								<span>{currentProduct.boxfill.bag}x</span>
								<p>Travel Bag</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCardDet;
