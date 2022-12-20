import styled from 'styled-components';

import StageCoverTitle from '@/components/Pages/Stages/CoverTitle/StageCoverTitle';
import MainContents from '@/components/Pages/Stages/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const Cover = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/stagePage/cover.jpeg');
	background-size: cover;
	height: 100vh;
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
