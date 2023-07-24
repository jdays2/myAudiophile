import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { moveTop } from '../../utils/moveTop';

import { clearCart } from '../../redux/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';

const PaymentApproved = ({ toggleModal, total, cartArray, btn }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const modal = useRef(null);

	const clickHandler = () => {
		toggleModal();
		moveTop();
		dispatch(clearCart());
	};

	useEffect(() => {
		const handleOutsideClick = (e) => {
			// Проверяем, находится ли клик внутри модального окна
			if (modal.current && !modal.current.contains(e.target)) {
				// Если клик произошел за пределами модального окна
				if (btn && btn.current && btn.current.contains(e.target)) {
					// Исключаем обработку клика, если клик произошел на кнопке btn
					return;
				}
				// Закрываем модальное окно
				toggleModal();
				moveTop();
			}
		};

		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	const firstItem = cartArray[0];
	const others = cartArray.length - 1;
	return (
		<>
			<div className="cart-modal__wrapper"></div>
			<div
				className="payment-approve"
				ref={modal}>
				<div className="payment-approve__icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 64 64"
						fill="none">
						<circle
							cx="32"
							cy="32"
							r="32"
							fill="#D87D4A"
						/>
						<path
							d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
							stroke="white"
							stroke-width="4"
						/>
					</svg>
				</div>

				<p className="payment-approve__title">THANK YOU FOR YOUR ORDER</p>

				<p className="payment-approve__subtitle">
					You will receive an email confirmation shortly.
				</p>

				<div className="payment-approve__content">
					<div className="payment-approve__example">
						<div className="payment-approve__item">
							<div className="payment-approve__item-img">
								<img
									src={firstItem.img}
									alt=""
								/>
							</div>
							<div className="payment-approve__item-content">
								<div className="payment-approve__item-info">
									<strong>{firstItem.model}</strong>
									<span>x{firstItem.counter}</span>
								</div>
								<span>$ {firstItem.price}</span>
							</div>
						</div>
						{others > 0 && (
							<p className="payment-approve__others">
								and {others} other item(s)
							</p>
						)}
					</div>
					<div className="payment-approve__total-box">
						<span>GRAND TOTAL</span>
						<strong>{total}</strong>
					</div>
				</div>

				<Link
					style={{ textDecoration: 'none' }}
					to="/"
					className="btn btn--orange"
					onClick={clickHandler}>
					<span>BACK TO HOME</span>
				</Link>
			</div>
		</>
	);
};

export default PaymentApproved;
