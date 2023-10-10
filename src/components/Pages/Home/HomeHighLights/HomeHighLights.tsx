import styled from 'styled-components';

import HomeImageList from '../HomeImageList';

import { devices } from '@/styles/variables';

const Backdrop = styled.div`
	font-size: 23vw;
	font-weight: 700;
	left: 50%;
	line-height: 1.15em;
	opacity: 0.2;
	&::after {
		-ms-transform: scale(1.5);
		-webkit-transform: scale(1.5);
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAMAAABFaP0WAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjYGRgYGQEAAAOAATa5WfvAAAAAElFTkSuQmCC);
		background-size: 2px 2px;
		content: '';
		display: block;
		height: 100%;
		left: 500;
		position: absolute;
		top: 0;
		transform: scale(1.5);
		width: 100%;
		z-index: 0;
	}
	@media ${devices.tablet} {
		left: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 320px;
	}
	@media ${devices.mobile} {
		font-size: 70px;
	}
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
