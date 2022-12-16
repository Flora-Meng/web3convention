import { IColor, IDevices, IInputColor, ISize } from '@/interfaces/variables';

export const sizes: ISize = {
	miniMobile: 320,
	mobile: 576,
	tablet: 768,
	laptop: 1024,
	largeLaptop: 1440,
	desktop: 1920,
	largeDesktop: 2560,
	wideScreen: 3840
};

export const devices: IDevices = {
	miniMobile: `(min-width: ${sizes.miniMobile}px)`,
	mobile: `(min-width: ${sizes.mobile}px)`,
	tablet: `(min-width: ${sizes.tablet}px)`,
	laptop: `(min-width: ${sizes.laptop}px)`,
	largeLaptop: `(min-width: ${sizes.largeLaptop}px)`,
	desktop: `(min-width: ${sizes.desktop}px)`,
	largeDesktop: `(min-width: ${sizes.largeDesktop}px)`
};

export const color: IColor = {
	primaryColor: '#53f6c6',
	darkPrimaryColor: 'rgb(80, 214, 174)',
	whiteColor: '#fff',
	textColor: '#282828',
	blackColor: '#000'
};

export const inputColor: IInputColor = {
	borderColor: '#cacaca',
	placeholderColor: '#d3d4d5'
};

export const headerHeight = '100px';
