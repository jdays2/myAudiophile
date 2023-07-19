import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import ProductDetail from './pages/ProductDetail';
import Main from './pages/Main';
import Category from './pages/Category';

import { Route, Routes } from 'react-router';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Main />}
				/>
				<Route
					path="/category/:title"
					element={<Category />}
				/>
				<Route
					path="/card-detail/:cardId"
					element={<ProductDetail />}
				/>
			</Routes>
			<Footer />
		</>
	);
};

export default App;
