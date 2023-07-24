import CartModalItem from './CartModalItem';

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectTotalAmount } from '../../redux/slices/productsSlice';
import { moveTop } from '../../utils/moveTop';
import { Link } from 'react-router-dom';

const CartModal = ({ cartModalHandler, btn }) => {
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
      // Проверяем, находится ли клик внутри модального окна
      if (modal.current && !modal.current.contains(e.target)) {
        // Если клик произошел за пределами модального окна
        if (btn && btn.current && btn.current.contains(e.target)) {
          // Исключаем обработку клика, если клик произошел на кнопке btn
          return;
        }
        // Закрываем модальное окно
        cartModalHandler();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

	return (
		<>
			<div className="cart-modal__wrapper"></div>
			<div
				className="cart-modal"
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
