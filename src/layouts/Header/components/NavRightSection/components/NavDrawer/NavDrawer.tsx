import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { tagDecoration } from '@/styles/mixin';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor, textColor, whiteColor } = color;

const DrawerButton = styled(Button)({
	color: textColor,
	backgroundColor: whiteColor,
	minWidth: 'unset',
	height: 'fit-content',
	borderRadius: 0,
	boxShadow: '1px 1px 8px 0 rgb(80 214 174 / 63)',
	marginLeft: '18px',
	padding: '12px',
	'&:hover': {
		backgroundColor: whiteColor
	}
});

const DrawerContainer = styled.div`
	background-color: ${textColor};
	color: ${whiteColor};
	height: 100%;
	padding: 75px 50px 36px;
	position: relative;
	width: 400px;
`;

const CloseButton = styled.div`
	position: absolute;
	right: 50px;
	top: 40px;
`;

const Tagline = styled.p`
	${tagDecoration()};
	color: ${primaryColor};
	font-style: italic;
	margin-bottom: 0;
`;

const Title = styled.h4`
	font-size: 25px;
	font-weight: 700;
	margin-top: 0;
`;

const StyledLink = styled(Link)`
	-moz-transition: color 0.4s ease-out;
	-webkit-transition: color 0.4s ease-out;
	padding: 6px 0;
	transition: color 0.4s ease-out;
	&:hover {
		color: ${primaryColor};
	}
`;

const ImageContainer = styled.div`
	cursor: pointer;
`;

const linkConfigList = [
	{
		label: 'Registration Page',
		href: '/comingSoon'
	},
	{
		label: 'Buy Tickets',
		href: 'https://www.eventbrite.com.au/e/web3-convention-tickets-491154535437'
	},
	{
		label: 'Schedule',
		href: '/comingSoon'
	},
	{
		label: 'Speakers',
		href: '/comingSoon'
	}
];

const NavDrawer: React.FC = () => {
	const router = useRouter();

	const [drawerStatus, setDrawerStatus] = useState<boolean>(false);

	const open = () => setDrawerStatus(true);
	const close = () => setDrawerStatus(false);

	return (
		<>
			<DrawerButton disableRipple onClick={open}>
				<MenuIcon fontSize="small" />
			</DrawerButton>
			<SwipeableDrawer anchor="right" open={drawerStatus} onClose={close} onOpen={open}>
				<DrawerContainer>
					<CloseButton className="cursor-pointer" onClick={close}>
						<CloseIcon color="primary" fontSize="small" />
					</CloseButton>
					<ImageContainer onClick={() => router.push('/')}>
						<Image
							loader={imageLoader}
							unoptimized
							src="/web3-logo-white.svg"
							alt="logo"
							width={140}
							height={40}
							priority
						/>
					</ImageContainer>
					<Tagline>{`Don't_miss`}</Tagline>
					<Title>Wire Festival</Title>
					<p className="leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit
						hendrerit faucibus turpis dui.
					</p>
					<div className="flex flex-col">
						{linkConfigList.map(({ label, href }) => (
							<StyledLink href={href} key={label}>
								{label}
							</StyledLink>
						))}
					</div>
				</DrawerContainer>
			</SwipeableDrawer>
		</>
	);
};

export default NavDrawer;
