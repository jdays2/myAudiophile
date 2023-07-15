import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Seo from './components/seo/Seo';
import Hero from './components/hero/Hero';
import Links from './components/links/Links';

const App = () => {
	return (
		<>
			<Header></Header>
			<Hero></Hero>
			<Links></Links>
			<Seo></Seo>
			<Footer></Footer>
		</>
	);
};

export default App;
