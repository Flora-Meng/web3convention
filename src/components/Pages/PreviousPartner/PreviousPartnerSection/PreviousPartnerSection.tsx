import AgendaTable from '@/components/Pages/Home/HomeEvent/components/AgendaTable';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const PreviousPartnerContainer = styled.div`

`;

const HomeEventContainer = styled.div`
	overflow: hidden;
	position: relative;
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	padding: 50px 0;
`;

const MaskContainer = styled.div`
	position: absolute;
	@media ${devices.mobile} {
		margin-top: 40px;
	}
	@media ${devices.desktop} {
		margin-top: 20px;
	}
`;

const Backdrop = styled.div`
	${backdrop};
	font-size: 23vw;
	left: 0;
	@media ${devices.tablet} {
		left: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 320px;
	}
	@media ${devices.miniMobile} {
		font-size: 70px;
	}
	@media ${devices.desktop} {
		font-size: 230px;
		left: 0;
	}
`;

const ContentContainer = styled.div`
	margin: 10px 0 40px;
`;

const Title = styled.h2`
	${sectionTitle};

	@media ${devices.desktop} {
		margin-bottom: 50px;
	}
	@media ${devices.miniMobile} {
		margin-bottom: 39px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const HomePosPreviousPartnerSectiont: React.FC = () => {
	return (
		<HomeEventContainer>
			<Container>
				<MaskContainer>
					<Backdrop>Events</Backdrop>
				</MaskContainer>
				<ContentContainer>
					<Subtitle>Web3 Convention 2024</Subtitle>
					<Title>Convention Agenda</Title>
					<AgendaTable />
				</ContentContainer>
			</Container>
		</HomeEventContainer>
	);
};

export default HomePosPreviousPartnerSectiont;
