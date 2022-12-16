import styled from 'styled-components';

import banner from '@/components/Pages/Stages/Banner/banner.json';
import { color } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const BannerContainer = styled.div`
	background-color: ${blackColor};
`;

const TextSection = styled.div`
	margin: auto;
	max-width: 1600px;
	padding: 30px 0;
`;

const Title = styled.h1`
	color: ${whiteColor};
	font-family: 'Montserrat', sans-serif;
	font-weight: 800;
	margin-bottom: 50px;
`;

const Text = styled.h3`
	color: ${whiteColor};
	font-family: 'Neue Haas Grotesk', sans-serif;
`;
const StageBanner = () => {
	return (
		<BannerContainer>
			<TextSection>
				<Title>{banner.title}</Title>
				<Text>{banner.text}</Text>
			</TextSection>
		</BannerContainer>
	);
};

export default StageBanner;
