import HomeBanner from '@/components/Pages/Home/HomeBanner';
import HomeCarousel from '@/components/Pages/Home/HomeCarousel';
import HomeImageList from '@/components/Pages/Home/HomeImageList';
import HomePosts from '@/components/Pages/Home/HomePosts';
import HomeTeam from '@/components/Pages/Home/HomeTeam';
import DefaultLayout from '@/layouts/DefaultLayout';
import PageHead from '@/layouts/PageHead';

type ComponentType = React.FC & { layout: typeof DefaultLayout };

const Homepage: ComponentType = () => {
	return (
		<>
			<PageHead title="Web 3 Convention" />
			<HomeCarousel />
			<HomeImageList />
			<HomeBanner />
			<HomePosts />
			<HomeTeam />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
