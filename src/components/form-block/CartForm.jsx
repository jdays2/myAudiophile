import PaymentApproved from '../payment-approved/PaymentApproved';
import { moveTop } from '../../utils/moveTop';
import { selectTotalAmount } from '../../redux/slices/productsSlice';

import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

const CartForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: 'onTouched' });

	const submitHandler = () => {
		toggleModal();
	};

	const cartArray = useSelector((state) => state.cart);
	const totalPrice = useSelector(selectTotalAmount);

	const [activeModal, setActiveModal] = useState(false);
	const [paymentMethod, setPaymentMethod] = useState(false);

	const btn = useRef(null);
	const paymenth = useRef(null);

	const toggleModal = () => {
		setActiveModal(!activeModal);
	};

	const setMethod = () => {
		const isChecked = paymenth.current.checked;
		if (isChecked) {
			setPaymentMethod(isChecked);
			console.log(paymentMethod);
		} else {
			setPaymentMethod(isChecked);
			console.log(paymentMethod);
		}
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
									},
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
								<label
									for="e-money"
									onClick={setMethod}>
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
									ref={paymenth}
									placeholder="1137 Williams Avenue"
								/>
								<label
									for="cash"
									onClick={setMethod}>
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

						{paymentMethod ? (
							<>
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
							</>
						) : (
							<div className="cart-form__payment-message">
								<span className="cart-form__payment-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
											fill="#D87D4A"
										/>
									</svg>
								</span>
								<p className="cart-form__payment-text">
									The ‘Cash on Delivery’ option enables you to pay in cash when
									our delivery courier arrives at your residence. Just make sure
									your address is correct so that your order will not be
									cancelled.
								</p>
							</div>
						)}
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
