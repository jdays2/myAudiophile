import { useSelector } from 'react-redux';
import { moveTop } from '../../utils/moveTop';

import { selectTotalAmount } from '../../redux/slices/productsSlice';

import PaymentApproved from '../payment-approved/PaymentApproved';
import { useState, useRef } from 'react';

const PriceInfo = () => {
	const cartArray = useSelector((state) => state.cart);
	const totalPrice = useSelector(selectTotalAmount);

	const [activeModal, setActiveModal] = useState(false);

	const btn = useRef(null);

	const toggleModal = () => {
		setActiveModal(!activeModal);
	};

	const shipping = 50;
	const getVat = () => {
		return (totalPrice / 100) * 10;
	};
	const vat = getVat().toFixed(1);
	const total = getVat() + shipping + totalPrice;

	return (
		<div className="price-info">
			<p className="price-info__title">summary</p>
			<ul className="price-info__list">
				{cartArray.map((item, id) => {
					return (
						<li
							className="price-info__item"
							key={id}>
							<div className="price-info__item-img">
								<img
									src={item.img}
									alt=""
								/>
							</div>
							<div className="price-info__content">
								<div className="price-info__content-col">
									<strong>{item.model}</strong>
									<span>$ {item.price}</span>
								</div>

								<span>x{item.counter}</span>
							</div>
						</li>
					);
				})}
			</ul>

			<div className="price-info__total-box">
				<div className="price-info__price">
					<span>TOTAL</span> <strong>$ {totalPrice}</strong>
				</div>
				<div className="price-info__price">
					<span>SHIPPING</span> <strong>$ {shipping}</strong>
				</div>

				<div className="price-info__price">
					<span>VAT (INCLUDED)</span> <strong>$ {vat}</strong>
				</div>
			</div>

			<div className="price-info__price price-info__price--total">
				<span>GRAND TOTAL</span> <strong>$ {total}</strong>
			</div>

			<button
				onClick={toggleModal}
				className="btn btn--orange" ref={btn}>
				<span>CONTINUE & PAY</span>
			</button>
			{activeModal && <PaymentApproved toggleModal={toggleModal} total={total} cartArray={cartArray} btn={btn}/>}
		</div>
	);
};

export default PriceInfo;
