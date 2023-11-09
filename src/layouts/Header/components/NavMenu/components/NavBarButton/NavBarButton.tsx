import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { textColor } = color;
interface NavBarButtonProps {
	buttonCtx: string;
	linkHref: string;
	src?: string;
}

const NavButtonContainer = styled.div`
	align-items: center;
	display: flex;
	height: 44px;
	width: 300px;
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
	&:hover {
		background-color: #f5f5f5;
	}
`;

const CustomizedButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${textColor};
	cursor: pointer;
	font-family: ArialMT;
	font-size: 16px;
	padding-right: 24px;
	text-align: left;
	width: auto;
`;

const ButtonCtx = styled.span`
	align-items: center;
	display: flex;
	gap: 24px;
	margin-left: 24px;

	${navBarTitleDecoration('calc(100% + 4px)')};
`;

const NavBarButton: React.FC<NavBarButtonProps> = ({ buttonCtx, linkHref, src = undefined }) => {
	const router = useRouter();

	return (
		<NavButtonContainer>
			<CustomizedButton onClick={() => router.push(linkHref)}>
				<ButtonCtx>
					{src && (
						<Image
							src={src}
							alt="Star Icon"
							width={17}
							height={18}
							priority
							loader={imageLoader}
						/>
					)}

					{buttonCtx}
				</ButtonCtx>
			</CustomizedButton>
		</NavButtonContainer>
	);
};

export default NavBarButton;
