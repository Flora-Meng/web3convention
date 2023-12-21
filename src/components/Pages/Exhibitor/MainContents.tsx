import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import fetchExhibitorById from '@/services/companies';
import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor, whiteColor } = color;

const Container = styled.div`
	background-color: ${blackColor};
`;

const MainContents = () => {
	const router = useRouter();
	const { exhibitorId } = router.query;
	const [exhibitorInfo, setExhibitorInfo] = useState({});
	const fetchData = async () => {
		if (typeof exhibitorId === 'string') {
			const response = await fetchExhibitorById(exhibitorId);
			setExhibitorInfo(response.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return <Container>asdas</Container>;
};

export default MainContents;
