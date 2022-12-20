import styled from 'styled-components';

import intro from './IntroCard/intro.json';
import VenueIntroCard from '@/components/Pages/Venue/VenuIntroCards/IntroCard';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 120px auto;
	position: relative;
	width: calc(100vw - 200px);
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
