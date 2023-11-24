import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor } = color;

const LogoContainer = styled.div`
	width: 20vw;
`;
const CopyRightContainer = styled.section`
	align-items: center;
	background-color: ${primaryColor};
	padding: 8px 0;
`;
const ContentContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
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
	@media ${devices.largeLaptop} {
		white-space: nowrap;
	}
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
		<CopyRightContainer>
			<ContentContainer>
				<div>
					<LogoContainer>
						<Logo
							loader={imageLoader}
							unoptimized
							src="/web3-logo.svg"
							alt="logo"
							width={120}
							height={40}
							priority
						/>
					</LogoContainer>
				</div>
				<div>
					<CopyrightText>
						Copyright © 2023-2024 Web3 Convention, All Rights Reserved. ACN 668 836 566
					</CopyrightText>
				</div>
				<div>
					<CopyrightText>Terms And Conditions | Anti-harassment Policy</CopyrightText>
				</div>
			</ContentContainer>
		</CopyRightContainer>
	);
};

export default CopyRight;
