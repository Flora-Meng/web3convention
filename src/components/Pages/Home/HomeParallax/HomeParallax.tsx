import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { tagDecoration } from '@/styles/mixin';
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
		padding: 130px 20%;
	}
`;

const Subtitle = styled.p`
	font-size: 18px;
	font-style: italic;
	${tagDecoration()};
	letter-spacing: 0.15rem;
	margin: 0;
	margin-bottom: 8px;
`;

const Title = styled.h2`
	font-size: 50px;
	line-height: 1;
	margin: 0;
	margin-bottom: 28px;
	@media ${devices.tablet} {
		font-size: 60px;
	}
`;

const HomeParallax: React.FC = () => {
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
			<Subtitle>the_festival</Subtitle>
			<Title>Predict, Discuss & Invent The Future Wire</Title>
			<ThemeButton href="/comingSoon">But Tickets</ThemeButton>
		</HomeParallaxContainer>
	);
};

export default HomeParallax;
