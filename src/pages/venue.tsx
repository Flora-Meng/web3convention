import styled from 'styled-components';

import VenueCoverTitle from '@/components/Pages/Venue/CoverTitle';
import VenueIntroCards from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCards';
import PageBanner from '@/components/Shares/PageBanner';
import bannerInfo from '@/components/Shares/PageBanner/venueBannerInfo.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const Cover = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/venuePage/cover.jpeg');
	background-position: center;
	background-size: cover;
	height: 70vh;
`;
const VenuePage = () => {
	return (
		<>
			<Cover>
				<Header />
				<VenueCoverTitle />
			</Cover>
			<VenueIntroCards />
			<PageBanner bannerInfo={bannerInfo} />
			<Footer />
		</>
	);
};

export default VenuePage;
