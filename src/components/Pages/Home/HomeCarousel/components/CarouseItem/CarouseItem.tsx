import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { animation, animationFillMode, tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor } = color;

interface ICarouseItem {
	_id: string;
	title: string;
	subtitle: string;
	description: string;
	imageSrc: string;
}

interface CarouseItemProps {
	carouselInfo: ICarouseItem;
	isCurrent: boolean;
}

interface CarouseItemContainerProps {
	imageSrc: string;
}

interface TextProps {
	isCurrent: boolean;
}

const CarouseItemContainer = styled.div<CarouseItemContainerProps>`
	background-image: url(${({ imageSrc }) => imageSrc});
	background-position: 50% 50%;
	background-size: cover;
	color: ${whiteColor};
	height: 70vh;
`;

const InfoContainer = styled.div`
	margin-left: 30px;
	text-align: left;
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

export const Title = styled.h2<TextProps>`
	font-size: 54px;
	font-weight: 700;
	line-height: 1.1;
	letter-spacing: 1px;
	font-family: Arial;
	margin: 0;
	margin-bottom: 16px;
	// opacity: 0;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '0.7s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};
	// @media ${devices.tablet} {
	// 	font-size: 90px;
	// 	margin-bottom: 16px;
	// }
`;

export const Subtitle = styled.p<TextProps>`
	color: #52f6c6;
	font-family: Arial;
	font-size: 18px;
	font-style: italic;
	letter-spacing: 1px;
	margin: 0;
	margin-bottom: 8px;
	opacity: 0;
	text-shadow: 0 0 10px ${blackColor};
	${tagDecoration};
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '0.5s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};

	@media ${devices.tablet} {
		font-size: 16px;
		letter-spacing: 0.89px;
		margin-bottom: 0;
	}
`;

export const Description = styled.p<TextProps>`
	font-size: 18px;
	line-height: 1.8;
	margin: 0;
	margin-bottom: 40px;
	opacity: 0;
	padding-right: 20px;
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '0.9s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};
	@media ${devices.tablet} {
		line-height: 1.5;
	}
`;

const ButtonContainer = styled.div<TextProps>`
	border-radius: 30px;
	opacity: 0;
	${({ isCurrent }) =>
		isCurrent
			? animation('fade-in-opacity-transform-to-left', '1s', 'ease', '1.1s', '1')
			: null};
	${({ isCurrent }) => (isCurrent ? animationFillMode() : null)};
`;

const CarouseItem: React.FC<CarouseItemProps> = ({
	carouselInfo: { title, subtitle, description, imageSrc },
	isCurrent
}) => {
	return (
		<CarouseItemContainer imageSrc={imageSrc} className="flex flex-col justify-center">
			<InfoContainer>
				<Subtitle isCurrent={isCurrent}>{subtitle}</Subtitle>
				<Title isCurrent={isCurrent}>{title}</Title>
				<Description isCurrent={isCurrent}>{description}</Description>
				<ButtonContainer isCurrent={isCurrent}>
					<ThemeButton href="https://www.eventbrite.com.au/e/web3-convention-tickets-491154535437">
						registration
					</ThemeButton>
				</ButtonContainer>
			</InfoContainer>
		</CarouseItemContainer>
	);
};

export default CarouseItem;
