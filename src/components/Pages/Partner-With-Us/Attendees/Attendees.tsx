import styled from 'styled-components';

import CounterSlider from '@/components/Shares/CounterSlider';
import {backdrop, sectionSubtitle, sectionTitle} from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';
import {dark} from "@mui/material/styles/createPalette";

const { blackColor, whiteColor } = color;

const HomeCountdownContainer = styled.div`
	background-color: ${whiteColor};
`;

const Content = styled.div`
  max-width: 1200px;
  padding: 140px 24px 100px;
  position: relative;
  @media ${devices.mobile} {
    padding: 140px 0px 100px;
  }
  @media ${devices.largeLaptop} {
    margin: 0 auto;
  }
`;

const TitleContainer = styled.div`
	color: ${blackColor};
	margin-bottom: 60px;
	@media ${devices.laptop} {
		margin-right: 80px;
		margin-bottom: 0;
		max-width: ${`${sizes.largeLaptop}px`};
	}
`;

const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const counterList = [
    {
        name: 'Exhibitors',
        count: 150
    },
    {
        name: 'Onsite Attendees',
        count: 10000
    },
    {
        name: 'Online Attendees',
        count: 200000
    },
    {
        name: 'Speakers',
        count: 200
    },
    {
        name: 'Creators',
        count: 500
    },
    {
        name: 'Venture Capitalists',
        count: 100
    },
    {
        name: 'University Students',
        count: 8000
    },
    {
        name: 'Influencers',
        count: 100
    }
];
const Backdrop = styled.div`
	${backdrop};
    color: ${blackColor};
	left: 9vw;
	@media ${devices.mobile} {
		left: 5vw;
	}
`;

const Attendees: React.FC = () => {
    return (
        <HomeCountdownContainer>
            <Content>
                <TitleContainer>
                    <Subtitle>AI + Web3 Convention 2024</Subtitle>
                    <Title>Who attends AI + Web3 Convention?</Title>
                    <Backdrop>Who</Backdrop>
                </TitleContainer>
                <CounterSlider counterList={counterList} theme = {"light"}/>
            </Content>
        </HomeCountdownContainer>
    );
};

export default Attendees;