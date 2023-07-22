const CartForm = () => {
	return (
		<form className="cart-form__main">
			<p className="cart-form__title">CHECKOUT</p>
			<div className="cart-form__section">
				<p className="cart-form__section-title">Billing Details</p>
				<div className="cart-form__list">
					<div className="cart-form__item">
						<label>Name</label>
						<input
							type="text"
							placeholder="Alexei Ward"
						/>
					</div>

					<div className="cart-form__item">
						<label>Email Address</label>
						<input
							type="text"
							placeholder="alexei@mail.com"
						/>
					</div>

					<div className="cart-form__item">
						<label>Phone Number</label>
						<input
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
							type="text"
							placeholder="1137 Williams Avenue"
						/>
					</div>

					<div className="cart-form__item">
						<label>ZIP Code</label>
						<input
							type="text"
							placeholder="10001"
						/>
					</div>

					<div className="cart-form__item">
						<label>City</label>
						<input
							type="text"
							placeholder="New York"
						/>
					</div>

					<div className="cart-form__item">
						<label>Country</label>
						<input
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
								name="cash-method"
								type="radio"
								placeholder="1137 Williams Avenue"
							/>
							<label for='e-money'>
								<span>e-Money</span>
							</label>
							<input
								id="cash"
								name="cash-method"
								type="radio"
								placeholder="1137 Williams Avenue"
							/>
							<label for='cash'>
								<span>Cash on Delivery</span>
							</label>
						</div>
					</div>

					<div className="cart-form__item">
						<label>e-Money Number</label>
						<input
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
