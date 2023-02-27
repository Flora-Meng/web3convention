import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import styled from 'styled-components';

import { WEEKDAY } from '@/constants/event';
import { color, devices, sizes } from '@/styles/variables';

const { textColor } = color;

interface GridItemProps {
	bgColor: string;
}

const AgendaTableContainer = styled.div`
	margin: 50px auto;
	max-width: ${`${sizes.laptop}px`};
	position: relative;
`;
const TableHead = styled(Grid)`
	margin-bottom: 20px;
`;

const TableHeadItem = styled(Grid)`
	position: relative;
	text-align: center;
	&:not(:last-child) {
		&::after {
			background-color: #cacaca;
			content: '';
			height: 40px;
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-36%);
			width: 2px;
		}
	}
`;

const HeadTitle = styled.p`
	font-size: 20px;
	font-weight: 700;
	margin: 0;
	@media ${devices.mobile} {
		font-size: 22px;
	}
	@media ${devices.laptop} {
		font-size: 26px;
	}
`;

const HeadSubtitle = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin: 0;
`;

const GridItemContainer = styled(Grid)`
	@media ${devices.mobile} {
		height: 60px;
	}
`;

const GridItem = styled.div<GridItemProps>`
	background-color: ${({ bgColor }) => bgColor};
	color: ${textColor};
	flex: 1;
	font-size: 13px;
	font-weight: 600;
	height: 100%;
	padding: 10px 4px;
	text-align: center;
	p {
		margin: 0;
	}
	@media ${devices.mobile} {
		font-size: 13px;
	}
	@media ${devices.laptop} {
		font-size: 16px;
	}
`;

const itemColors = ['#d19de7', '#6aeef2', '#bcbff5', '#f4cad4', '#8af9d5'];

const headConfig: {
	title: string;
	subtitle: string;
}[] = [
		{
			title: WEEKDAY[5],
			subtitle: '24 May'
		},
		{
			title: WEEKDAY[6],
			subtitle: '25 May'
		},
		{
			title: WEEKDAY[0],
			subtitle: '26 May'
		}
	];

const agendaConfig = [
	{
		_id: '1-1',
		title: 'Exhibitors Bump in',
		columns: 1,
		offset: 0
	},
	{
		_id: '1-23',
		title: 'Open Expo Hall',
		columns: 2,
		offset: 0
	},
	{
		_id: '2-23',
		title: 'Mainstage',
		columns: 2,
		offset: 1
	},
	{
		_id: '3-23',
		title: 'Seminar',
		columns: 2,
		offset: 1
	},
	{
		_id: '11-23',
		title: 'Data & AI & Cloud Computing',
		columns: 2,
		offset: 1
	},
	{
		_id: '4-23',
		title: 'Metaverse and Gaming Zone',
		columns: 2,
		offset: 1
	},
	{
		_id: '5-23',
		title: 'NFT House',
		columns: 2,
		offset: 1
	},
	{
		_id: '6-23',
		title: 'DAO House',
		columns: 2,
		offset: 1
	},
	{
		_id: '7-23',
		title: 'VIP Lounge',
		columns: 2,
		offset: 1
	},
	{
		_id: '8-23',
		title: 'Web3 Hackathon',
		columns: 2,
		offset: 1
	},
	{
		_id: '9-2',
		title: 'Sponsor & Startup Pitches <Pitch House>',
		columns: 1,
		offset: 1
	},
	{
		_id: '9-3',
		title: 'Web3 Hackathon Final Pitches<Pitch House>',
		columns: 1,
		offset: 0
	},
	{
		_id: '10-23',
		title: 'Web3 Workshop',
		columns: 2,
		offset: 1
	},
	{
		_id: '11-1',
		title: 'Kickoff Party',
		columns: 1,
		offset: 0
	},
	{
		_id: '11-2',
		title: 'Cyber Party',
		columns: 1,
		offset: 0
	},
	{
		_id: '11-3',
		title: 'After Party',
		columns: 1,
		offset: 0
	},
	{
		_id: '12-2',
		title: 'Whale Yacht Party',
		columns: 1,
		offset: 1
	},
	{
		_id: '13-2',
		title: 'Partner After Party',
		columns: 1,
		offset: 1
	}
];

const AgendaTable: React.FC = () => {
	return (
		<AgendaTableContainer>
			<TableHead container columnSpacing={1}>
				{headConfig.map(({ title, subtitle }) => (
					<TableHeadItem key={title} miniMobile={4}>
						<HeadSubtitle>{subtitle}</HeadSubtitle>
						<HeadTitle>{title}</HeadTitle>
					</TableHeadItem>
				))}
			</TableHead>
			<Grid container rowSpacing={1} columnSpacing={1}>
				{agendaConfig.map(({ _id, title, columns, offset = 0 }, index) => (
					<GridItemContainer
						key={_id}
						miniMobile={columns * 4}
						miniMobileOffset={offset * 4}
					>
						<Link href="/comingSoon">
							<GridItem
								bgColor={itemColors[index % 5]}
								className="flex items-center justify-center"
							>
								<p>{title}</p>
							</GridItem>
						</Link>
					</GridItemContainer>
				))}
			</Grid>
		</AgendaTableContainer>
	);
};

export default AgendaTable;
