import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { carouselHeight, color, devices } from '@/styles/variables';

const { whiteColor } = color;

interface ICarouseItem {
	title: string;
	subtitle: string;
	description: string;
	imageSrc: string;
}

interface CarouseItemProps {
	carouselInfo: ICarouseItem;
}

interface CarouseItemContainerProps {
	imageSrc: string;
}

const CarouseItemContainer = styled.div<CarouseItemContainerProps>`
	background-image: url(${({ imageSrc }) => imageSrc});
	background-position: 50% 50%;
	background-size: cover;
	color: ${whiteColor};
	height: ${carouselHeight.tablet};
	@media ${devices.laptop} {
		height: ${carouselHeight.laptop};
	}
`;

const InfoContainer = styled.div`
	margin-left: 30px;
	@media ${devices.tablet} {
		width: 585px;
		margin-left: 60px;
	}
	@media ${devices.laptop} {
		margin-left: 120px;
	}
	@media ${devices.desktop} {
		margin-left: 240px;
	}
`;

const Title = styled.h2`
	font-size: 54px;
	font-weight: 700;
	line-height: 1.1;
	margin: 0;
	margin-bottom: 16px;
	@media ${devices.tablet} {
		font-size: 90px;
	}
`;

const Subtitle = styled.p`
	font-size: 20px;
	font-style: italic;
	margin: 0;
	margin-bottom: 8px;
	@media ${devices.tablet} {
		font-size: 22px;
		margin-bottom: 0;
	}
`;

const Description = styled.p`
	font-size: 18px;
	line-height: 1.8;
	margin: 0;
	margin-bottom: 40px;
	padding-right: 20px;
	@media ${devices.tablet} {
		line-height: 1.5;
	}
`;

const CarouseItem: React.FC<CarouseItemProps> = ({
	carouselInfo: { title, subtitle, description, imageSrc }
}) => {
	return (
		<CarouseItemContainer imageSrc={imageSrc} className="flex flex-col justify-center">
			<InfoContainer>
				<Subtitle>{subtitle}</Subtitle>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<ThemeButton href="/comingSoon">registration</ThemeButton>
			</InfoContainer>
		</CarouseItemContainer>
	);
};

export default CarouseItem;
