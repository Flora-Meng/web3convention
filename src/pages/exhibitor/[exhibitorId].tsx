import styled from 'styled-components';

import MainContents from '@/components/Pages/Exhibitor/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-color: #000;
	@media ${devices.miniMobile} {
		height: 25vh;
	}
	@media ${devices.tablet} {
		height: 20vh;
	}
`;
interface Meta {
	title: string;
}

const ExhibitorPage = () => {
	const meta: Meta = {
		title: 'AI + Web3 Convention 2024 | Exhibitor'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
			</Cover>
			<MainContents />
			<Footer />
		</>
	);
};

export default ExhibitorPage;
