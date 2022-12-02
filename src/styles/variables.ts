import { IColor, IDevices, IInputColor, ISize } from '@/interfaces/variables';

const sizes: ISize = {
	miniMobile: 320,
	mobile: 576,
	tablet: 768,
	laptop: 1024,
	largeLaptop: 1440,
	desktop: 1920,
	largeDesktop: 2560,
	wideScreen: 3840
};

const devices: IDevices = {
	miniMobile: `(min-width: ${sizes.miniMobile}px)`,
	mobile: `(min-width: ${sizes.mobile}px)`,
	tablet: `(min-width: ${sizes.tablet}px)`,
	laptop: `(min-width: ${sizes.laptop}px)`,
	largeLaptop: `(min-width: ${sizes.largeLaptop}px)`,
	desktop: `(min-width: ${sizes.desktop}px)`,
	largeDesktop: `(min-width: ${sizes.largeDesktop}px)`
};

const color: IColor = {
	primaryColor: '#53f6c6',
	whiteColor: '#fff',
	textColor: '#282828',
	blackColor: '#000'
};

const inputColor: IInputColor = {
	borderColor: '#cacaca',
	placeholderColor: '#d3d4d5'
};

const headerHeight = '100px';

export { color, devices, headerHeight, inputColor, sizes };
