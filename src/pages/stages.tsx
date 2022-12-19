import styled from 'styled-components';

import StageBanner from '@/components/Pages/Stages/Banner/StageBanner';
import MainContents from '@/components/Pages/Stages/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const BannerBackground = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/stagePage/banner.jpeg');
	background-size: cover;
	height: 100vh;
`;
const StagePage = () => {
	return (
		<>
			<BannerBackground>
				<Header />
				<StageBanner />
			</BannerBackground>
			<MainContents />
			<Footer />
		</>
	);
};

export default StagePage;
