import styled from 'styled-components';

import contentList from '@/components/Pages/Stages/MainContents/contentList.json';
import ContentRow from '@/components/Pages/Stages/MainContents/ContentRow/ContentRow';
import { devices } from '@/styles/variables';

const MainSection = styled.div`
	margin: auto;
	max-width: 1440px;
	@media ${devices.laptop} {
		padding: 0 100px;
	}
	@media ${devices.desktop} {
		padding: 0;
		width: 80vw;
	}
`;
const MainContents = () => {
	return (
		<MainSection>
			{contentList.map((content, index) => (
				<ContentRow
					key={content._id}
					rowCount={index}
					text={content.text}
					imageSrc={content.imageSrc}
					title={content.title}
					subTitle={content.subtitle}
				/>
			))}
		</MainSection>
	);
};

export default MainContents;
