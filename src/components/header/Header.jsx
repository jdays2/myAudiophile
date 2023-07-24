import logo from '../../assets/svg/logo.svg';
import cartIcon from '../../assets/svg/cart-icon.svg';
import CartModal from '../cart-modal/CartModal';

import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { moveTop } from '../../utils/moveTop';

const Header = () => {
	const categoryArray = useSelector((state) => state.categorys);

	const [activeModal, setActiveModal] = useState(false);
	const btn = useRef(null);
	const cart = useSelector((state) => state.cart);
	const value = cart.length;

	const cartModalHandler = () => {
		setActiveModal(!activeModal);
	};

	return (
		<header className="header">
			<div className="header__wrapper">
				<Link
					style={{ textDecoration: 'none' }}
					to="/"
					className="main-logo">
					<img
						src={logo}
						alt=""
					/>
				</Link>

				<nav className="header__nav">
					<Link
						onClick={moveTop}
						style={{ textDecoration: 'none' }}
						to="/">
						<span className="nav-link">Home</span>
					</Link>
					{categoryArray.map((category, id) => (
						<Link
							onClick={moveTop}
							style={{ textDecoration: 'none' }}
							to={`/category/${category.title}`}
							key={id}>
							<span className="nav-link">{category.title}</span>
						</Link>
					))}
				</nav>

				<button
					className="header__cart-btn"
					onClick={cartModalHandler}
					ref={btn}>
					<img
						src={cartIcon}
						alt=""
					/>
					{value > 0 && <span className="header__cart-value">{value}</span>}
				</button>

				{activeModal && <CartModal cartModalHandler={cartModalHandler} btn={btn}/>}
			</div>
		</header>
	);
};

export default Header;
