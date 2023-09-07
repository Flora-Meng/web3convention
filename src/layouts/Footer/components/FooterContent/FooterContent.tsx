import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import instagramImage02 from '@/assets/images/demo//instagram-image-02.jpg';
import instagramImage03 from '@/assets/images/demo//instagram-image-03.jpg';
import instagramImage04 from '@/assets/images/demo//instagram-image-04.jpg';
import instagramImage05 from '@/assets/images/demo//instagram-image-05.jpg';
import instagramImage06 from '@/assets/images/demo//instagram-image-06.jpg';
import instagramImage01 from '@/assets/images/demo/instagram-image-01.jpg';
import SubscriptionModal from '@/components/Shares/SubscriptionModal';
import useSubscription from '@/hooks/userSubscription';
import { animationHoverImage, animationHoverImageParent, tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';
import { isEmail } from '@/utils/validator';

const { blackColor, primaryColor, warningColor, whiteColor } = color;

// Styles

const ContentContainer = styled(Box)`
	background-color: ${blackColor};
	color: ${whiteColor};
	padding: 50px 0;
	@media ${devices.mobile} {
		padding: 50px;
	}
	@media ${devices.laptop} {
		padding: 100px;
	}
`;

const ContainerGrid = styled(Grid)`
	max-width: 300px;
	@media ${devices.mobile} {
		max-width: unset;
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

const ImageListContainer = styled(Grid)`
	@media ${devices.largeLaptop} {
		max-width: 270px;
	}
`;

const ImageItem = styled(Link)`
	${animationHoverImageParent()};
	@media ${devices.tablet} {
		width: 82px;
	}
`;

const StyledImage = styled(Image)`
	${animationHoverImage()};
`;

const ContentText = styled.p`
	font-size: 14px;
	line-height: 1.5;
	margin-top: 0;
`;

const StyledInput = styled(Input)`
	border-bottom: 2px solid ${primaryColor};
	color: ${whiteColor};
	&:after {
		display: none;
	}
`;

const StyledInputStartAdornment = styled(InputAdornment)`
	p {
		color: ${whiteColor};
	}
`;

const StyledSubmitButton = styled.button`
	-moz-transition: color 0.5s;
	-webkit-transition: color 0.5s;
	background-color: transparent;
	border: none;
	color: ${whiteColor};
	cursor: pointer;
	padding: 0 4px;
	transition: color 0.5s;
	&:hover {
		color: ${primaryColor};
	}
	span {
		text-transform: uppercase;
		${tagDecoration};
	}
`;

const EmailHelperText = styled.p`
	color: ${warningColor};
	margin: 0;
	position: absolute;
	top: 100%;
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

const itemData = [
	{
		img: instagramImage01,
		title: 'instagram-image-01'
	},
	{
		img: instagramImage02,
		title: 'instagram-image-02'
	},
	{
		img: instagramImage03,
		title: 'instagram-image-03'
	},
	{
		img: instagramImage04,
		title: 'instagram-image-04'
	},
	{
		img: instagramImage05,
		title: 'instagram-image-05'
	},
	{
		img: instagramImage06,
		title: 'instagram-image-06'
	}
];

const FooterContent = () => {
	const [emailInput, setEmailInput] = useState<string>('');
	const [inputMessage, setInputMessage] = useState<string>('');
	const { message, openModal, setOpenModal, submitEmail } = useSubscription(
		emailInput,
		setEmailInput
	);

	useEffect(() => {
		if (inputMessage) setInputMessage('');
	}, [emailInput]);

	const handleSubmitEmail = () => {
		if (!isEmail(emailInput)) {
			setInputMessage('Email is invalid.');
		} else {
			submitEmail();
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter') {
			handleSubmitEmail();
		}
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	return (
		<ContentContainer sx={{ flexGrow: 1 }} className="flex justify-center">
			<ContainerGrid container spacing={4}>
				<Grid item mobile={12} tablet={6} laptop={3} largeLaptop={3}>
					<Logo
						loader={imageLoader}
						unoptimized
						src="/web3-logo-white.svg"
						alt="logo"
						width={140}
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
					<Title>Instagram</Title>
					<ImageListContainer container spacing={1}>
						{itemData.map(item => (
							<Grid
								item
								mobile={6}
								tablet={4}
								laptop={6}
								largeLaptop={4}
								key={item.title}
							>
								<ImageItem href="/comingSoon">
									<StyledImage
										loader={imageLoader}
										src={item.img}
										alt={item.title}
										unoptimized
									/>
								</ImageItem>
							</Grid>
						))}
					</ImageListContainer>
				</Grid>
				<Grid item mobile={12} tablet={6} laptop={3} largeLaptop={3}>
					<Title>Join the Newsletter</Title>
					<ContentText>Stay informed about the latest events.</ContentText>
					<FormControl fullWidth variant="outlined" className="relative">
						<StyledInput
							value={emailInput}
							onChange={event => setEmailInput(event.target.value)}
							onFocus={() => setInputMessage('')}
							onKeyDown={handleKeyPress}
							startAdornment={
								<StyledInputStartAdornment position="start">
									Email*
								</StyledInputStartAdornment>
							}
							endAdornment={
								<InputAdornment position="end">
									<StyledSubmitButton onClick={handleSubmitEmail}>
										<span>Send</span>
									</StyledSubmitButton>
								</InputAdornment>
							}
						/>
						{inputMessage && <EmailHelperText>{inputMessage}</EmailHelperText>}
					</FormControl>
				</Grid>
			</ContainerGrid>
			<SubscriptionModal message={message} open={openModal} handleClose={handleClose} />
		</ContentContainer>
	);
};

export default FooterContent;
