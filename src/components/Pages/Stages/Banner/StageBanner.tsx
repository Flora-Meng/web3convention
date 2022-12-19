import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import banner from '@/components/Pages/Stages/Banner/stagePageBanner.json';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const BannerContainer = styled.div`
	position: relative;
	top: 50%;
	@media ${devices.miniMobile} {
		transform: translate(0, calc(-50% - 40px));
	}
	@media ${devices.tablet} {
		transform: translate(0, calc(-50% - 30px));
	}
	@media ${devices.laptop} {
		transform: translate(0, calc(-50% - 80px));
	}
	@media ${devices.largeLaptop} {
		transform: translate(0, calc(-50% - 120px));
	}
`;

const TextContainer = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1600px;
	@media ${devices.miniMobile} {
		width: calc(100vw - 100px);
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
`;

const BannerSubtitle = styled(Subtitle)`
	color: ${primaryColor};
	@media ${devices.miniMobile} {
		font-size: 10px;
	}
	@media ${devices.tablet} {
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
	white-space: pre-wrap;
	@media ${devices.miniMobile} {
		margin-bottom: 60px;
		font-size: 40px;
	}
	@media ${devices.tablet} {
		margin-bottom: 120px;
		font-size: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 70px;
	}
	@media ${devices.desktop} {
		font-size: 90px;
	}
`;

const BannerDescription = styled(Description)`
	@media ${devices.miniMobile} {
		font-size: 12px;
	}
	@media ${devices.tablet} {
		max-width: 70%;
		font-size: 15px;
	}
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
			<TextContainer>
				<BannerSubtitle isCurrent>{banner.subtitle}</BannerSubtitle>
				<BannerTitle isCurrent>{banner.title}</BannerTitle>
				<BannerDescription isCurrent>{banner.text}</BannerDescription>
			</TextContainer>
		</BannerContainer>
	);
};

export default StageBanner;
