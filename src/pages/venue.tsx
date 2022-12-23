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
	background-size: cover;
	height: 70vh;
`;

const VenuePage = () => {
	const meta = {
		description:
			'Web3 Convention is crypto’s most iconic event, bringing together  all sides of blockchain, Web3 and the metaverse. Brush shoulders with entrepreneurs, executives, Web3 creators, asset managers, individual investors, NFT collectors, brand and marketing professionals, government officials blockchain developers, cloud computing providers, and more.',
		keywords:
			'Web3Convention, ICC Sydney, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Convention 2023 | July 22-23, 2023 | Venue'
	};
	return (
		<>
			<PageHead meta={meta} />
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
