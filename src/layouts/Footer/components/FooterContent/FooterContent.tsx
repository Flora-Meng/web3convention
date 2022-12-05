import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import styled from 'styled-components';

import instagramImage01 from '@/assets/images/demo/instagram-image-01.jpg';
import instagramImage02 from '@/assets/images/demo//instagram-image-02.jpg';
import instagramImage03 from '@/assets/images/demo//instagram-image-03.jpg';
import instagramImage04 from '@/assets/images/demo//instagram-image-04.jpg';
import instagramImage05 from '@/assets/images/demo//instagram-image-05.jpg';
import instagramImage06 from '@/assets/images/demo//instagram-image-06.jpg';
import imageLoader from '@/utils/loader';
import { color, devices } from '@/styles/variables';
import { disableMUIButtonHoverCss, tagDecoration } from '@/styles/mixin';

const { blackColor, primaryColor, whiteColor } = color;

// Styles

const ContentContainer = styled(Box)`
	color: ${whiteColor};
	background-color: ${blackColor};
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
		cursor: pointer;
		color: ${primaryColor};
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

const ImageListItem = styled(Link)`
	display: block;
	overflow: hidden;
	width: inherit;
	&:hover img {
		-webkit-transform: scale(1.12) translate3d(4px, 0, 0);
		-moz-transform: scale(1.12) translate3d(4px, 0, 0);
		transform: scale(1.12) translate3d(4px, 0, 0);
		-webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1);
		-moz-transition: -moz-transform 1s cubic-bezier(0.23, 1, 0.32, 1);
		transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
	}
	@media ${devices.tablet} {
		width: 82px;
	}
`;

const StyledImage = styled(Image)`
	display: block;
	width: 100%;
	height: 100%;
	-webkit-transform: scale(1.12) translate3d(-4px, 0, 0);
	-moz-transform: scale(1.12) translate3d(-4px, 0, 0);
	transform: scale(1.12) translate3d(-4px, 0, 0);
	-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	-moz-transition: -moz-transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

const ContentText = styled.p`
	font-size: 14px;
	line-height: 1.5;
	margin-top: 0;
`;

const StyledInput = styled(Input)`
	color: ${whiteColor};
	border-bottom: 2px solid ${primaryColor};
	&:after {
		display: none;
	}
`;

const StyledInputStartAdornment = styled(InputAdornment)`
	p {
		color: ${whiteColor};
	}
`;

const StyledSubmitButton = styled(Button)`
	color: ${whiteColor};
	background-color: transparent;
	${disableMUIButtonHoverCss};
	&:hover {
		color: ${primaryColor};
	}
	span {
		${tagDecoration};
	}
`;

const EmailHelperText = styled(FormHelperText)`
	color: red;
	margin-left: 0;
`;

// Configuration

const linkConfigList = [
	{
		label: 'Engaging, purposeful, and creative',
		path: '/comingSoon'
	},
	{
		label: 'Extroadinary life events.',
		path: '/comingSoon'
	},
	{
		label: 'Design your perfect event.',
		path: '/comingSoon'
	},
	{
		label: 'Connect your worlds.',
		path: '/comingSoon'
	},
	{
		label: 'Improving workplace productivity.',
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

	useEffect(() => {
		if (inputMessage) setInputMessage('');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [emailInput]);

	const handleSubmitEmail = () => {
		if (!emailInput) {
			setInputMessage('Email is invalid.');
			return;
		}
	};

	return (
		<ContentContainer sx={{ flexGrow: 1 }} className="flex justify-center">
			<ContainerGrid container spacing={4}>
				<Grid item xs={12} sm={6} md={3} lg={3}>
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
						Lorem ipsum dolor sit amet, quo quis simul tincidunt in. Ne electram
						iracundia voluptatum per, ei nec
					</ContentText>
					<ContentText>+490 54 324 77</ContentText>
					<ContentText>Potsdamer Platz 9797</ContentText>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<Title>Useful Links</Title>
					<div className="flex flex-col">
						{linkConfigList.map(linkConfig => (
							<StyledLink href={linkConfig.path} key={linkConfig.label}>
								{linkConfig.label}
							</StyledLink>
						))}
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<Title>Instagram</Title>
					<ImageListContainer container spacing={1}>
						{itemData.map(item => (
							<Grid item xs={6} sm={4} md={6} lg={4} key={item.title}>
								<ImageListItem href="/comingSoon">
									<StyledImage
										loader={imageLoader}
										src={item.img}
										alt={item.title}
										unoptimized
									/>
								</ImageListItem>
							</Grid>
						))}
					</ImageListContainer>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3}>
					<Title>Join the Newsletter</Title>
					<ContentText>Stay informed about the latest events.</ContentText>
					<FormControl fullWidth variant="outlined">
						<StyledInput
							value={emailInput}
							onChange={event => setEmailInput(event.target.value)}
							startAdornment={
								<StyledInputStartAdornment position="start">
									Email*
								</StyledInputStartAdornment>
							}
							endAdornment={
								<InputAdornment position="end">
									<StyledSubmitButton
										variant="contained"
										disableRipple
										onClick={handleSubmitEmail}
									>
										<span>Send</span>
									</StyledSubmitButton>
								</InputAdornment>
							}
						/>
						{inputMessage && <EmailHelperText>{inputMessage}</EmailHelperText>}
					</FormControl>
				</Grid>
			</ContainerGrid>
		</ContentContainer>
	);
};

export default FooterContent;
