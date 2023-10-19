import styled from 'styled-components';

import BrisBaneCity from '@/components/Pages/Venue/BrisbaneCity';
import GoldCoastCity from '@/components/Pages/Venue/GoldCoastCity';
import VenueMap from '@/components/Pages/Venue/Map';
import VenueGallery from '@/components/Pages/Venue/VenueGallery';
import VenueIntroCards from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCards';
import PageBanner from '@/components/Shares/PageBanner';
import bannerInfo from '@/components/Shares/PageBanner/venueBannerInfo.json';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/venueCoverText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/demo/venuePage/coverMobile.jpg');
	background-position: center;
	background-size: cover;
	height: 478px;
	@media ${devices.mobile} {
		background-image: url('/images/demo/venuePage/newCover.jpg');
		height: 360px;
		background-size: auto;
	}
`;

const VenuePage = () => {
	const meta = {
		description:
			"Web3 Convention is an event to explore the future of Web 2.0 and Web 3.0 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, Brisbane Convention and Exhibition Centre (BCEC), Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
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
			<VenueGallery />
			<BrisBaneCity />
			<GoldCoastCity />
			<VenueMap />
			<Footer />
		</>
	);
};

export default VenuePage;
