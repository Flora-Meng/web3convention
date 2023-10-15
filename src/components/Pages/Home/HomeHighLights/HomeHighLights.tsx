import { Box } from '@mui/material';
import styled from 'styled-components';

import HomeImageList from '../HomeImageList';

import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const Backdrop = styled.div`
	${backdrop};
	font-size: 60px;
	left: -10px;
	top: -50px;
`;

const HomeHighLightsContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	margin: 81px 24px;
	position: relative;
	@media ${devices.laptop} {
		margin: 182px 340px;
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
