import { Status, Wrapper } from '@googlemaps/react-wrapper';
import styled from 'styled-components';

import VenueCoverTitle from '@/components/Pages/Venue/CoverTitle';
import Map from '@/components/Pages/Venue/Map';
import Marker from '@/components/Pages/Venue/Map/Marker';
import VenueIntroCards from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCards';
import PageBanner from '@/components/Shares/PageBanner';
import bannerInfo from '@/components/Shares/PageBanner/venueBannerInfo.json';
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
const render = (status: Status) => {
	return <h1>{status}</h1>;
};

const VenuePage = () => {
	const position = { lat: -33.87483118669751, lng: 151.19950922205194 };
	return (
		<>
			<Cover>
				<Header />
				<VenueCoverTitle />
			</Cover>
			<VenueIntroCards />
			<PageBanner bannerInfo={bannerInfo} />
			<PageGallery imageList={imageList} />
			<Wrapper apiKey="AIzaSyDCKxgat91L8LiFigmKSwlcuO1_IUoBR5g" render={render}>
				<Map center={position} zoom={17}>
					<Marker position={position} clickable={false} />
				</Map>
			</Wrapper>
			<Footer />
		</>
	);
};

export default VenuePage;
