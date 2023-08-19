import CartModalItem from './CartModalItem';

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectTotalAmount } from '../../redux/slices/productsSlice';
import { moveTop } from '../../utils/moveTop';
import { Link } from 'react-router-dom';

const CartModal = ({ cartModalHandler, btn, activeModal }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const total = useSelector(selectTotalAmount);
	const modal = useRef(null);

	const removeAll = () => {
		dispatch(clearCart());
	};

	const clickHandler = () => {
		moveTop();
		cartModalHandler();
	};

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (activeModal && modal.current && !modal.current.contains(e.target)) {
				if (btn && btn.current && btn.current.contains(e.target)) {
					return;
				}
				cartModalHandler();
			}
		};
	
		if (activeModal) {
			document.addEventListener('click', handleOutsideClick);
		}
	
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, [activeModal]);

	return (
		<>
			<div className={`${activeModal ? 'modal-bg active' : 'modal-bg'}`}></div>
			<div
				className={`${activeModal ? 'cart-modal active' : 'cart-modal'}`}
				ref={modal}>
				{cart.length === 0 ? (
					<p className="cart-modal__empty">Your cart is empty.</p>
				) : (
					<>
						<div className="cart-modal__head">
							<strong>cart ({cart.length})</strong>

							<button
								className="cart-modal__remove-btn"
								onClick={removeAll}>
								Remove all
							</button>
						</div>
						<ul className="cart-modal__list">
							{cart.map((product, id) => {
								return (
									<CartModalItem
										key={id}
										product={product}
									/>
								);
							})}
						</ul>
						<div className="cart-modal__price">
							<span>TOTAL</span>
							<strong>$ {total}</strong>
						</div>

						<Link
							to="/cart"
							className="btn btn--orange"
							style={{ textDecoration: 'none' }}
							onClick={clickHandler}>
							<span>checkout</span>
						</Link>
					</>
				)}
			</div>
		</>
	);
};

export default CartModal;
