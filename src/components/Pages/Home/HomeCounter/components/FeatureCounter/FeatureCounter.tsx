import Grid from '@mui/material/Grid';
import Image from 'next/image';
import CountUp from 'react-countup';
import styled from 'styled-components';

import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { whiteColor } = color;

const FeatureCounterContainer = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	@media ${devices.mobile} {
		padding: 0 30px;
	}
	@media ${devices.laptop} {
		max-width: ${`${sizes.tablet + 100}px`};
	}
`;

const ImageContainer = styled.div`
	height: 60px;
	margin-bottom: 10px;
	position: relative;
	width: auto;
	@media ${devices.laptop} {
		height: 80px;
	}
`;

const StyledImage = styled(Image)`
	object-fit: contain;
`;

const Title = styled.h4`
	font-size: 14px;
	margin: 0;
	@media ${devices.laptop} {
		font-size: 16px;
	}
`;

const Counter = styled.div`
	font-size: 18px;
	font-weight: 700;
	@media ${devices.mobile} {
		font-size: 20px;
	}
	@media ${devices.tablet} {
		font-size: 22px;
	}
	@media ${devices.laptop} {
		font-size: 27px;
	}
`;

const featureList = [
	{
		imageSrc: '/images/features/feature-lightbulb.webp',
		title: 'Exhibitors',
		count: 150
	},
	{
		imageSrc: '/images/features/feature-vr.webp',
		title: 'Attendees',
		count: 10000
	},
	{
		imageSrc: '/images/features/feature-applaud.webp',
		title: 'Speakers',
		count: 150
	},
	{
		imageSrc: '/images/features/feature-trophy.webp',
		title: 'Creators',
		count: 500
	},
	{
		imageSrc: '/images/features/feature-graph.webp',
		title: 'Venture Capitalists',
		count: 100
	}
];

const FeatureCounter: React.FC = () => {
	return (
		<FeatureCounterContainer>
			<Grid
				container
				rowSpacing={{
					mobile: 5,
					tablet: 6,
					laptop: 8
				}}
			>
				{featureList.map(feature => (
					<Grid
						item
						miniMobile={6}
						mobile={4}
						tablet={2.4}
						className="text-center"
						key={feature.title}
					>
						<ImageContainer>
							<StyledImage
								loader={imageLoader}
								src={feature.imageSrc}
								alt={feature.title}
								fill
								unoptimized
								loading="lazy"
							/>
						</ImageContainer>
						<Counter>
							<CountUp end={feature.count} duration={1} enableScrollSpy />
							{/* <span>{feature.extra ? ` ${feature.extra}` : '+'}</span> */}
						</Counter>
						<Title>{feature.title}</Title>
					</Grid>
				))}
			</Grid>
		</FeatureCounterContainer>
	);
};

export default FeatureCounter;
