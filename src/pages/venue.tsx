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
import PageHead from '@/layouts/PageHead';

const Cover = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/venuePage/cover.jpeg');
    background-position: center;
    background-size: contain;
	height: 30vh;
`;

const VenuePage = () => {
	const meta = {
		description:
			"Web3 Convention is an event to explore the future of Web 2.0 and Web 3.0 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, Melbourne Convention and Exhibition Centre (MCEC), Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Convention 2024 | Venue'
	};
	const buttonConfig = {
		text: 'REGISTRATION',
		url: 'https://www.eventbrite.com.au/e/web3-convention-tickets-491154535437',
		extra: 'Interested in partnering? business@web3convention.com'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<VenueIntroCards />
			<PageBanner bannerInfo={bannerInfo} buttonConfig={buttonConfig} />
			<PageGallery imageList={imageList} />
			<VenueMap />
			<Footer />
		</>
	);
};

export default VenuePage;
