import { useState } from 'react';

const CartForm = () => {
	const [inputState, setInputState] = useState({
		name: '',
		email: '',
		tel: '',
		adress: '',
		zip: '',
		city: '',
		country: '',
		money: '',
	});

	const inputsHandler = (e) => {
		const { name, value } = e.target;
		setInputState({
			...inputState,
			[name]: value,
		});
	};
	
	return (
		<form className="cart-form__main">
			<p className="cart-form__title">CHECKOUT</p>
			<div className="cart-form__section">
				<p className="cart-form__section-title">Billing Details</p>
				<div className="cart-form__list">
					<div className="cart-form__item">
						<label>Name</label>
						<input
							name="name"
							onChange={inputsHandler}
							value={inputState.name}
							type="text"
							placeholder="Alexei Ward"
						/>
					</div>

					<div className="cart-form__item">
						<label>Email Address</label>
						<input
							name="email"
							onChange={inputsHandler}
							value={inputState.email}
							type="text"
							placeholder="alexei@mail.com"
						/>
					</div>

					<div className="cart-form__item">
						<label>Phone Number</label>
						<input
							name="tel"
							onChange={inputsHandler}
							value={inputState.tel}
							type="text"
							placeholder="+1 202-555-0136"
						/>
					</div>
				</div>
			</div>

			<div className="cart-form__section">
				<p className="cart-form__section-title">shipping info</p>
				<div className="cart-form__list">
					<div className="cart-form__item cart-form__item--large">
						<label>Address</label>
						<input
							name="adress"
							onChange={inputsHandler}
							value={inputState.adress}
							type="text"
							placeholder="1137 Williams Avenue"
						/>
					</div>

					<div className="cart-form__item">
						<label>ZIP Code</label>
						<input
							name="zip"
							onChange={inputsHandler}
							value={inputState.zip}
							type="text"
							placeholder="10001"
						/>
					</div>

					<div className="cart-form__item">
						<label>City</label>
						<input
							name="city"
							onChange={inputsHandler}
							value={inputState.city}
							type="text"
							placeholder="New York"
						/>
					</div>

					<div className="cart-form__item">
						<label>Country</label>
						<input
							name="country"
							onChange={inputsHandler}
							value={inputState.country}
							type="text"
							placeholder="United States"
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

					<div className="cart-form__item">
						<label>e-Money Number</label>
						<input
							name="money"
							onChange={inputsHandler}
							value={inputState.money}
							type="text"
							placeholder="238521993"
						/>
					</div>

					<div className="cart-form__item">
						<label>e-Money PIN</label>
						<input
							type="text"
							placeholder="6891"
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CartForm;
