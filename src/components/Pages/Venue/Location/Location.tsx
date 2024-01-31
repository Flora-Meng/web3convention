import React from 'react'
import LocationInformation from './locationInformation.json';
import styled from 'styled-components';
import { sectionSubtitle } from '@/styles/mixin'
import { color, devices } from '@/styles/variables';
const { darkPrimaryColor } = color;

const SectionWrapperDiv= styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  padding:0 20px;
	@media ${devices.largeLaptop} {
    padding:0 240px;
	}
`
const Container = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  border: 1px white solid;
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
`

const MapDiv = styled.div`
  width: 520px;
  max-width: 50%;
  background-color: #fff;
`

const DecTitle = styled.p`
	${sectionSubtitle}
	letter-spacing: 1px;
`;

const Title = styled.p`
  font-family: Arial;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

const Subtitle = styled.p`
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  color: ${darkPrimaryColor};
`

const Content = styled.p`
  font-family: Arial;
  font-size: 16px;
  color: #fff;
`
const Button = styled.button`
  padding: 19px 45px;
  border-radius: 30px;
  border: none;
  background-color: ${darkPrimaryColor};
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  color: #000;
`

const BoldText = styled.p`
  margin-top: 280px;
  opacity: 0.11;
  font-size: 230px;
  font-family: Arial;
  font-weight: bold;
  color: ${color.whiteColor};
  @media ${devices.tablet} {
    font-size: 150px;
	}
`

const Location = () => {
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
            <Button>MAP DETAILS</Button>
          </div>
          <MapDiv></MapDiv>
        </Layer2>
      </Container>
    </SectionWrapperDiv>
  )
}

export default Location;
