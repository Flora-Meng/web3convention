import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { disableMUIButtonHoverCss } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, primaryColor, whiteColor } = color;

const ContentContainer = styled.section`
	align-items: center;
	background-color: ${primaryColor};
	flex-direction: column;
	font-size: 14px;
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

const gridColumn = {
	mobile: 12,
	tablet: 12,
	laptop: 3
};

const CopyRight: React.FC = () => (
	<ContentContainer className="flex">
		<ContainerGrid container className="justify-between">
			<Grid item {...gridColumn}>
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
			<Grid item {...gridColumn}>
				<p>© 2022-2023 Web3 Convention, All Rights Reserved</p>
			</Grid>
			<Grid item {...gridColumn} className="flex items-center">
				<FollowLabel>Follow us</FollowLabel>
				<StyledIconButton aria-label="add an alarm">
					<Link href="https://twitter.com/Web3Convention" target="_blank">
						<TwitterIcon />
					</Link>
				</StyledIconButton>
				<StyledIconButton aria-label="add an alarm">
					<Link href="https://www.linkedin.com/company/web3convention" target="_blank">
						<LinkedinIcon />
					</Link>
				</StyledIconButton>
				<StyledIconButton aria-label="add an alarm">
					<Link href="https://www.instagram.com/web3convention" target="_blank">
						<InstagramIcon />
					</Link>
				</StyledIconButton>
				<StyledIconButton aria-label="add an alarm">
					<Link
						href="https://www.youtube.com/channel/UCTJEa6rxybFHmmlx6YAf1iA"
						target="_blank"
					>
						<YouTubeIcon />
					</Link>
				</StyledIconButton>
			</Grid>
		</ContainerGrid>
	</ContentContainer>
);

export default CopyRight;
