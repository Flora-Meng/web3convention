import HomeCarousel from '@/components/Pages/Home/HomeCarousel';
import HomeCountdown from '@/components/Pages/Home/HomeCountdown';
import HomeCounter from '@/components/Pages/Home/HomeCounter';
import HomeEvent from '@/components/Pages/Home/HomeEvent';
import HomeHighLights from '@/components/Pages/Home/HomeHighLights/HomeHighLights';
import HomeJudgeTeam from '@/components/Pages/Home/HomeJudgeTeam';
// import HomeGallery from '@/components/Pages/Home/HomeGallery';
import HomePosts from '@/components/Pages/Home/HomePosts';
import HomeSponsor from '@/components/Pages/Home/HomeSponsor';
// import HomeSubscription from '@/components/Pages/Home/HomeSubscription';
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
	const buttonConfig = {
		text: 'BOOK TICKETS',
		url: 'https://w3con.eventsair.com/web3convention/registration/Site/Register',
		extra: 'Interested in partnering? business@web3convention.com'
	};
	return (
		<>
			<PageHead title="AI + Web3 Convention 2024" />
			<HomeCarousel />
			<HomeCountdown />
			<HomeHighLights />
			<PageBanner bannerInfo={bannerInfo} buttonConfig={buttonConfig} />
			<HomeEvent />
			<HomeJudgeTeam />
			<PageTicket />
			<HomeCounter />
			{/* <HomeSubscription /> */}
			{/* <PageGallery imageList={imageList} /> */}
			{/* <HomeTestimonial /> */}
			<HomeSponsor />
			<PageParallax />
			<HomePosts />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
