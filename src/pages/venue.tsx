import styled from 'styled-components';

import VenueMap from '@/components/Pages/Venue/Map';
import VenueIntroCards from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCards';
import PageBanner from '@/components/Shares/PageBanner';
import bannerInfo from '@/components/Shares/PageBanner/venueBannerInfo.json';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/venueCoverText.json';
import PageGallery from '@/components/Shares/PageGallery';
import imageList from '@/components/Shares/PageGallery/venueImageList.json';
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
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<VenueIntroCards />
			<PageBanner bannerInfo={bannerInfo} />
			<PageGallery imageList={imageList} />
			<VenueMap />
			<Footer />
		</>
	);
};

export default VenuePage;
