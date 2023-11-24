import styled from 'styled-components';

import sessionTypes from './sessionTypes.json';

const Container = styled.div``;
const Title = styled.h2``;
const StyledGridContainer = styled.div``;
const StyledGridItem = styled.div``;
const SubTitle = styled.h2``;
const Description = styled.p``;
const SessionTypesSection = () => {
	return (
		<Container>
			<Title>Session Types at the Convention</Title>
			<StyledGridContainer>
				{sessionTypes.map(session => (
					<StyledGridItem key={session.id}>
						<SubTitle>{session.title}:</SubTitle>
						<Description>{session.description}</Description>
					</StyledGridItem>
				))}
			</StyledGridContainer>
		</Container>
	);
};

export default SessionTypesSection;
