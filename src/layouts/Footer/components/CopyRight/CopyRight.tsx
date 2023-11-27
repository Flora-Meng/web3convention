import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor } = color;
const ContentContainer = styled.section`
	align-items: center;
	background-color: ${primaryColor};
	font-size: 14px;
	padding: 32px 0;
	@media ${devices.largeLaptop} {
		padding: 12px 0;
	}
`;
const ContainerGrid = styled(Grid)`
	margin: 0 auto;
	width: calc(100vw - 75px);
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
`;
const LogoGrid = styled(Grid)`
	align-items: center;
	display: flex;
	justify-content: center;
	@media ${devices.largeLaptop} {
		justify-content: start;
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
	:last-of-type {
		margin-top: 10px;
	}
	@media ${devices.largeLaptop} {
		white-space: nowrap;
		:last-of-type {
			margin-top: 0;
		}
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
	const [isMobile, setIsMobile] = useState<boolean>();
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
				<LogoGrid item {...gridColumn} className="self-center">
					<Logo
						loader={imageLoader}
						unoptimized
						src="/web3-logo.svg"
						alt="logo"
						width={120}
						height={40}
						priority
					/>
				</LogoGrid>
				<CopyrightGrid item {...gridColumn}>
					{isMobile && (
						<>
							<CopyrightText>© 2023 AI+Web3 Convention</CopyrightText>
							<CopyrightText>All Rights Reserved,ACN 668 836 566</CopyrightText>
						</>
					)}
					{!isMobile && (
						<CopyrightText>
							© 2023 AI+Web3 Convention, All Rights Reserved. ACN 668 836 566
						</CopyrightText>
					)}
					<CopyrightText>Terms And Conditions | Anti-harassment Policy</CopyrightText>
				</CopyrightGrid>
				<Grid item {...gridColumn}>
					<EmptyBox />
				</Grid>
			</ContainerGrid>
		</ContentContainer>
	);
};
export default CopyRight;
