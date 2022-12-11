import HomeBanner from '@/components/Pages/Home/HomeBanner';
import HomeCarousel from '@/components/Pages/Home/HomeCarousel';
import HomeGallery from '@/components/Pages/Home/HomeGallery';
import HomeImageList from '@/components/Pages/Home/HomeImageList';
import HomeParallax from '@/components/Pages/Home/HomeParallax';
import HomePosts from '@/components/Pages/Home/HomePosts';
import HomeSubscription from '@/components/Pages/Home/HomeSubscription';
import HomeTeam from '@/components/Pages/Home/HomeTeam';
import HomeTestimonial from '@/components/Pages/Home/HomeTestimonial';
import DefaultLayout from '@/layouts/DefaultLayout';
import PageHead from '@/layouts/PageHead';

type ComponentType = React.FC & { layout: typeof DefaultLayout };

const Homepage: ComponentType = () => {
	return (
		<>
			<PageHead title="Web3 Convention 2023 | July 22-22, 2023" />
			<HomeCarousel />
			<HomeImageList />
			<HomeBanner />
			<HomePosts />
			<HomeTeam />
			<HomeSubscription />
			<HomeGallery />
			<HomeTestimonial />
			<HomeParallax />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
