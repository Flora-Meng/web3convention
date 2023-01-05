import HomeCarousel from '@/components/Pages/Home/HomeCarousel';
import HomeCountdown from '@/components/Pages/Home/HomeCountdown';
import HomeCounter from '@/components/Pages/Home/HomeCounter';
import HomeEvent from '@/components/Pages/Home/HomeEvent';
// import HomeGallery from '@/components/Pages/Home/HomeGallery';
import HomeImageList from '@/components/Pages/Home/HomeImageList';
import HomePosts from '@/components/Pages/Home/HomePosts';
import HomeSponsor from '@/components/Pages/Home/HomeSponsor';
import HomeSubscription from '@/components/Pages/Home/HomeSubscription';
import HomeTeam from '@/components/Pages/Home/HomeTeam';
import PageBanner from '@/components/Shares/PageBanner';
import bannerInfo from '@/components/Shares/PageBanner/homeBannerInfo.json';
import PageParallax from '@/components/Shares/PageParallax';
import PageTicket from '@/components/Shares/PageTicket';
// import PageGallery from '@/components/Shares/PageGallery';
// import imageList from '@/components/Shares/PageGallery/homeImageList.json';
// import HomeTestimonial from '@/components/Pages/Home/HomeTestimonial';
import DefaultLayout from '@/layouts/DefaultLayout';
import PageHead from '@/layouts/PageHead';

type ComponentType = React.FC & { layout: typeof DefaultLayout };

const Homepage: ComponentType = () => {
	const meta = {
		description:
			"Web3 Convention is an event to explore the future of Web 2.0 and Web 3.0 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, ICC Sydney, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Convention 2023 | July 22-23, 2023'
	};
	return (
		<>
			<PageHead title="Web3 Convention 2023 | July 22-23, 2023" meta={meta} />
			<HomeCarousel />
			<HomeCountdown />
			<HomeImageList />
			<PageBanner bannerInfo={bannerInfo} />
			<HomeEvent />
			<HomeCounter />
			<HomePosts />
			<HomeTeam />
			<HomeSubscription />
			{/* <PageGallery imageList={imageList} /> */}
			{/* <HomeTestimonial /> */}
			<HomeSponsor />
			<PageParallax />
			<PageTicket />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
