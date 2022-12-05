import Image from 'next/image';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styled from 'styled-components';

import imageLoader from '@/utils/loader';
import { color, devices } from '@/styles/variables';
import { disableMUIButtonHoverCss } from '@/styles/mixin';

const { blackColor, primaryColor, whiteColor } = color;

const ContentContainer = styled.section`
	background-color: ${primaryColor};
	font-size: 14px;
	flex-direction: column;
	align-items: center;
	padding: 30px 0;
	@media ${devices.mobile} {
		max-width: unset;
		padding: 30px 50px;
	}
	@media ${devices.tablet} {
		height: 100px;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 100px;
	}
`;

const ContainerGrid = styled(Grid)`
	max-width: 300px;
	@media ${devices.mobile} {
		max-width: unset;
	}
`;

const Logo = styled(Image)`
	margin-bottom: 16px;

	@media ${devices.tablet} {
		margin-bottom: 0;
	}
`;

const FollowLabel = styled.p`
	margin-right: 10px;
`;

const StyledIconButton = styled(IconButton)`
	color: ${blackColor};
	${disableMUIButtonHoverCss};
	&:hover {
		color: ${whiteColor};
	}
`;

const CopyRight = () => (
	<ContentContainer className="flex">
		<ContainerGrid container className="justify-between">
			<Grid item xs={12} sm={12} md={3} lg={3}>
				<Logo
					loader={imageLoader}
					unoptimized
					src="/web3-logo.svg"
					alt="logo"
					width={140}
					height={40}
					priority
				/>
			</Grid>
			<Grid item xs={12} sm={12} md={3} lg={3}>
				<p>© 2022 Web 3 Convention, All Rights Reserved</p>
			</Grid>
			<Grid item xs={12} sm={12} md={3} lg={3} className="flex items-center">
				<FollowLabel>Follow us</FollowLabel>
				<StyledIconButton aria-label="add an alarm">
					<TwitterIcon />
				</StyledIconButton>
				<StyledIconButton aria-label="add an alarm">
					<FacebookIcon />
				</StyledIconButton>
				<StyledIconButton aria-label="add an alarm">
					<YouTubeIcon />
				</StyledIconButton>
			</Grid>
		</ContainerGrid>
	</ContentContainer>
);

export default CopyRight;
