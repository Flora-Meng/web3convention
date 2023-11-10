import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';
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
		width: 28vw;
		height: 46.7vw;
	}
	@media ${devices.laptop} {
		height: 26vw;
		width: 26vw;
	}
	@media ${devices.desktop} {
		max-width: 480px;
		max-height: 480px;
	}
`;

const CoverContainer = styled(CardMedia)`
	height: 60%;
`;
const ContentContainer = styled(CardContent)`
	display: grid;
	position: relative;
	text-align: center;
	transform: translate(0, -50%);
	@media ${devices.miniMobile} {
		top: 11%;
		margin: 0 2.5%;
		height: 23.5%;
	}
	@media ${devices.mobile} {
		top: 12%;
	}
	@media ${devices.laptop} {
		top: 2.1vw;
	}
	@media ${devices.largeLaptop} {
		top: 11%;
	}
	@media ${devices.desktop} {
		top: 12%;
	}
`;

const Title = styled.h2`
	@media ${devices.miniMobile} {
		font-size: 4vw;
		margin-bottom: 3vw;
	}
	@media ${devices.mobile} {
		font-size: 3.5vw;
		margin-bottom: 2vw;
	}
	@media ${devices.tablet} {
		font-size: 1.7vw;
		margin-bottom: 1.3vw;
	}
	@media ${devices.laptop} {
		font-size: 1.2vw;
		margin-bottom: 1.1vw;
	}
	@media ${devices.largeLaptop} {
		font-size: 1.2vw;
		margin-bottom: 1vw;
	}
	@media ${devices.desktop} {
		font-size: 22px;
		margin-bottom: 16px;
	}
`;

const Description = styled.text`
	@media ${devices.miniMobile} {
		font-size: 3.2vw;
	}
	@media ${devices.mobile} {
		font-size: 15px;
	}
	@media ${devices.tablet} {
		font-size: 1.2vw;
	}
	@media ${devices.laptop} {
		font-size: 0.9vw;
	}
	@media ${devices.largeLaptop} {
	}
	@media ${devices.desktop} {
		font-size: 16px;
	}
`;

export const StyledLink = styled(Link)`
	display: inline-block;
	font-weight: 700;
	margin: 16px 0;
	text-transform: uppercase;

	@media ${devices.miniMobile} {
		font-size: 3vw;
	}
	@media ${devices.tablet} {
		font-size: 1.5vw;
	}
	@media ${devices.laptop} {
		font-size: 0.9vw;
	}
	@media ${devices.largeLaptop} {
		font-size: 15px;
	}
	@media ${devices.desktop} {
		font-size: 16px;
	}

	span {
		${navBarTitleDecoration('calc(100% + 4px)', '50%', '-2px')};
	}

	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
`;
const TicketIntroCard: React.FC<IntroCardProps> = props => {
	const { imageSrc, title, description } = props;
	return (
		<CardContainer variant="outlined">
			<CoverContainer image={imageSrc} />
			<ContentContainer>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<StyledLink href="https://w3con.eventsair.com/web3convention/registration/Site/Register">
					<span>BOOK TICKETS</span>
				</StyledLink>
			</ContentContainer>
		</CardContainer>
	);
};

export default TicketIntroCard;
