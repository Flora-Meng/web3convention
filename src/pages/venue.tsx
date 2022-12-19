import styled from 'styled-components';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

const BannerBackground = styled.div`
	background-attachment: fixed;
	background-image: url('/images/demo/stagePage/banner.jpeg');
	background-size: cover;
	height: 100vh;
`;
const VenuePage = () => {
	return (
		<>
			<BannerBackground>
				<Header />
			</BannerBackground>
			<Footer />
		</>
	);
};

export default VenuePage;
