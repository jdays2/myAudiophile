import { useSelector } from 'react-redux';
import { moveTop } from '../../utils/moveTop';

import { Link } from 'react-router-dom';

const PriceInfo = () => {
	const cartArray = useSelector((state) => state.cart);

	return (
		<div className="price-info">
			<p className="price-info__title">summary</p>
			<ul className="price-info__list">
				{cartArray.map((item, id) => {
					return (
						<li className="price-info__item" key={id}>
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
					<span>TOTAL</span> <strong>$ 5,396</strong>
				</div>
				<div className="price-info__price">
					<span>SHIPPING</span> <strong>$ 50</strong>
				</div>

				<div className="price-info__price">
					<span>VAT (INCLUDED)</span> <strong>$ 1,079</strong>
				</div>
			</div>

			<div className="price-info__price price-info__price--total">
				<span>GRAND TOTAL</span> <strong>$ 5,446</strong>
			</div>

			<Link
				style={{ textDecoration: 'none' }}
				onClick={moveTop}
				to="/cart"
				className="btn btn--orange">
				<span>CONTINUE & PAY</span>
			</Link>
		</div>
	);
};

export default PriceInfo;
