import logo from '../../assets/svg/logo.svg';
import cartIcon from '../../assets/svg/cart-icon.svg';

import { moveTop } from '../../utils/moveTop';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const categoryArray = useSelector((state) => state.categorys);
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
					<Link onClick={moveTop}
						style={{ textDecoration: 'none' }}
						to="/">
						<span className="nav-link">Home</span>
					</Link>
					{categoryArray.map((category, id) => {
						return (
							<Link onClick={moveTop}
								style={{ textDecoration: 'none' }}
								to={`/category/${category.title}`}
								key={id}>
								<span className="nav-link">{category.title}</span>
							</Link>
						);
					})}
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
