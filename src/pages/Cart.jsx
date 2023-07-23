import BackBtn from '../components/back-btn/BackBtn';
import CartForm from '../components/form-block/CartForm';
import PriceInfo from '../components/price-block/PriceInfo';

const Cart = () => {
	return (
		<div className="cart-form">
			<div className="cart-form__btn-wrapper">
				<BackBtn />
			</div>
			<div className="cart-form__wrapper">
				<CartForm />
				<PriceInfo />
			</div>
		</div>
	);
};

export default Cart;
