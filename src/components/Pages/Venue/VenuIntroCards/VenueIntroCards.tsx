import styled from 'styled-components';

import intro from './VenueIntroCard/intro.json';
import VenueIntroCard from '@/components/Pages/Venue/VenuIntroCards/VenueIntroCard';
import { color, devices } from '@/styles/variables';

const { blackColor } = color;

const OuterContainer = styled.div`
	background-color: ${blackColor};
	padding: 40px 0px 145px 0px;
	@media ${devices.mobile} {
		padding: 90px 0px 164px 0px;
	}
`;

const Container = styled.div`
	margin: 0px auto;
	max-width: 1200px;
	position: relative;
	@media ${devices.miniMobile} {
		display: grid;
		row-gap: 20px;
		width: calc(100vw - 48px);
	}
	@media ${devices.tablet} {
		display: flex;
		justify-content: space-between;
		width: calc(100vw - 100px);
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
`;
const VenueIntroCards: React.FC = () => {
	return (
		<OuterContainer>
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
		</OuterContainer>
	);
};

export default VenueIntroCards;
