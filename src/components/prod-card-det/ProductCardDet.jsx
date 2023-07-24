import BackBtn from '../back-btn/BackBtn';

import { addToCart } from '../../redux/slices/productsSlice';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCardDet = ({ product }) => {
	const notify = () => toast.success('Added to cart!', {
		position: "top-right",
		autoClose: 1400,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
		delay: 400
		});
	const [count, setCount] = useState(1);

	const counterPlus = () => {
		setCount(count + 1);
	};

	const counterMinus = () => {
		if (count !== 1) {
			setCount(count - 1);
		}
	};

	const dispatch = useDispatch();

	const addItem = () => {
		dispatch(addToCart({ product, count }));
		setCount(1);
		notify();
	};

	return (
		<div className="detail-card">
			<div className="detail-card__wrapper">
				<BackBtn />
				<div className="detail-card__top-block">
					<div className="detail-card__img">
						<img
							src={product.img}
							alt=""
						/>
					</div>

					<div className="detail-card__message">
						{product.isNew && (
							<span className="title title--new-product">NEW PRODUCT</span>
						)}

						<p className="title-black">{product.title}</p>

						<p className="subtitle subtitle--black">{product.subtitle}</p>

						<span className="detail-card__price">$ {product.price}</span>

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
							<button
								className="btn btn--orange"
								onClick={addItem}>
								<span>ADD TO CART</span>
							</button>
						</div>
					</div>
				</div>
				<div className="detail-card__bottom-block">
					<div className="detail-card__description-wrapper">
						<p className="detail-card__bottom-block-title">FEATURES</p>
						<div className="detail-card__description">
							{product.features.map((feature, index) => (
								<p key={index}>{feature}</p>
							))}
						</div>
					</div>

					<div className="detail-card__box">
						<p className="detail-card__bottom-block-title">in the box</p>
						<ul className="detail-card__list">
							<li className="detail-card__list-item">
								<span>{product.boxfill.unit}x</span>
								<p>Headphone Unit</p>
							</li>
							<li className="detail-card__list-item">
								<span>{product.boxfill.earcups}x</span>
								<p>Replacement Earcups</p>
							</li>
							<li className="detail-card__list-item">
								<span>{product.boxfill.manual}x</span>
								<p>User Manual</p>
							</li>
							<li className="detail-card__list-item">
								<span>{product.boxfill.cable}x</span>
								<p>User Manual</p>
							</li>
							<li className="detail-card__list-item">
								<span>{product.boxfill.bag}x</span>
								<p>Travel Bag</p>
							</li>
						</ul>
						<ToastContainer
							position="bottom-right"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCardDet;
