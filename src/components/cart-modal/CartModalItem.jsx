import { addToCart, removeFromCart } from "../../redux/slices/productsSlice";

import { useDispatch } from "react-redux";

const CartModalItem = ({ product }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart({product, count: 1}))
  }
  
  const removeItem = () => {
    dispatch(removeFromCart(product))
  }

	return (
		<li className="cart-modal__item">
			<div className="cart-modal__item-img">
				<img
					src={product.img}
					alt="product-img"
				/>
			</div>

			<div className="cart-modal__content-wrapper">
				<div className="cart-modal__item-content">
					<strong>{product.title}</strong>
					<span>{product.price}</span>
				</div>

				<div className="cart-modal__item-controller">
					<button onClick={removeItem}>-</button>
					<span className="cart-modal__item-value">{product.counter}</span>
					<button onClick={addItem}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartModalItem;