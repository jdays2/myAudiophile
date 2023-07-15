import logo from '../../assets/svg/logo.svg';
import cartIcon from '../../assets/svg/cart-icon.svg';

import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<Link
					to="/"
					className="main-logo">
					<img
						src={logo}
						alt=""
					/>
				</Link>

				<nav className="header__nav">
					<Link to="/">
						<span className="nav-link">Home</span>
					</Link>
					<Link to="/">
						<span className="nav-link">HEADPHONES</span>
					</Link>
					<Link to="/">
						<span className="nav-link">SPEAKERS</span>
					</Link>
					<Link to="/">
						<span className="nav-link">EARPHONES</span>
					</Link>
				</nav>

				<span className="header__cart-btn">
					<img
						src={cartIcon}
						alt=""
					/>
				</span>
			</div>
		</header>
	);
};

export default Header;
