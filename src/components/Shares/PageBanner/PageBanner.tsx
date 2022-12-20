import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { animation, animationFillMode, sectionSubtitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { whiteColor } = color;

interface PageBannerProps {
	bannerInfo: {
		title: string;
		subtitle: string;
		imageSrc: string;
		description: string;
	};
}

interface LeftGridProps {
	imageSrc: string;
}

const GridItem = styled.div<LeftGridProps>`
	background-image: url(${({ imageSrc }) => imageSrc});
	background-position: 50% 50%;
	background-size: cover;
	height: 745px;
`;

const LeftGrid = styled(GridItem)`
	width: 0;
	@media ${devices.tablet} {
		width: 50vw;
	}
`;

const RightGrid = styled(GridItem)`
	color: ${whiteColor};
	padding-left: 20px;
	width: 100vw;
	@media ${devices.tablet} {
		padding-left: 50px;
		width: 50vw;
	}
`;

const InfoContainer = styled.div`
	height: inherit;
	margin-left: 30px;
	margin-right: 50px;
	@media ${devices.tablet} {
		width: 300px;
		margin-left: 60px;
		margin-right: 0;
	}
	@media ${devices.laptop} {
		margin-left: 80px;
		width: 400px;
	}
	@media ${devices.desktop} {
		margin-left: 120px;
	}
`;

const Title = styled.h2`
	font-size: 42px;
	font-weight: 700;
	line-height: 1.1;
	margin: 0;
	margin-bottom: 24px;
	opacity: 0;
	${animation('fade-in-opacity-transform-to-up', '0.5s', 'ease', '0.5s', '1')};
	${animationFillMode()};
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	font-size: 12px;
`;

const Description = styled.p`
	font-size: 15px;
	line-height: 1.8;
	margin: 0;
	margin-bottom: 40px;
	opacity: 0;
	padding-right: 20px;
	${animation('fade-in-opacity-transform-to-up', '0.5s', 'ease', '0.7s', '1')};
	${animationFillMode()};
`;

const PageBanner: React.FC<PageBannerProps> = props => {
	const { bannerInfo } = props;
	return (
		<div className="flex">
			<LeftGrid imageSrc={bannerInfo.imageSrc} />
			<RightGrid imageSrc="/images/demo/main-home-banner-bg.jpg">
				<InfoContainer className="flex flex-col justify-center">
					<Subtitle>{bannerInfo.subtitle}</Subtitle>
					<Title>{bannerInfo.title}</Title>
					<Description>{bannerInfo.description}</Description>
					<ThemeButton href="/comingSoon">registration</ThemeButton>
				</InfoContainer>
			</RightGrid>
		</div>
	);
};

export default PageBanner;
