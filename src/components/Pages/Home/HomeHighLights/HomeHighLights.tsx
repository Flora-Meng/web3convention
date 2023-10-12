import { Box } from '@mui/material';
import styled from 'styled-components';

import HomeImageList from '../HomeImageList';

import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const Backdrop = styled.div`
	${backdrop};
	font-size: 13vw;
	top: 0;
`;

const HomeHighLightsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	margin: 20vw 10vw;
	position: relative;
	@media ${devices.laptop} {
		margin: 11vw 15vw;
	}
`;
const SectionTitle = styled.h2`
	${sectionTitle};
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
