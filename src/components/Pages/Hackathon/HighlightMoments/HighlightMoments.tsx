import Grid from '@mui/material/Grid';
import styled from 'styled-components';

import highlightMomentsList from './highlightMomentsList.json';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

const ContentContainer = styled.div`
	margin: auto;
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 50px 30px 50px;
	position: relative;
	@media ${devices.mobile} {
		padding: 50px 100px 50px;
	}
`;

const Backdrop = styled.div`
	${backdrop}
	margin: -30px 20px 376px 130px;
`;

const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;
const Subtitle = styled.p`
	${sectionSubtitle};
`;

const ImageListContainer = styled(Grid)``;

const HighlightImage = styled.img`
	height: 400px;
	object-fit: cover;
	width: 304px;
	@media ${devices.mobile} {
		width: 100%;
	}
`;

const HighlightMoments: React.FC = () => {
	return (
		<ContentContainer>
			<Subtitle>Web3 Hackathon 2023</Subtitle>
			<Title>Highlight Moments</Title>
			<Backdrop>Highlights</Backdrop>
			<ImageListContainer container justifyContent="space-between" spacing={1}>
				{highlightMomentsList.map((item, idx) => {
					const laptopWidth = [3, 3, 3, 3];
					return (
						<Grid
							item
							mobile={12}
							tablet={6}
							laptop={laptopWidth[idx % 4]}
							largeLaptop={laptopWidth[idx % 4]}
							key={item._id}
						>
							<HighlightImage src={item.imageSrc} alt={item.label} />
						</Grid>
					);
				})}
			</ImageListContainer>
		</ContentContainer>
	);
};

export default HighlightMoments;
