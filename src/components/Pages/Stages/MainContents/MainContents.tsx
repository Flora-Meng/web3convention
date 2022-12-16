import styled from 'styled-components';

import contentList from '@/components/Pages/Stages/MainContents/contentList.json';
import ContentRow from '@/components/Pages/Stages/MainContents/ContentRow/ContentRow';

const MainSection = styled.div`
	margin: auto;
	max-width: 1600px;
`;
const MainContents = () => {
	return (
		<MainSection>
			{contentList.map((content, index) => (
				<ContentRow
					key={content._id}
					rowCount={index}
					text={content.text}
					img={content.imageSrc}
					title={content.title}
					subTitle={content.subtitle}
				/>
			))}
		</MainSection>
	);
};

export default MainContents;
