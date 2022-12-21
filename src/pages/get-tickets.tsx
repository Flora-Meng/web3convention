import styled from 'styled-components';

import VenueIntroCards from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCards';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/venueCoverText.json';
import PageParallax from '@/components/Shares/PageParallax';
import PageTicket from '@/components/Shares/PageTicket';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const Cover = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/venuePage/cover.jpeg');
	background-position: center;
	background-size: cover;
	height: 70vh;
`;

const GetTicketsPage = () => {
	return (
		<>
			<Cover>
				<Header />
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<VenueIntroCards />
			<PageTicket />
			<PageParallax />
			<Footer />
		</>
	);
};

export default GetTicketsPage;
