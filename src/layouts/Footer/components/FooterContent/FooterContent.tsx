import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SubscriptionModal from '@/components/Shares/SubscriptionModal';
import useSubscription from '@/hooks/userSubscription';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, primaryColor, whiteColor } = color;

// Styles

const ContentContainer = styled(Box)`
	background-color: ${blackColor};
	color: ${whiteColor};
	padding: 50px 0;
`;

const ContainerGrid = styled(Grid)`
	width: calc(100vw - 48px);
	@media (${devices.largeLaptop}) {
		max-width: 1440px;
	}
`;

const Title = styled.h5`
	font-size: 18px;
	line-height: 40px;
	margin: 0;
	margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
	font-size: 14px;
	line-height: 1.5;
	margin-bottom: 12px;
	&:hover {
		color: ${primaryColor};
		cursor: pointer;
	}
`;

const Logo = styled(Image)`
	margin-bottom: 20px;
`;

const ContentText = styled.p`
	font-size: 14px;
	line-height: 1.5;
	margin-top: 0;
`;

const QRcodeGridItem = styled(Grid)`
	margin: 0 24px 24px 0;
	@media (${devices.miniMobile}) {
		margin: 0 18px 6px 0;
	}
`;

// Configuration

const linkConfigList = [
	{
		label: 'Brisbane Convention and Exhibition Centre (BCEC)',
		path: 'https://www.bcec.com.au/'
	},
	{
		label: 'Apply to speak at Web3 Convention',
		path: '/comingSoon'
	},
	{
		label: 'Volunteer at Web3 Convention',
		path: '/comingSoon'
	},
	{
		label: 'Anti-harassment policy',
		path: '/comingSoon'
	}
];

const FooterContent = () => {
	const [emailInput, setEmailInput] = useState<string>('');
	const [inputMessage, setInputMessage] = useState<string>('');
	const { message, openModal, setOpenModal } = useSubscription(emailInput, setEmailInput);

	useEffect(() => {
		if (inputMessage) setInputMessage('');
	}, [emailInput]);

	const handleClose = () => {
		setOpenModal(false);
	};

	return (
		<ContentContainer sx={{ flexGrow: 1 }} className="flex justify-center">
			<ContainerGrid container spacing={3}>
				<Grid item mobile={12} tablet={6} laptop={3} largeLaptop={3}>
					<Logo
						loader={imageLoader}
						unoptimized
						src="/web3-logo-white.svg"
						alt="logo"
						width={120}
						height={40}
						priority
					/>
					<ContentText>
						Brisbane Convention and Exhibition Centre
						<br />
						South Brisbane QLD 4101
					</ContentText>
					<ContentText>+61 429 991 399</ContentText>
					<ContentText>business@web3convention.com</ContentText>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={3} largeLaptop={3}>
					<Title>Useful Links</Title>
					<div className="flex flex-col">
						{linkConfigList.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={3} largeLaptop={3}>
					<Title>Scan to connect</Title>
					<Grid container>
						{[1, 2, 3, 4, 5, 6].map(i => (
							<QRcodeGridItem item mobile={3} tablet={3} laptop={3} largeLaptop={3}>
								<Image
									loader={imageLoader}
									src={`/images/qr-code/${i}.png`}
									alt={`Image ${i}`}
									width={86}
									height={86}
								/>
							</QRcodeGridItem>
						))}
					</Grid>
				</Grid>
			</ContainerGrid>
			<SubscriptionModal message={message} open={openModal} handleClose={handleClose} />
		</ContentContainer>
	);
};

export default FooterContent;
