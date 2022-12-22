import ENavItem from '@/constants/nav';
import { INavItem } from '@/interfaces/nav';

export const navItemsConfig: { [K in ENavItem]: INavItem } = {
	[ENavItem.HOME]: {
		title: 'home',
		path: '/'
	},
	[ENavItem.STAGES]: {
		title: 'stages',
		path: '/stages'
	},
	[ENavItem.VENUE]: {
		title: 'venue',
		path: '/venue'
	},
	[ENavItem.GET_TICKETS]: {
		title: 'get tickets',
		path: '/get-tickets'
	}
	// [ENavItem.CONVENTION]: {
	// 	title: 'conventions',
	// 	path: '/comingSoon'
	// },
	// [ENavItem.PARTNER]: {
	// 	title: 'our partner',
	// 	path: '/comingSoon'
	// },
	// [ENavItem.TICKET]: {
	// 	title: 'get tickets',
	// 	path: '/comingSoon'
	// },
	// [ENavItem.VENUE]: {
	// 	title: 'venue info',
	// 	path: '/comingSoon'
	// },
	// [ENavItem.NEWS]: {
	// 	title: 'news',
	// 	path: '/comingSoon'
	// }
};

export const subNavItemsConfig: { [K in ENavItem]?: INavItem[] } = {
	// [ENavItem.CONVENTION]: [
	// 	{
	// 		title: 'Conventions',
	// 		path: '/comingSoon'
	// 	},
	// 	{
	// 		title: 'Session',
	// 		path: '/comingSoon'
	// 	}
	// ]
};

export default navItemsConfig;
