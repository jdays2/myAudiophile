import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Main from './pages/Main';
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
			</Routes>
			<Footer></Footer>
		</>
	);
};

export default App;
