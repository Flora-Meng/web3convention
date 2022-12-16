import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import banner from '@/components/Pages/Stages/Banner/banner.json';
import { color } from '@/styles/variables';

const { whiteColor } = color;

const BannerContainer = styled.div`
	height: 850px;
`;

const TextSection = styled.div`
	color: ${whiteColor};
	height: 300px;
	margin: auto;
	max-width: 1600px;
	padding: 200px 0;
`;

const BannerTitle = styled(Title)`
	margin-bottom: 150px;
`;

const BannerDescription = styled(Description)`
	font-size: 23px;
	max-width: 1200px;
`;
const StageBanner = () => {
	return (
		<BannerContainer>
			<TextSection>
				<Subtitle isCurrent>{banner.subtitle}</Subtitle>
				<BannerTitle isCurrent>{banner.title}</BannerTitle>
				<BannerDescription isCurrent>{banner.text}</BannerDescription>
			</TextSection>
		</BannerContainer>
	);
};

export default StageBanner;
