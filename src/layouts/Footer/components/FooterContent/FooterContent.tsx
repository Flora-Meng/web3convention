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
	@media (${devices.largeLaptop}) {
		max-width: 1440px;
		gap: 130px;
	}
	gap: 50px;
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
	@media (${devices.largeLaptop}) {
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
	font-size: 14px;
	line-height: 1.43;
	text-align: center;
	@media ${devices.miniMobile} {
		margin: 0 18px 6px 0;
	}
	@media ${devices.largerLaptop} {
		margin: 0 24px 24px 0;
	}
`;

const eventLink = '/convention';
// Configuration
const linkConfigList = [
	{
		label: 'Book Tickets',
		path: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
	},
	{
		label: 'Partner with Us',
		path: 'https://w3con.eventsair.com/SponsorshipPortal/Account/Login?ReturnUrl=%2FSponsorshipPortal%2Fweb3convention%2Fsponsorship'
	},
	{
		label: 'Apply to Speak',
		path: '/apply-to-speak'
	},
	{
		label: 'Volunteers',
		path: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
	},
	{
		label: 'Agenda',
		path: 'agenda'
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
			<ContainerGrid container spacing={1}>
				<Grid item mobile={12} tablet={6} laptop={2.5} largeLaptop={2.5}>
					<Title>Get in touch</Title>
					<ContentText>
						Brisbane Convention and Exhibition Centre
						<br />
						South Brisbane QLD 4101
					</ContentText>
					<ContentText>Tel: +61 429 991 399</ContentText>
					<ContentText>Information: info@web3convention.com</ContentText>
					<ContentText>Partnership: business@web3convention.com</ContentText>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={2} largeLaptop={2}>
					<Title>Convention Highlights</Title>
					<div className="flex flex-col">
						<StyledLink href={eventLink}>
							Australian AI + Web3 Charity Dinner
						</StyledLink>
						<StyledLink href={eventLink}>Startup Competition</StyledLink>
						<StyledLink href={eventLink}>Capital Connect</StyledLink>
						<StyledLink href={eventLink}>Cyber Party</StyledLink>
						<StyledLink href={eventLink}>AI / Web3 / FutureTech Hub</StyledLink>
					</div>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={1.2} largeLaptop={1.2}>
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
						{qrCodes.map(qrCode => (
							<QRcodeGridItem item mobile={3} tablet={3} laptop={3} largeLaptop={3}>
								<Link href={qrCode.link} target="_blank">
									<Image
										loader={imageLoader}
										src={qrCode.src}
										alt={qrCode.alt}
										width={86}
										height={86}
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
