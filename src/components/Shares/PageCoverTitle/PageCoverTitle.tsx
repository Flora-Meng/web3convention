import styled from 'styled-components';

import {
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

interface PageCoverTitleProps {
	coverText: {
		_id: string;
		title: string;
		subtitle: string;
	};
}

const Container = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1600px;
	position: relative;
	top: 50%;
	transform: translate(0, -92%);
	@media ${devices.miniMobile} {
		width: calc(100vw - 100px);
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
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
		font-size: 40px;
	}
	@media ${devices.tablet} {
		font-size: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 70px;
	}
	@media ${devices.desktop} {
		font-size: 90px;
	}
`;

const PageCoverTitle: React.FC<PageCoverTitleProps> = props => {
	const { coverText } = props;
	return (
		<Container>
			<CoverSubtitle isCurrent>{coverText.subtitle}</CoverSubtitle>
			<CoverTitle isCurrent>{coverText.title}</CoverTitle>
		</Container>
	);
};

export default PageCoverTitle;
