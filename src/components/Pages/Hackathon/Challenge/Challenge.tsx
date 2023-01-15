import styled from 'styled-components';

import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

const ContentContainer = styled.div`
	margin: auto;
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 50px 30px 50px;
	position: relative;
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
const Backdrop = styled.div`
	${backdrop}
`;
const LogoCollumns = styled.div`
	display: flex;
	flex-wrap: wrap;
	img {
		height: 50px;
		width: auto;
		@media ${devices.mobile} {
			height: 60px;
		}
	}
`;
const Challenge = () => {
	return (
		<ContentContainer>
			<Subtitle>Web3 Hackathon 2023</Subtitle>
			<Title>The Next challenge</Title>
			<Backdrop>Challenge</Backdrop>
			<p>
				Build with the latest AI tools from OpenAI to create innovative new Web3 apps . Work
				with top AI professionals and learn from them . Create your AI app by combining
				GPT-3, Codex, Dalle-2, and Whisper ! Explore the Web3 AI technology .
			</p>
			<LogoCollumns>
				<div>
					<img src="/images/logo/openai-1.webp" alt="openai" />
				</div>
				<div>
					<img src="/images/logo/chatgpt.jpeg" alt="chatgpt" />
				</div>
				<div>
					<img src="/images/logo/ethereum.png" alt="ethereum" />
				</div>
				<div>
					<img
						src="/images/logo/polygon_blockchain_logo.png"
						alt="polygon_blockchain_logo"
					/>
				</div>
			</LogoCollumns>
		</ContentContainer>
	);
};

export default Challenge;
