import React from 'react';
import styled from 'styled-components';

import venueInfo from '../venueInfo.json';

import VenueMap from '@/components/Pages/Venue/Map';
import ThemeButton from '@/components/Shares/ThemeButton';
import { sectionSubtitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { darkPrimaryColor, whiteColor, blackColor } = color;

const SectionWrapperDiv = styled.div`
	background-color: ${blackColor};
	display: flex;
	justify-content: center;
	padding: 0 30px;
	@media ${devices.largeLaptop} {
		padding: 0 250px;
	}
`;

const Container = styled.div`
	height: 560px;
	padding-top: 50px;
	position: relative;
	width: 100%;
`;

const Layer1 = styled.div`
	height: 100%;
	position: absolute;
	width: 100%;
`;

const Layer2 = styled.div`
	display: flex;
	font-family: Arial;
	height: 100%;
	justify-content: space-between;
	position: absolute;
	width: 100%;
`;

const MapDiv = styled.div`
	aspect-ratio: 1 / 1;
	background-color: ${whiteColor};
	height: 80%;
`;

const DecTitle = styled.p`
	${sectionSubtitle}
	letter-spacing: 1px;
`;

const Title = styled.p`
	color: ${whiteColor};
	font-size: 35px;
	font-weight: bold;
	margin: 0 0 60px;
	@media ${devices.largeLaptop} {
		font-size: 40px;
	}
`;

const Subtitle = styled.p`
	color: ${darkPrimaryColor};
	font-size: 16px;
	font-weight: bold;
	margin: 30px 0 0;
	@media ${devices.largeLaptop} {
		font-size: 18px;
	}
`;

const Content = styled.p`
	color: ${whiteColor};
	font-size: 14px;
	margin: 6px 0 0;
	@media ${devices.largeLaptop} {
		font-size: 16px;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 80px;
`;

const BoldText = styled.p`
	color: ${color.whiteColor};
	font-size: 150px;
	font-weight: bold;
	margin-top: 300px;
	opacity: 0.11;
	@media ${devices.largeLaptop} {
		font-size: 230px;
	}
`;

const Location = () => {
	const partnerButtonConfig = {
		text: 'MAP DETAILS',
		url: `https://www.google.com/maps?q=${venueInfo.address}`
	};

	return (
		<SectionWrapperDiv>
			<Container>
				<Layer1>
					<BoldText>LOCATION</BoldText>
				</Layer1>
				<Layer2>
					<div>
						<DecTitle>Location</DecTitle>
						<Title>Location</Title>
						<Subtitle>Venue:</Subtitle>
						<Content>{venueInfo.venue}</Content>
						<Subtitle>Address:</Subtitle>
						<Content>{venueInfo.address}</Content>
						<ButtonContainer>
							<ThemeButton href={partnerButtonConfig.url}>
								{partnerButtonConfig.text}
							</ThemeButton>
						</ButtonContainer>
					</div>
					<MapDiv>
						<VenueMap position={venueInfo.position} />
					</MapDiv>
				</Layer2>
			</Container>
		</SectionWrapperDiv>
	);
};

export default Location;
