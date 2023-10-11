import styled from 'styled-components';

import HomeImageList from '../HomeImageList';

import { backdrop } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const Backdrop = styled.div`
	${backdrop};
`;

const HomeHighLightsContainer = styled.div`
	position: relative;
`;

const HomeHighLights = () => {
	return (
		<HomeHighLightsContainer>
			<Backdrop>Highlights</Backdrop>
			<div>
				<HomeImageList />
			</div>
		</HomeHighLightsContainer>
	);
};

export default HomeHighLights;
