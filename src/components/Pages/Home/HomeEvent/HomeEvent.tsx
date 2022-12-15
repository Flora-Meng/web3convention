import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import EventAccordion from './components/EventAccordion';
import EventTable from './components/EventTable';
import eventList from './eventList.json';
import { ALL_EVENTS, EEventType } from '@/constants/event';
import useResize from '@/hooks/useResize';
import { IEvent } from '@/interfaces/event';
import {
	activeNavBarTitleDecoration,
	navBarTitleDecoration,
	sectionSubtitle,
	sectionTitle
} from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';

interface IStyledLinkContainerProps {
	active: boolean;
}

const HomeEventContainer = styled.div`
	position: relative;
`;

const MaskContainer = styled.div`
	margin-left: 20px;
	position: absolute;
	top: 0;
`;

const MaskContent = styled.span`
	display: inline-block;
	font-size: 23vw;
	font-weight: 700;
	line-height: 1;
	margin: 0;
	opacity: 0.2;
	position: relative;
	&:after {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAMAAABFaP0WAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAA5JREFUCNdjYGRgYGQEAAAOAATa5WfvAAAAAElFTkSuQmCC');
		background-size: 2px 2px;
		content: '';
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}
`;

const ContentContainer = styled.div`
	padding: 100px 30px 160px;
	@media ${devices.tablet} {
		padding: 100px 100px 160px;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	margin-bottom: 20px;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 700;
	a {
		margin-right: 40px;
	}
	@media ${devices.tablet} {
		flex-direction: row;
	}
`;

const FilterOption = styled.div<IStyledLinkContainerProps>`
	cursor: pointer;
	font-size: 12px;
	font-weight: 700;
	padding: 8px 0;
	text-transform: uppercase;
	span {
		${navBarTitleDecoration('calc(100% + 4px)', '50%', '-2px')};
	}
	span:before {
		${({ active }) => (active ? activeNavBarTitleDecoration() : null)}
	}
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
	@media ${devices.tablet} {
		padding: 40px 0;
		font-size: 13px;
		margin-right: 40px;
	}
`;

const HomeEvent: React.FC = () => {
	const router = useRouter();
	const { isMobile } = useResize(sizes.laptop);
	const [currentFilterType, setCurrentFilterType] = useState<EEventType>();

	useEffect(() => {
		const { filterType } = router.query;
		setCurrentFilterType(filterType === ALL_EVENTS ? undefined : (filterType as EEventType));
	}, []);

	return (
		<HomeEventContainer>
			<MaskContainer>
				<MaskContent>events</MaskContent>
			</MaskContainer>
			<ContentContainer>
				<Subtitle>the_festival</Subtitle>
				<Title>Advancing our craft</Title>
				<FilterContainer>
					<FilterOption
						active={!currentFilterType}
						onClick={() => setCurrentFilterType(undefined)}
					>
						<span>all events</span>
					</FilterOption>
					{Object.values(EEventType).map(filterType => (
						<FilterOption
							active={filterType === currentFilterType}
							key={filterType}
							onClick={() => setCurrentFilterType(filterType)}
						>
							<span>{filterType}</span>
						</FilterOption>
					))}
				</FilterContainer>
				{isMobile ? (
					<EventAccordion
						list={eventList as IEvent[]}
						currentFilterType={currentFilterType}
					/>
				) : (
					<EventTable
						list={eventList as IEvent[]}
						currentFilterType={currentFilterType}
					/>
				)}
			</ContentContainer>
		</HomeEventContainer>
	);
};

export default HomeEvent;
