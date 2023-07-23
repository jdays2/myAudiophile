import logo from '../../assets/svg/logo.svg';
import cartIcon from '../../assets/svg/cart-icon.svg';

import { moveTop } from '../../utils/moveTop';
import CartModal from '../cart-modal/CartModal';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
	const categoryArray = useSelector((state) => state.categorys);

	const [activeModal, setActiveModal] = useState(false);

	const cartModalHandler = () => {
		setActiveModal(!activeModal)
	}

	return (
		<header className="header">
			<div className="header__wrapper">
				{activeModal && <CartModal cartModalHandler={cartModalHandler}/>}
				

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
					{categoryArray.map((category, id) => {
						return (
							<Link
								onClick={moveTop}
								style={{ textDecoration: 'none' }}
								to={`/category/${category.title}`}
								key={id}>
								<span className="nav-link">{category.title}</span>
							</Link>
						);
					})}
				</nav>

				<button className="header__cart-btn" onClick={cartModalHandler}>
					<img
						src={cartIcon}
						alt=""
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
