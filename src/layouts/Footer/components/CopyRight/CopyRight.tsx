import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, primaryColor, whiteColor } = color;

const ContentContainer = styled.section`
	align-items: center;
	background-color: ${primaryColor};
	padding: 25px 0;
`;

const ContainerGrid = styled(Grid)`
	margin: 0 auto;
	width: calc(100vw - 75px);
	@media (${devices.largeLaptop}) {
		max-width: 1440px;
	}
`;

const Logo = styled(Image)`
	margin-bottom: 16px;

	@media ${devices.tablet} {
		margin-bottom: 0;
	}
`;

const CopyrightText = styled.p`
	white-space: nowrap;
`;

const FollowLabel = styled.p`
	flex-shrink: 0;
	margin-bottom: 24px;
	margin-right: 10px;
`;

const StyledIconButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${blackColor};
	cursor: pointer;
	&:hover {
		color: ${whiteColor};
	}
`;

const gridColumn = {
	mobile: 12,
	tablet: 12,
	laptop: 4
};

const CopyRight: React.FC = () => {
	const isMobileWidth = typeof window !== 'undefined' && window.innerWidth <= sizes.tablet;
	const [isMobile, setIsMobile] = useState(isMobileWidth);
	useEffect(() => {
		const resizeHandler = () => {
			setIsMobile(window.innerWidth <= sizes.tablet);
		};
		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	}, []);

	return (
		<ContentContainer>
			<ContainerGrid container className="justify-between">
				<Grid item {...gridColumn} className="self-center">
					<Logo
						loader={imageLoader}
						unoptimized
						src="/web3-logo.svg"
						alt="logo"
						width={120}
						height={40}
						priority
					/>
				</Grid>
				<Grid item {...gridColumn}>
					<CopyrightText>
						© 2022-2023 Web3 Convention, All Rights Reserved. ACN 668 836 566
					</CopyrightText>
				</Grid>
				<Grid
					item
					{...gridColumn}
					className={`flex items-center justify-${
						isMobile ? 'between' : 'end'
					} self-center`}
				>
					<FollowLabel>Follow us</FollowLabel>
					<StyledIconButton>
						<Link href="https://twitter.com/Web3Convention" target="_blank">
							<TwitterIcon />
						</Link>
					</StyledIconButton>
					<StyledIconButton>
						<Link
							href="https://www.linkedin.com/company/web3convention"
							target="_blank"
						>
							<LinkedinIcon />
						</Link>
					</StyledIconButton>
					<StyledIconButton>
						<Link href="https://www.instagram.com/web3convention" target="_blank">
							<InstagramIcon />
						</Link>
					</StyledIconButton>
					<StyledIconButton>
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
};

export default CopyRight;
