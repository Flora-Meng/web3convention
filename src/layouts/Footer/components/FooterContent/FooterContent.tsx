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
	align-items: center;
	background-color: ${blackColor};
	color: ${whiteColor};
	display: flex;
	flex-direction: column;
	padding: 50px 0;
`;

const ContainerGrid = styled(Grid)`
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
	justify-content: space-between;
	width: calc(100vw - 48px);
`;

const Title = styled.h5`
	font-size: 16px;
	line-height: 1.25;
	margin: 0;
	margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
	font-size: 14px;
	line-height: 1.43;
	margin-bottom: 12px;
	&:hover {
		color: ${primaryColor};
		cursor: pointer;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	justify-content: start;
	@media ${devices.largeLaptop} {
		max-width: 1440px;
	}
	width: calc(100vw - 48px);
`;
const Logo = styled(Image)`
	margin: 0 0 40px 10px;
`;
const ContentText = styled.p`
	font-size: 14px;
	line-height: 1.43;
	margin-top: 0;
`;

const QRcodeGridItem = styled(Grid)`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	line-height: 1.43;
`;

// Configuration
const eventsConfig = [
	{
		label: 'Charity Dinner',
		path: '/convention'
	},
	{
		label: 'Startup Competition',
		path: 'https://w3con.eventsair.com/web3convention/startupcomp'
	},
	{
		label: 'Capital Connect',
		path: '/convention'
	},
	{
		label: 'Cyber Party',
		path: '/convention'
	},
	{
		label: 'Side Events',
		path: 'convention'
	}
];
const partnersConfig = [
	{
		label: '2024 Partners',
		path: '/comingSoon'
	},
	{
		label: 'Previous Partners',
		path: '/previous-partner'
	},
	{
		label: 'Sponsor Partners',
		path: '/comingSoon'
	},
	{
		label: 'Community Partners',
		path: '/comingSoon'
	},
	{
		label: 'Media Partners',
		path: '/comingSoon'
	}
];
const linkConfigList = [
	{
		label: 'Book Tickets',
		path: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
	},
	{
		label: 'Partner with Us',
		path: '/partners'
	},
	{
		label: 'Agenda',
		path: '/agenda'
	},
	{
		label: 'Apply to Speak',
		path: 'https://w3con.eventsair.com/web3convention/ats/Site/Register'
	},
	{
		label: 'Volunteers',
		path: 'https://w3con.eventsair.com/web3convention/atv'
	}
];
const qrCodes = [
	{
		_id: 'eventbrite',
		src: '/images/qr-code/eventbrite.webp',
		alt: 'Eventbrite',
		link: 'https://web3convention.eventbrite.com/'
	},
	{
		_id: 'instagram',
		src: '/images/qr-code/instagram.webp',
		alt: 'Instagram',
		link: 'https://www.instagram.com/web3convention/'
	},
	{
		_id: 'linkedin',
		src: '/images/qr-code/linkedin.webp',
		alt: 'Linkedin',
		link: 'https://www.linkedin.com/company/web3convention/'
	},
	{
		_id: 'X',
		src: '/images/qr-code/x.webp',
		alt: 'X',
		link: 'https://twitter.com/Web3Convention'
	},
	{
		_id: 'youtube',
		src: '/images/qr-code/youtube.webp',
		alt: 'Youtube',
		link: 'https://www.youtube.com/channel/UCTJEa6rxybFHmmlx6YAf1iA'
	},
	{
		_id: 'facebook',
		src: '/images/qr-code/facebook.webp',
		alt: 'Facebook',
		link: 'https://www.facebook.com/profile.php?id=100088603939068&mibextid=LQQJ4d'
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
			<LogoContainer>
				<Logo
					loader={imageLoader}
					unoptimized
					src="/web3-logo-white.svg"
					alt="logo"
					width={150}
					height={50}
					priority
				/>
			</LogoContainer>
			<ContainerGrid
				container
				spacing={{
					mobile: 3,
					largeLaptop: 0
				}}
			>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={2.8}>
					<Title>Get in touch</Title>
					<div className="flex flex-col">
						<StyledLink href="/comingSoon">About Us</StyledLink>
						<StyledLink href="/contact-us">Contact Us</StyledLink>
					</div>
					<ContentText>Information: info@web3convention.com</ContentText>
					<ContentText>Partnership: business@web3convention.com</ContentText>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={1.5}>
					<Title>Our Events</Title>
					<div className="flex flex-col">
						{eventsConfig.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={1.5}>
					<Title>Partners</Title>
					<div className="flex flex-col">
						{partnersConfig.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={6} largeLaptop={1.5}>
					<Title>Useful Links</Title>
					<div className="flex flex-col">
						{linkConfigList.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={4} largeLaptop={2.4}>
					<Grid container spacing={3}>
						{qrCodes.map(qrCode => (
							<QRcodeGridItem
								item
								mobile={4}
								tablet={4}
								laptop={4}
								largeLaptop={4}
								key={qrCode._id}
							>
								<Link href={qrCode.link} target="_blank">
									<Image
										loader={imageLoader}
										src={qrCode.src}
										alt={qrCode.alt}
										width={74}
										height={74}
										unoptimized
									/>
								</Link>
								{qrCode.alt}
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
