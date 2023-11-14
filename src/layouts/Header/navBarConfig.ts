import ENavItem from '@/constants/nav';
import { INavItem } from '@/interfaces/nav';

export const navItemsConfig: { [K in ENavItem]: INavItem } = {
	[ENavItem.ABOUT]: {
		title: 'about',
		path: '/comingSoon'
	},
	[ENavItem.EVENTS]: {
		title: 'events',
		path: '/comingSoon'
	},
	[ENavItem.AGENDA]: {
		title: 'agenda',
		path: '/comingSoon'
	},
	[ENavItem.ATTEND]: {
		title: 'attend',
		path: '/comingSoon'
	},
	[ENavItem.PARTNER]: {
		title: 'partner',
		path: '/comingSoon'
	}
};

export const subNavItemsConfig: { [K in ENavItem]?: INavItem[] } = {
	[ENavItem.ABOUT]: [
		{
			title: 'Stages',
			path: '/stages'
		},
		{
			title: 'Venue',
			path: '/venue'
		}
	],
	[ENavItem.EVENTS]: [
		{
			title: 'General Events',
			path: '/general-events'
		},
		{
			title: '2024 Web3 & AI Convention',
			path: '/web3-convention-2024'
		},
		{
			title: 'Hackathon',
			path: '/hackathon'
		}
	],
	[ENavItem.AGENDA]: [
		{
			title: 'Apply-to-Speak',
			path: '/apply-to-speak'
		}
	],
	[ENavItem.ATTEND]: [
		{
			title: 'Tickets',
			path: '/get-tickets'
		}
	],
	[ENavItem.PARTNER]: [
		{
			title: 'Previous Partner',
			path: '/previous-partner'
		},
		{
			title: 'Become a Sponsor',
			path: 'https://w3con.eventsair.com/SponsorshipPortal/Account/Login?ReturnUrl=%2FSponsorshipPortal%2Fweb3convention%2Fsponsorship'
		}
	]
};

export default navItemsConfig;
