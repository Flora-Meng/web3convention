import { Grid } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

import sponsorList from './sponsorList.json';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const HomeSponsorContainer = styled.div`
	background-color: ${blackColor};
	color: ${whiteColor};
	padding: 100px 0;
	@media ${devices.laptop} {
		padding: 130px 24% 130px 14.7%;
	}
`;

const TitleContainer = styled.div`
	padding: 0 30px 0 50px;
	@media ${devices.tablet} {
		padding-left: 4vw;
	}
	@media ${devices.laptop} {
		padding-left: 1.4vw;
	}
	@media ${devices.largeLaptop} {
		padding-left: 2vw;
	}
`;

const Title = styled.h2`
	${sectionTitle};
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const ImageContainer = styled(Link)`
	cursor: pointer;
	display: block;
	position: relative;
	img:last-child {
		transition: opacity 0.1s ease-in-out 0.1s;
		-moz-transition: opacity 0.1s ease-in-out 0.1s;
		-webkit-transition: opacity 0.1s ease-in-out 0.1s;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
	}
	&:hover img:last-child {
		opacity: 1;
	}
`;

const StyledImage = styled.img`
	height: 60px;
	margin-bottom: 30px;
	object-fit: contain;
	width: auto;
`;

const HomeSponsor: React.FC = () => {
	return (
		<HomeSponsorContainer>
			<TitleContainer>
				<Subtitle>event_testimonials</Subtitle>
				<Title>Expected Partners & Sponsors</Title>
			</TitleContainer>
			<Grid container>
				{sponsorList.map(sponsor => (
					<Grid
						item
						key={sponsor._id}
						mobile={12}
						tablet={4}
						laptop={3}
						largeLaptop={2}
						className="flex justify-center"
					>
						<ImageContainer href="/#">
							<StyledImage src={sponsor.logoSrc} alt={`sponsor_${sponsor._id}`} />
							<StyledImage
								src={sponsor.logoSrcHighlight || sponsor.logoSrc}
								alt={`sponsor_${sponsor._id}_highLight`}
							/>
						</ImageContainer>
					</Grid>
				))}
			</Grid>
		</HomeSponsorContainer>
	);
};

export default HomeSponsor;
