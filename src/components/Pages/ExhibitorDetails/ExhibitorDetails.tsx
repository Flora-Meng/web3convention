// import Image from 'next/image';
// import { useEffect } from 'react';
// import styled from 'styled-components';

// import { fetchExhibitor } from '@/services/meetup';
// import imageLoader from '@/utils/loader';

// const ExhibitorContainer = styled.div``;
// const ExhibitorAvatar = styled.div``;
// const ExhibitorName = styled.p``;
// const ExhibitorCountry = styled.p``;
// async function ExhibitorDetails({ params }: { params: { _id: string } }) {
// 	const exhibitorInfo = await fetchExhibitor(params._id);

// 	const { logo, name, country } = exhibitorInfo;
// 	return (
// 		<div>
// 			<ExhibitorContainer>
// 				{logo?.url && (
// 					<ExhibitorAvatar>
// 						<Image src={logo?.url} alt={name} loader={imageLoader} unoptimized fill />
// 					</ExhibitorAvatar>
// 				)}
// 				<ExhibitorName>{name}</ExhibitorName>
// 				<ExhibitorCountry>{country}</ExhibitorCountry>
// 			</ExhibitorContainer>
// 		</div>
// 	);
// }

// export default ExhibitorDetails;
