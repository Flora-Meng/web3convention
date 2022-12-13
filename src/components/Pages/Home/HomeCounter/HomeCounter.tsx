import { upperFirst } from 'lodash';
import { useEffect } from 'react';
import styled from 'styled-components';

import ECountdownKey from '@/constants/countdown';
import countdown from '@/hooks/countdown';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor, whiteColor } = color;

const HomeCounterContainer = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/demo/counter-img.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: ${whiteColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 100px 30px;
	width: 100%;
	@media ${devices.laptop} {
		flex-direction: row;
		align-items: center;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 60px;
	@media ${devices.laptop} {
		max-width: 240px;
		margin-right: 50px;
		margin-bottom: 0;
	}
`;

const CounterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Title = styled.h2`
	${sectionTitle};
	font-size: 20px;
	margin: 0;
	@media ${devices.tablet} {
		font-size: 24px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const CounterItemContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-weight: 700;
	min-width: 24vw;
	text-align: center;
	@media ${devices.mobile} {
		min-width: 26vw;
	}
	@media ${devices.tablet} {
		min-width: unset;
	}
	@media ${devices.tablet} {
		margin: 0 30px;
	}
	@media ${devices.largeLaptop} {
		margin: 0 40px;
	}
`;

const CountdownNumber = styled.p`
	font-size: 36px;
	margin: 0;
	@media ${devices.tablet} {
		font-size: 50px;
	}
	@media ${devices.laptop} {
		font-size: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 80px;
	}
`;
const CountdownUnit = styled.p`
	color: ${primaryColor};
	font-size: 18px;
	margin: 0;
`;

const COUNTDOWN_DATE = '2023-07-22T22:00:00.000Z';

const HomeCounter: React.FC = () => {
	const { timer, countdownInfo } = countdown(COUNTDOWN_DATE);

	useEffect(() => {
		return () => clearInterval(timer);
	}, []);

	return (
		<HomeCounterContainer>
			<TitleContainer>
				<Subtitle>22-23 July 2023</Subtitle>
				<Title>Count Every Second Until Event</Title>
			</TitleContainer>
			<CounterContainer>
				{Object.values(ECountdownKey).map(countdownKey => {
					const countdownNumber = (countdownInfo && countdownInfo[countdownKey]) || 0;
					return (
						<CounterItemContainer key={countdownKey}>
							<CountdownNumber>
								{countdownInfo ? countdownNumber.toString().padStart(2, '0') : ''}
							</CountdownNumber>
							<CountdownUnit>
								{upperFirst(countdownKey)}
								{countdownNumber === 1 ? '' : 's'}
							</CountdownUnit>
						</CounterItemContainer>
					);
				})}
			</CounterContainer>
		</HomeCounterContainer>
	);
};

export default HomeCounter;
