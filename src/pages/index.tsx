import PageHead from '@/layouts/PageHead';
import DefaultLayout from '@/layouts/DefaultLayout';
import HomeCarousel from '@/components/Pages/Home/HomeCarousel';
import HomeImageList from '@/components/Pages/Home/HomeImageList';

type ComponentType = React.FC & { layout: typeof DefaultLayout };

const Homepage: ComponentType = props => {
	return (
		<>
			<PageHead title="Web 3 Convention" />
			<HomeCarousel />
			<HomeImageList />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
