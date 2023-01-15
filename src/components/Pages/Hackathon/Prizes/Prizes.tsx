import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

const ContentContainer = styled.div`
	margin: auto;
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 50px 30px 50px;
	@media ${devices.mobile} {
		padding: 50px 100px 50px;
	}
`;
const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;
const Subtitle = styled.p`
	${sectionSubtitle};
`;

const StageCoverTitle = () => {
	return (
		<ContentContainer>
			<Subtitle>Web3 Hackathon 2023</Subtitle>
			<Title>Prizes</Title>
			<h3>$15,000 in Uni Hackathon prizes</h3>
			<p>
				<strong>1st Place</strong>
			</p>
			<ul>
				<li>$8,500</li>
			</ul>
			<p>
				<strong>2nd Place</strong>
			</p>
			<ul>
				<li>$3,500</li>
			</ul>
			<p>
				<strong> 3rd Place</strong>
			</p>
			<ul>
				<li>$1500</li>
			</ul>
			<p>
				<strong>Best Beginner Hack</strong>
			</p>
			<ul>
				<li>$200</li>
			</ul>
			<p>
				<strong>People&apos;s Choice</strong>
			</p>
			<ul>
				<li>$200</li>
			</ul>
		</ContentContainer>
	);
};

export default StageCoverTitle;
