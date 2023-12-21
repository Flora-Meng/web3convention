import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ExhibitorDetailedInformation from './ExhibitorDetailedInformation';
import fetchExhibitorById from '@/services/companies';
import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor, whiteColor } = color;

const Container = styled.div`
	background-color: ${blackColor};
`;
type IExhibitor = {
	staffAmount: number;
	website: string;
	email: string;
	industry: string;
	officeAddress: string;
};

const MainContents = () => {
	const router = useRouter();
	const { exhibitorId } = router.query;
	const [exhibitorInfo, setExhibitorInfo] = useState<IExhibitor | null>(null);
	const fetchData = async () => {
		if (typeof exhibitorId === 'string') {
			const response = await fetchExhibitorById(exhibitorId);
			setExhibitorInfo(response.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, [exhibitorId]);
	return (
		<Container>
			{exhibitorInfo && <ExhibitorDetailedInformation exhibitorInfo={exhibitorInfo} />}
		</Container>
	);
};

export default MainContents;
