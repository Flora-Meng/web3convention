import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import HeaderLogo from '../HeaderLogo';

import DropDownMenu from './components/DropDownMenu';
import DropDownMenuButton from './components/DropDownMenuButton';
import NavMenu from './components/NavMenu';
import NavRightSection from './components/NavRightSection';
import { color, devices, sizes } from '@/styles/variables';

const { whiteColor } = color;

const HeaderContainer = styled.div`
	align-items: center;
	background-color: ${whiteColor};
	display: flex;
	justify-content: space-between;
	padding: 16px 30px 16px 10px;
	position: relative;
	z-index: 2;
	@media ${devices.laptop} {
		background-color: transparent;
		padding: 0 30px;
	}
`;

const NavBar = styled.div`
	display: none;
	@media ${devices.laptop} {
		display: flex;
	}
`;

const DropDownNav = styled.div`
	@media ${devices.laptop} {
		display: none;
	}
`;

const Header = () => {
	const [openDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);
	const [logoSrc, setLogoSrc] = useState<string>('/web3-logo-white.svg');

	const onResize = useCallback(() => {
		setLogoSrc(
			document.documentElement.clientWidth > sizes.laptop
				? '/web3-logo-white.svg'
				: '/web3-logo.svg'
		);
	}, []);

	useEffect(() => {
		onResize();
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	});
	return (
		<HeaderContainer>
			<HeaderLogo logoSrc={logoSrc} />
			<NavBar className="items-center">
				<NavMenu />
				{/* <NavRightSection /> */}
			</NavBar>
			{/* <DropDownNav>
				<DropDownMenuButton handleClick={() => setOpenDropdownMenu(!openDropdownMenu)} />
			</DropDownNav>
			<DropDownMenu showMenu={openDropdownMenu} /> */}
		</HeaderContainer>
	);
};

export default Header;
