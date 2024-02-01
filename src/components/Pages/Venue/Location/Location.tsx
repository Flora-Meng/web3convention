import React from 'react'
import LocationInformation from './locationInformation.json';
import styled from 'styled-components';
import { sectionSubtitle } from '@/styles/mixin'
import { color, devices } from '@/styles/variables';
import VenueMap from '@/components/Pages/Venue/Map';
import ThemeButton from '@/components/Shares/ThemeButton';

const { darkPrimaryColor, whiteColor, blackColor } = color;

const SectionWrapperDiv= styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  padding:0 30px;
	@media ${devices.largeLaptop} {
    padding:0 270px;
	}
`
const Container = styled.div`
  padding-top: 40px;
  height: 500px;
  width: 100%;
  position: relative;
  /* border: 1px white solid; */
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
  max-height: 80%;
  aspect-ratio: 1 / 1;
  background-color: ${whiteColor};
`

const DecTitle = styled.p`
	${sectionSubtitle}
	letter-spacing: 1px;
`;

const Title = styled.p`
  margin: 0 0 20px;
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
  margin: 10px 0 0;
  font-size: 14px;
  color: ${whiteColor};
  @media ${devices.largeLaptop} {
    font-size: 16px;
	}
`

const BoldText = styled.p`
  margin-top: 280px;
  opacity: 0.11;
  font-size: 230px;
  font-weight: bold;
  color: ${color.whiteColor};
  @media ${devices.tablet} {
    font-size: 150px;
	}
`

const Location = () => {

  const partnerButtonConfig = {
    text: 'MAP DETAILS',
    url: 'https://www.google.com/maps?q=' + LocationInformation.Location.address
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
            <Content>{LocationInformation.Location.venue}</Content>
            <Subtitle>Address:</Subtitle>
            <Content>{LocationInformation.Location.address}</Content>
            <ThemeButton href={partnerButtonConfig.url}>
							{partnerButtonConfig.text}
						</ThemeButton>
          </div>
          <MapDiv>
            <VenueMap position={LocationInformation.Location.position}/>
          </MapDiv>
        </Layer2>
      </Container>
    </SectionWrapperDiv>
  )
}

export default Location;
