import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { fetchExhibitor } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

const logoBackground = '/images/exhibition/invalid-name.png';
const exhibitorIcon = '/images/icons/exhibitor.svg';
const auIcon = '/images/icons/aus.png';

const Container = styled.div`
	background-color: ${color.blackColor};
	display: flex;
	flex-direction: column;
	padding: 24px;
	width: 100%;
`;
const ExhibitorContainer = styled.div`
	align-items: center;
	border-bottom: 2px solid #2a2a2a;
	display: flex;
	gap: 10px;
	justify-content: flex-start;
	padding: 40px 0;
	@media ${devices.mobile} {
		gap: 20px;
	}
`;
const ExhibitorAvatar = styled.div`
	background-image: url(${logoBackground});
	background-repeat: no-repeat;
	background-size: cover;
	height: 46px;
	position: relative;
	width: 39px;
	img.company {
		border-radius: 50%;
		height: 35px;
		margin: 9px 2px 2px 2px;
		position: absolute;
		transform: none;
		width: 35px;
	}
`;
const ExhibitorIconWrapper = styled.div`
	cursor: pointer;
	display: block;
	height: 20px;
	width: 90px;
	img {
		height: 20px;
		width: 96px;
	}
`;
const ExhibitorName = styled.p`
	color: ${color.whiteColor};
	font-size: 32px;
	font-weight: bold;
`;
const ExhibitorCountry = styled.div`
	img {
		border-radius: 50%;
		height: 28px;
		width: 28px;
	}
`;

const ExhibitorWrapper = styled.div`
	margin: 0 auto 50px;
	max-width: 1200px;
	width: 100%;
	@media ${devices.mobile} {
		margin: 0 auto 250px;
	}
`;
const ExhibitorInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 48px 0 0 0;
`;
const ExhibitorImage = styled.div`
	img {
		max-height: 364px;
		width: 100%;
	}
`;
const Description = styled.p`
	color: #fff;
	line-height: 1.5;
	width: 100%;
`;
const ExhibitorDetails = () => {
	const router = useRouter();
	const id = router?.query?.id as string;
	const [exhibitor, setExhibitor] = useState<Exhibitor>({} as Exhibitor);
	const fetchData = async () => {
		const response = await fetchExhibitor(id);
		const exhibitorInfo = response.data || {};
		setExhibitor(exhibitorInfo);
	};
	useEffect(() => {
		if (id) {
			fetchData();
		}
	}, [id]);

	const { logo, name, country, description, backgroundImg } = exhibitor;

	return (
		<Container>
			<Header />
			<ExhibitorWrapper>
				<ExhibitorContainer>
					{logo?.url && (
						<ExhibitorAvatar>
							<img src={logo?.url} alt={name} className="company" />
						</ExhibitorAvatar>
					)}
					<ExhibitorName>{name}</ExhibitorName>
					<ExhibitorIconWrapper>
						<img className="exhibitorIcon" src={exhibitorIcon} alt="Exhibitor icon" />
					</ExhibitorIconWrapper>
					<ExhibitorCountry>
						<img src={auIcon} alt="aus" className="ausicon" />
					</ExhibitorCountry>
				</ExhibitorContainer>
				<ExhibitorInfo>
					{backgroundImg && (
						<ExhibitorImage>
							<img src={backgroundImg?.url} alt={name} />
						</ExhibitorImage>
					)}
					<Description>
						Company Profile:
						<br />
						{description}
					</Description>
				</ExhibitorInfo>
			</ExhibitorWrapper>
			<Footer />
		</Container>
	);
};

export default ExhibitorDetails;
