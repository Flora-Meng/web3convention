import PageHead from '@/layouts/PageHead';
import DefaultLayout from '@/layouts/DefaultLayout';
import HomeCarousel from '@/components/Pages/Home/HomeCarousel';

type ComponentType = React.FC & { layout: typeof DefaultLayout };

const Homepage: ComponentType = props => {
	return (
		<>
			<PageHead title="Web 3 Convention" />
			<HomeCarousel />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
