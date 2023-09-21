import ENavItem from '@/constants/nav';
import { INavItem } from '@/interfaces/nav';

export const navItemsConfig: { [K in ENavItem]: INavItem } = {
	[ENavItem.HOME]: {
		title: 'home',
		path: '/'
	},
	[ENavItem.ABOUT]: {
		title: 'about',
		path: '/'
	},
	[ENavItem.EVENTS]: {
		title: 'events',
		path: '/'
	},
	[ENavItem.AGENDA]: {
		title: 'agenda',
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
	[ENavItem.SPONSORS]: {
		title: 'sponsors',
		path: '/'
	},
	[ENavItem.SPEAKERS]: {
		title: 'speakers',
		path: '/speakers'
	},
	[ENavItem.ATTEND]: {
		title: 'attend',
		path: '/'
	},
	[ENavItem.TICKETS]: {
		title: 'tickets',
		path: '/get-tickets'
	},
	[ENavItem.HACKATHON]: {
		title: 'hackathon',
		path: 'https://web3hackfest.net/'
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
	[ENavItem.SPEAKERS]: [
		{
			title: 'Speakers',
			path: '/comingSoon'
		},
		{
			title: 'Apply-to-speak',
			path: '/apply-to-speak'
		}
	]
};

export default navItemsConfig;
