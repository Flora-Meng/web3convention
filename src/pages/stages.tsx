import styled from 'styled-components';

import StageCoverTitle from '@/components/Pages/Stages/CoverTitle/StageCoverTitle';
import MainContents from '@/components/Pages/Stages/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const Cover = styled.div`
	background-image: url(/images//mainstage.jpeg);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 100%;
	height: 50vh;
`;
const StagePage = () => {
	return (
		<>
			<Cover>
				<Header />
				<StageCoverTitle />
			</Cover>
			<MainContents />
			<Footer />
		</>
	);
};

export default StagePage;
