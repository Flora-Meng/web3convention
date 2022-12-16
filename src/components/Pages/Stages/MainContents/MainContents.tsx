import styled from 'styled-components';

import contentList from '@/components/Pages/Stages/MainContents/contentList.json';
import ContentRow from '@/components/Pages/Stages/MainContents/ContentRow/ContentRow';

const MainSection = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1600px;
`;
const MainContents = () => {
	return (
		<MainSection>
			{contentList.map((content, index) => (
				<ContentRow rowCount={index} text={content.text} img={content.imageSrc} />
			))}
		</MainSection>
	);
};

export default MainContents;
