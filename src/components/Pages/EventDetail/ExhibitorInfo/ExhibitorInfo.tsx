import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import ExhibitorAvatar from '@/components/Shares/ExhibitorAvatar';
import ExhibitorIcon from '@/components/Shares/ExhibitorIcon';
import { color } from '@/styles/variables';

const Wrapper = styled.div`
	border-bottom: 2px solid #2a2a2a;
	display: flex;
	font-size: 16px;
	gap: 14px;
	margin-bottom: 48px;
	padding: 0 0 32px;
`;

const Header = styled.p`
	color: #929292;
	letter-spacing: 1px;
	line-height: 1.5;
	margin: 9px 0 0;
`;

const NameBox = styled.div`
	display: flex;
	gap: 8px;
`;

const Name = styled(Link)`
	color: ${color.whiteColor};
	cursor: pointer;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.5;
	&:hover {
		color: ${color.primaryColor};
	}
`;

const ExhibitorInfo = () => {
	const router = useRouter();
	const { exhibitorId, exhibitorName, exhibitorLogo } = router.query;
	return (
		<Wrapper>
			{exhibitorLogo && (
				<ExhibitorAvatar
					logoUrl={exhibitorLogo as string}
					name={exhibitorName as string}
					width="50px"
					height="58px"
				/>
			)}

			<div>
				<Header>Hosted By</Header>
				<NameBox>
					<Name
						href="#"
						onClick={() => {
							router.push(`/exhibitor/${exhibitorId}`);
						}}
					>
						{exhibitorName}
					</Name>
					<ExhibitorIcon height="24px" />
				</NameBox>
			</div>
		</Wrapper>
	);
};

export default ExhibitorInfo;
