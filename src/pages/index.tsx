import HomeBanner from '@/components/Pages/Home/HomeBanner';
import HomeCarousel from '@/components/Pages/Home/HomeCarousel';
import HomeCountdown from '@/components/Pages/Home/HomeCounter';
// import HomeGallery from '@/components/Pages/Home/HomeGallery';
import HomeImageList from '@/components/Pages/Home/HomeImageList';
import HomeParallax from '@/components/Pages/Home/HomeParallax';
import HomePosts from '@/components/Pages/Home/HomePosts';
import HomeSponsor from '@/components/Pages/Home/HomeSponsor';
import HomeSubscription from '@/components/Pages/Home/HomeSubscription';
import HomeTeam from '@/components/Pages/Home/HomeTeam';
// import HomeTestimonial from '@/components/Pages/Home/HomeTestimonial';
import DefaultLayout from '@/layouts/DefaultLayout';
import PageHead from '@/layouts/PageHead';

type ComponentType = React.FC & { layout: typeof DefaultLayout };

const Homepage: ComponentType = () => {
	const meta = {
		description:
			'Web3 Convention is crypto’s most iconic event, bringing together  all sides of blockchain, Web3 and the metaverse. Brush shoulders with entrepreneurs, executives, Web3 creators, asset managers, individual investors, NFT collectors, brand and marketing professionals, government officials blockchain developers, cloud computing providers, and more.',
		keywords:
			'Web3Convention, ICC Sydney, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Convention 2023 | July 22-22, 2023'
	};
	return (
		<>
			<PageHead title="Web3 Convention 2023 | July 22-22, 2023" meta={meta} />
			<HomeCarousel />
			<HomeCountdown />
			<HomeImageList />
			<HomeBanner />
			<HomePosts />
			<HomeTeam />
			<HomeSubscription />
			{/* <HomeGallery /> */}
			{/* <HomeTestimonial /> */}
			<HomeSponsor />
			<HomeParallax />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
