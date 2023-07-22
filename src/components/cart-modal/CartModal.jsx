import CartModalItem from './CartModalItem';
import { clearCart, selectTotalAmount } from '../../redux/slices/productsSlice';
import { moveTop } from '../../utils/moveTop';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CartModal = ({cartModalHandler}) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const total = useSelector(selectTotalAmount);

	const removeAll = () => {
		dispatch(clearCart());
	};

	const clickHandler = () => {
		moveTop();
		cartModalHandler()
	}

	return (
		<>
			<div className="cart-modal__wrapper"></div>
			<div className="cart-modal">
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

						<Link to='/cart' className="btn btn--orange" style={{ textDecoration: 'none' }} onClick={clickHandler}>
							<span>checkout</span>
						</Link>
					</>
				)}
			</div>
		</>
	);
};

export default CartModal;
