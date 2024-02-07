import React from 'react'
// import LocationInformation from './locationInformation.json';
import { venueInfo } from '../venueInfo';
import styled from 'styled-components';
import { sectionSubtitle } from '@/styles/mixin'
import { color, devices } from '@/styles/variables';
import VenueMap from '@/components/Pages/Venue/Map';
import ThemeButton from '@/components/Shares/ThemeButton';

const { darkPrimaryColor, whiteColor, blackColor } = color;

const SectionWrapperDiv= styled.div`
  display: flex;
  justify-content: center;
  padding:0 30px;
  background-color: ${blackColor};
	@media ${devices.largeLaptop} {
    padding:0 250px;
	}
`
const Container = styled.div`
  padding-top: 50px;
  height: 560px;
  width: 100%;
  position: relative;
`
const Layer1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Layer2 = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  font-family: Arial;
`

const MapDiv = styled.div`
  height: 80%;
  aspect-ratio: 1 / 1;
  background-color: ${whiteColor};
`

const DecTitle = styled.p`
	${sectionSubtitle}
	letter-spacing: 1px;
`;

const Title = styled.p`
  margin: 0 0 60px;
  font-size: 35px;
  font-weight: bold;
  color: ${whiteColor};
  @media ${devices.largeLaptop} {
    font-size: 40px;
	}
`;

const Subtitle = styled.p`
  margin: 30px 0 0;
  font-size: 16px;
  font-weight: bold;
  color: ${darkPrimaryColor};
  @media ${devices.largeLaptop} {
    font-size: 18px;
	}
`

const Content = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  color: ${whiteColor};
  @media ${devices.largeLaptop} {
    font-size: 16px;
	}
`

const ButtonContainer = styled.div`
  margin-top: 80px;
`

const BoldText = styled.p`
  margin-top: 300px;
  opacity: 0.11;
  font-size: 150px;
  font-weight: bold;
  color: ${color.whiteColor};
  @media ${devices.largeLaptop} {
    font-size: 230px;
	}
`

const Location = () => {
  const partnerButtonConfig = {
    text: 'MAP DETAILS',
    url: 'https://www.google.com/maps?q=' + venueInfo.address
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
            <VenueMap position={venueInfo.position}/>
          </MapDiv>
        </Layer2>
      </Container>
    </SectionWrapperDiv>
  )
}

export default Location;
