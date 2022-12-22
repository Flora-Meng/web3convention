import styled from 'styled-components';

import intro from './VenueIntroCard/intro.json';
import VenueIntroCard from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCard';
import { devices } from '@/styles/variables';

const Container = styled.div`
	max-width: 1600px;
	position: relative;
	@media ${devices.miniMobile} {
		display: grid;
		row-gap: 20px;
		width: calc(100vw - 100px);
		margin: 30px auto;
	}
	@media ${devices.tablet} {
		display: flex;
		justify-content: space-between;
		width: calc(100vw - 100px);
		margin: 60px auto;
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
		margin: 80px auto;
	}
	@media ${devices.desktop} {
		margin: 100px auto;
	}
`;
const VenueIntroCards: React.FC = () => {
	return (
		<Container>
			{intro.map(cardContent => (
				<VenueIntroCard
					key={cardContent._id}
					imageSrc={cardContent.imageSrc}
					title={cardContent.title}
					description={cardContent.text}
				/>
			))}
		</Container>
	);
};

export default VenueIntroCards;
