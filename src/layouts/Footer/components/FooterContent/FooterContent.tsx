import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
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
import {
	animationHoverImage,
	animationHoverImageParent,
	disableMUIButtonHoverCss,
	tagDecoration
} from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, primaryColor, whiteColor } = color;

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

const ImageListItem = styled(Link)`
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

const StyledSubmitButton = styled(Button)`
	background-color: transparent;
	color: ${whiteColor};
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
	}, [emailInput]);

	const handleSubmitEmail = () => {
		if (!emailInput) {
			setInputMessage('Email is invalid.');
		}
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
						Lorem ipsum dolor sit amet, quo quis simul tincidunt in. Ne electram
						iracundia voluptatum per, ei nec
					</ContentText>
					<ContentText>+490 54 324 77</ContentText>
					<ContentText>Potsdamer Platz 9797</ContentText>
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
				<Grid item mobile={12} tablet={6} laptop={3} largeLaptop={3}>
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
