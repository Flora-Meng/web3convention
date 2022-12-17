import styled from 'styled-components';

import StageBanner from '@/components/Pages/Stages/Banner/StageBanner';
import MainContents from '@/components/Pages/Stages/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const BackgroundImage = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/stagePage/banner.jpeg');
	background-repeat: repeat-x;
	background-size: cover;
	height: 100vh;
`;
const StagePage = () => {
	return (
		<>
			<BackgroundImage>
				<Header />
				<StageBanner />
			</BackgroundImage>
			<MainContents />
			<Footer />
		</>
	);
};

export default StagePage;
