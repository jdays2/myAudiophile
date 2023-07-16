import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Main from './pages/Main';
import Category from './pages/Category';

import { Route, Routes } from 'react-router';

const App = () => {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route
					path="/"
					element={<Main />}
				/>
				<Route
					path="/category"
					element={<Category />}
				/>
			</Routes>
			<Footer></Footer>
		</>
	);
};

export default App;
