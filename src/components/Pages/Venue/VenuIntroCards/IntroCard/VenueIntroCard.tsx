import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import styled from 'styled-components';

import { devices } from '@/styles/variables';

interface IntroCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const CardContainer = styled(Card)`
	@media ${devices.miniMobile} {
		aspect-ratio: 1;
		width: 100%;
	}
	@media ${devices.tablet} {
		aspect-ratio: 3/5;
		width: 28vw;
	}
	@media ${devices.laptop} {
		height: 26vw;
		width: 26vw;
	}
	@media ${devices.desktop} {
		max-width: 500px;
		max-height: 500px;
	}
`;

const CoverContainer = styled(CardMedia)`
	@media ${devices.miniMobile} {
		height: 66%;
	}
	@media ${devices.largeLaptop} {
		height: 76%;
	}
`;
const ContentContainer = styled(CardContent)`
	display: grid;
	position: relative;
	transform: translate(0, -50%);
	@media ${devices.miniMobile} {
		top: 17%;
		margin: 0 2%;
	}
	@media ${devices.mobile} {
		margin: 0 2.5%;
	}
	@media ${devices.largeLaptop} {
		top: 12%;
	}
`;

const Title = styled.text`
	@media ${devices.miniMobile} {
		font-size: 4vw;
		margin-bottom: 1.4vw;
	}
	@media ${devices.mobile} {
		font-size: 25px;
		margin-bottom: 12px;
	}
	@media ${devices.tablet} {
		font-size: 18px;
		margin-bottom: 5px;
	}
	@media ${devices.laptop} {
		font-size: 15px;
		margin-bottom: 5px;
	}
	@media ${devices.largeLaptop} {
		font-size: 18px;
		margin-bottom: 8px;
	}
	@media ${devices.desktop} {
		font-size: 22px;
		margin-bottom: 9px;
	}
`;

const Description = styled.text`
	@media ${devices.miniMobile} {
		font-size: 2.5vw;
	}
	@media ${devices.mobile} {
		font-size: 15px;
	}
	@media ${devices.tablet} {
		font-size: 11px;
	}
	@media ${devices.laptop} {
		font-size: 10px;
	}
	@media ${devices.largeLaptop} {
		font-size: 12px;
	}
	@media ${devices.desktop} {
		font-size: 14px;
	}
`;

const VenueIntroCard: React.FC<IntroCardProps> = props => {
	const { imageSrc, title, description } = props;
	return (
		<CardContainer variant="outlined">
			<CoverContainer image={imageSrc} />
			<ContentContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</ContentContainer>
		</CardContainer>
	);
};

export default VenueIntroCard;
