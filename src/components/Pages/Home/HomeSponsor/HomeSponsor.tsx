import { Grid } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

import sponsorList from './sponsorList.json';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const HomeSponsorContainer = styled.div`
	padding: 100px 15px;
	position: relative;
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 0 30px 0 50px;
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
	height: 30px;
	object-fit: contain;
	width: auto;
	@media ${devices.mobile} {
		height: 50px;
	}
`;

const Backdrop = styled.div`
	${backdrop}
`;

const HomeSponsor: React.FC = () => {
	return (
		<HomeSponsorContainer>
			<Container>
				<Subtitle>event_testimonials</Subtitle>
				<Title>Expected Partners & Sponsors</Title>
				<Backdrop>Sponsors</Backdrop>
				<Grid container spacing={3}>
					{sponsorList.map(sponsor => (
						<Grid item key={sponsor._id} className="flex justify-center">
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
			</Container>
		</HomeSponsorContainer>
	);
};

export default HomeSponsor;
