import { Box } from '@mui/material';
import styled from 'styled-components';

import HomeImageList from '../HomeImageList';

import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const Backdrop = styled.div`
	${backdrop};
	font-size: 70px;
	left: -4px;
	@media ${devices.laptop} {
		font-size: 200px;
		left: 100px;
	}
`;

const HomeHighLightsContainer = styled(Box)`
	position: relative;
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 50px 0;
`;
const SectionTitle = styled.h2`
	${sectionTitle};
	margin-bottom: 20px;
	max-width: fit-content;
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
			<Container>
				<Backdrop>Highlights</Backdrop>
				<SectionSubtitle>Brisbane, 18-19 May, 2024</SectionSubtitle>
				<SectionTitle>Convention Highlights</SectionTitle>
				<HomeImageList />
			</Container>
		</HomeHighLightsContainer>
	);
};

export default HomeHighLights;
