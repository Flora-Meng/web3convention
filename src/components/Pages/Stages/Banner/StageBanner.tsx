import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import banner from '@/components/Pages/Stages/Banner/banner.json';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const BannerContainer = styled.div`
	position: relative;
	top: 50%;
	@media ${devices.laptop} {
		transform: translate(0, calc(-50% - 100px));
	}
	@media ${devices.largeLaptop} {
		transform: translate(0, calc(-50% - 120px));
	}
`;

const TextSection = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1600px;
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
`;

const BannerSubtitle = styled(Subtitle)`
	color: ${primaryColor};
	@media ${devices.laptop} {
		font-size: 13px;
	}
	@media ${devices.largeLaptop} {
		font-size: 16px;
	}
	@media ${devices.desktop} {
		font-size: 18px;
	}
`;

const BannerTitle = styled(Title)`
	margin-bottom: 120px;
	white-space: pre-wrap;
	@media ${devices.laptop} {
		font-size: 50px;
	}
	@media ${devices.largeLaptop} {
		font-size: 70px;
	}
	@media ${devices.desktop} {
		font-size: 90px;
	}
`;

const BannerDescription = styled(Description)`
	max-width: 70%;
	@media ${devices.laptop} {
		font-size: 12px;
	}
	@media ${devices.largeLaptop} {
		font-size: 15px;
	}
	@media ${devices.desktop} {
		font-size: 18px;
	}
`;
const StageBanner = () => {
	return (
		<BannerContainer>
			<TextSection>
				<BannerSubtitle isCurrent>{banner.subtitle}</BannerSubtitle>
				<BannerTitle isCurrent>{banner.title}</BannerTitle>
				<BannerDescription isCurrent>{banner.text}</BannerDescription>
			</TextSection>
		</BannerContainer>
	);
};

export default StageBanner;
