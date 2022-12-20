import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import cover from '@/components/Pages/Stages/CoverTitle/stageCover.json';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const Container = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1600px;
	position: relative;
	top: 50%;
	@media ${devices.miniMobile} {
		transform: translate(0, calc(-50% - 40px));
		width: calc(100vw - 100px);
	}
	@media ${devices.tablet} {
		transform: translate(0, calc(-50% - 30px));
	}
	@media ${devices.laptop} {
		transform: translate(0, calc(-50% - 80px));
		width: calc(100vw - 200px);
	}
	@media ${devices.desktop} {
		transform: translate(0, calc(-50% - 120px));
	}
`;

const CoverSubtitle = styled(Subtitle)`
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

const CoverTitle = styled(Title)`
	white-space: pre-wrap;
	@media ${devices.miniMobile} {
		margin-bottom: 60px;
		font-size: 40px;
	}
	@media ${devices.tablet} {
		margin-bottom: 120px;
		font-size: 60px;
	}
	@media ${devices.laptop} {
		margin-bottom: 80px;
	}
	@media ${devices.largeLaptop} {
		font-size: 70px;
	}
	@media ${devices.desktop} {
		margin-bottom: 100px;
		font-size: 90px;
	}
`;

const CoverDescription = styled(Description)`
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
const StageCoverTitle = () => {
	return (
		<Container>
			<CoverSubtitle isCurrent>{cover.subtitle}</CoverSubtitle>
			<CoverTitle isCurrent>{cover.title}</CoverTitle>
			<CoverDescription isCurrent>{cover.text}</CoverDescription>
		</Container>
	);
};

export default StageCoverTitle;
