import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor } = color;
const ContentContainer = styled.section`
	align-items: center;
	background-color: ${primaryColor};
	font-size: 14px;
	padding: 12px 0;
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
const CopyrightGrid = styled(Grid)`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-width: '600px';
`;
const CopyrightText = styled.p`
	margin: 0 0;
	@media ${devices.largeLaptop} {
		white-space: nowrap;
	}
`;
const gridColumn = {
	mobile: 12,
	tablet: 12,
	laptop: 3
};
const EmptyBox = styled.div`
	width: 120px;
`;
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
				<CopyrightGrid item {...gridColumn}>
					{isMobile ? (
						<>
							<CopyrightText>© 2023 AI+Web3 Convention</CopyrightText>
							<CopyrightText>All Rights Reserved</CopyrightText>
							<CopyrightText>ACN 668 836 566</CopyrightText>
							<CopyrightText>Terms And Conditions</CopyrightText>
							<CopyrightText>Anti-harassment Policy</CopyrightText>
						</>
					) : (
						<>
							<CopyrightText>
								© 2023 AI+Web3 Convention, All Rights Reserved. ACN 668 836 566
							</CopyrightText>
							<CopyrightText>
								Terms And Conditions | Anti-harassment Policy
							</CopyrightText>
						</>
					)}
				</CopyrightGrid>
				<Grid item {...gridColumn}>
					<EmptyBox />
				</Grid>
			</ContainerGrid>
		</ContentContainer>
	);
};
export default CopyRight;
