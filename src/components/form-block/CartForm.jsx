import PaymentApproved from '../payment-approved/PaymentApproved';
import { moveTop } from '../../utils/moveTop';
import { selectTotalAmount } from '../../redux/slices/productsSlice';

import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';

const CartForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: 'onTouched' });

	const submitHandler = () => {
		toggleModal()
	};

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
		<form
			className="cart-form__wrapper"
			onSubmit={handleSubmit(submitHandler)}>
			<div className="cart-form__main">
				<p className="cart-form__title">CHECKOUT</p>
				<div className="cart-form__section">
					<p className="cart-form__section-title">Billing Details</p>
					<div className="cart-form__list">
						<div
							className={`${
								errors?.name ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>Name</span>

								<div>
									<span>{errors?.name?.message}</span>
								</div>
							</label>
							<input
								{...register('name', {
									required: 'This field is mandatory',
									minLength: {
										value: 3,
										message: 'Min 3 characters',
									},
									maxLength: {
										value: 12,
										message: 'Max 12 characters',
									},
									pattern: {
										value: /^[A-Za-zА-Яа-я]+$/,
										message: 'Invalid format',
									},
								})}
								placeholder="Alexei Ward"
							/>
						</div>

						<div
							className={`${
								errors?.email ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>Email Address</span>

								<div>
									<span>{errors?.email?.message}</span>
								</div>
							</label>
							<input
								{...register('email', {
									required: 'This field is mandatory',
									minLength: {
										value: 6,
										message: 'Min 6 characters',
									},
									maxLength: {
										value: 30,
										message: 'Max 30 characters',
									},
									pattern: {
										value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
										message: 'Invalid format',
									},
								})}
								placeholder="alexei@mail.com"
							/>
						</div>

						<div
							className={`${
								errors?.tel ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>Phone Number</span>

								<div>
									<span>{errors?.tel?.message}</span>
								</div>
							</label>
							<input
								{...register('tel', {
									required: 'This field is mandatory',
									minLength: {
										value: 8,
										message: 'Min 8 characters',
									},
									maxLength: {
										value: 14,
										message: 'Max 14 characters',
									},
									pattern: {
										value: /^[0-9]+$/,
										message: 'Invalid format',
									},
								})}
								placeholder="+1 202-555-0136"
							/>
						</div>
					</div>
				</div>

				<div className="cart-form__section">
					<p className="cart-form__section-title">shipping info</p>
					<div className="cart-form__list">
						<div
							className={`${
								errors?.adress
									? 'cart-form__item error cart-form__item--large'
									: 'cart-form__item cart-form__item--large'
							}`}>
							<label>
								<span>Address</span>

								<div>
									<span>{errors?.adress?.message}</span>
								</div>
							</label>
							<input
								{...register('adress', {
									required: 'This field is mandatory',
									minLength: {
										value: 7,
										message: 'Min 7 characters',
									},
									maxLength: {
										value: 30,
										message: 'Max 30 characters',
									},
								})}
								placeholder="1137 Williams Avenue"
							/>
						</div>

						<div
							className={`${
								errors?.zip ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>ZIP Code</span>

								<div>
									<span>{errors?.zip?.message}</span>
								</div>
							</label>
							<input
								{...register('zip', {
									required: 'This field is mandatory',
									minLength: {
										value: 5,
										message: 'Min 5 characters',
									},
									maxLength: {
										value: 9,
										message: 'Max 9 characters',
									},
									pattern: {
										value: /^[0-9]+$/,
										message: 'Invalid format',
									}
								})}
								placeholder="10001"
							/>
						</div>

						<div
							className={`${
								errors?.city ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>City</span>

								<div>
									<span>{errors?.city?.message}</span>
								</div>
							</label>
							<input
								{...register('city', {
									required: 'This field is mandatory',
									minLength: {
										value: 3,
										message: 'Min 3 characters',
									},
									maxLength: {
										value: 12,
										message: 'Max 12 characters',
									},
									pattern: {
										value: /^[A-Za-zА-Яа-я]+$/,
										message: 'Invalid format',
									},
								})}
								placeholder="New York"
							/>
						</div>

						<div
							className={`${
								errors?.country ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>Country</span>

								<div>
									<span>{errors?.country?.message}</span>
								</div>
							</label>
							<input
								{...register('country', {
									required: 'This field is mandatory',
									minLength: {
										value: 3,
										message: 'Min 3 characters',
									},
									maxLength: {
										value: 16,
										message: 'Max 16 characters',
									},
									pattern: {
										value: /^[A-Za-zА-Яа-я]+$/,
										message: 'Invalid format',
									},
								})}
								placeholder="New York"
							/>
						</div>
					</div>
				</div>

				<div className="cart-form__section">
					<p className="cart-form__section-title">payment details</p>
					<div className="cart-form__list">
						<div className="cart-form__item cart-form__item--chekers">
							<p>Payment Method</p>
							<div className="cart-form__radio-wrapper">
								<input
									id="e-money"
									name="method"
									type="radio"
									placeholder="1137 Williams Avenue"
									checked
								/>
								<label for="e-money">
									<div className="checker">
										<div className="checker__oval-1">
											<svg
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<circle
													cx="10"
													cy="10"
													r="9.5"
													stroke="#CFCFCF"
												/>
											</svg>

											<svg
												className="checker__oval-2"
												viewBox="0 0 10 10"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<circle
													cx="5"
													cy="5"
													r="5"
													fill="#D87D4A"
												/>
											</svg>
										</div>
									</div>

									<span>e-Money</span>
								</label>
								<input
									id="cash"
									name="method"
									type="radio"
									placeholder="1137 Williams Avenue"
								/>
								<label for="cash">
									<div className="checker">
										<div className="checker__oval-1">
											<svg
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<circle
													cx="10"
													cy="10"
													r="9.5"
													stroke="#CFCFCF"
												/>
											</svg>

											<svg
												className="checker__oval-2"
												viewBox="0 0 10 10"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<circle
													cx="5"
													cy="5"
													r="5"
													fill="#D87D4A"
												/>
											</svg>
										</div>
									</div>
									<span>Cash on Delivery</span>
								</label>
							</div>
						</div>

						<div
							className={`${
								errors?.eMoney ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>e-Money Number</span>

								<div>
									<span>{errors?.eMoney?.message}</span>
								</div>
							</label>
							<input
								{...register('eMoney', {
									required: 'This field is mandatory',
									minLength: {
										value: 9,
										message: 'Min 9 characters',
									},
									maxLength: {
										value: 19,
										message: 'Max 19 characters',
									},
									pattern: {
										value: /^[0-9]+$/,
										message: 'Invalid format',
									},
								})}
								placeholder="238521993"
							/>
						</div>

						<div
							className={`${
								errors?.pin ? 'cart-form__item error' : 'cart-form__item'
							}`}>
							<label>
								<span>e-Money PIN</span>

								<div>
									<span>{errors?.pin?.message}</span>
								</div>
							</label>
							<input
								{...register('pin', {
									required: 'This field is mandatory',
									minLength: {
										value: 4,
										message: 'Min 4 characters',
									},
									maxLength: {
										value: 4,
										message: 'Max 4 characters',
									},
									pattern: {
										value: /^[0-9]+$/,
										message: 'Invalid format',
									},
								})}
								placeholder="6891"
							/>
						</div>
					</div>
				</div>
			</div>

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
					type="submit"
					className="btn btn--orange"
					ref={btn}>
					<span>CONTINUE & PAY</span>
				</button>
				<PaymentApproved
					toggleModal={toggleModal}
					activeModal={activeModal}
					total={total}
					cartArray={cartArray}
					btn={btn}
				/>
			</div>
		</form>
	);
};

export default CartForm;
