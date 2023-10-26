import { Box } from '@mui/material';
import styled from 'styled-components';

import HomeImageList from '../HomeImageList';

import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const Backdrop = styled.div`
	${backdrop};
	font-size: 70px;
	left: -4px;
	top: -95px;
	@media ${devices.laptop} {
		font-size: 230px;
		top: -25px;
		left: 100px;
	}
`;

const HomeHighLightsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	margin: 120px auto;
	max-width: 320px;
	position: relative;
	@media ${devices.laptop} {
		max-width: 1440px;
	}
`;
const SectionTitle = styled.h2`
	${sectionTitle};
	margin-bottom: 20px;
	@media ${devices.laptop} {
		margin-bottom: 64px;
	}
`;

const SectionSubtitle = styled.p`
	${sectionSubtitle};
`;

const HomeHighLights = () => {
	return (
		<HomeHighLightsContainer>
			<Backdrop>Highlights</Backdrop>
			<SectionSubtitle>the_festival</SectionSubtitle>
			<SectionTitle>Web3 Convention Highlights</SectionTitle>
			<HomeImageList />
		</HomeHighLightsContainer>
	);
};

export default HomeHighLights;
