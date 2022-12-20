import styled from 'styled-components';

import HomeBanner from '@/components/Pages/Home/HomeBanner';
import VenueBanner from '@/components/Pages/Venue/Banner';
import VenueIntroCards from '@/components/Pages/Venue/VenuIntro/VenueIntro';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const BannerBackground = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/venuePage/ICC.jpeg');
	background-position: center;
	background-size: cover;
	height: 70vh;
`;
const VenuePage = () => {
	return (
		<>
			<BannerBackground>
				<Header />
				<VenueBanner />
			</BannerBackground>
			<VenueIntroCards />
			<HomeBanner />
			<Footer />
		</>
	);
};

export default VenuePage;
