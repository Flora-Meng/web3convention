import styled from 'styled-components';

import StageBanner from '@/components/Pages/Stages/Banner/StageBanner';
import MainContents from '@/components/Pages/Stages/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const BackgroundImage = styled.div`
	background-image: url('/images/demo/main-slider-background-2.jpg');
	background-position: bottom;
	background-repeat: repeat;
	background-size: 100vw;
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
