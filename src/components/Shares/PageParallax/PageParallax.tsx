import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { sectionSubtitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { whiteColor } = color;

const HomeParallaxContainer = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/main-home-parallax.jpg');
	background-position: center 0;
	background-size: cover;
	color: ${whiteColor};
	padding: 130px 16px;
	text-align: center;
	@media ${devices.tablet} {
		padding: 130px 100px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	color: ${whiteColor};
	font-size: 18px;
	letter-spacing: 0.15rem;
	margin-bottom: 8px;
`;

const Title = styled.h2`
	font-size: 50px;
	line-height: 1;
	margin: 0 0 28px 0;
	@media ${devices.tablet} {
		font-size: 60px;
	}
`;

const PageParallax: React.FC = () => {
	const [backgroundPositionTop, setBackgroundPositionTop] = useState<number>();
	const ParallaxContainer = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (ParallaxContainer.current) {
			setBackgroundPositionTop(
				Math.round(ParallaxContainer.current.getBoundingClientRect().top / 5)
			);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<HomeParallaxContainer
			ref={ParallaxContainer}
			style={{
				backgroundPosition: `center ${backgroundPositionTop}px`
			}}
		>
			<Subtitle>web2_web3</Subtitle>
			<Title>Welcome to a World where Web3 is now a thing</Title>
			<ThemeButton href="https://w3con.eventsair.com/web3convention/registration/Site/Register">
				BOOK TICKETS
			</ThemeButton>
		</HomeParallaxContainer>
	);
};

export default PageParallax;
