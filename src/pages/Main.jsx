import Seo from '../components/seo/Seo';
import Hero from '../components/hero/Hero';
import Links from '../components/links/Links';
import Advisable from '../components/advisable/Advisable';

const Main = () => {
	return (
		<>
			<Hero></Hero>
			<Links></Links>
			<Advisable></Advisable>
			<Seo></Seo>
		</>
	);
};

export default Main;
