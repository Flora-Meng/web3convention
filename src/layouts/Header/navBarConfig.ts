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
			title: 'Venue',
			path: '/venue'
		},
		{
			title: 'Contact Us',
			path: '/contact-us'
		},
		{
			title: 'Apply to Volunteer',
			path: 'https://w3con.eventsair.com/web3convention/atv/Site/Register'
		}
	],
	[ENavItem.EVENTS]: [
		{
			title: 'Convention',
			path: '/convention'
		},
		{
			title: 'Startup Competition',
			path: 'https://w3con.eventsair.com/web3convention/startupcomp'
		},
		{
			title: 'Side Events',
			path: '/side-events'
		},
		// 暂时隐藏，非删除
		// {
		// 	title: '2024 Web3 & AI Convention',
		// 	path: '/web3-convention-2024'
		// },
		{
			title: 'Web3 Hackathon 2023',
			path: '/hackathon'
		}
	],
	[ENavItem.AGENDA]: [
		{
			title: 'Agenda Overview',
			path: '/agenda'
		},
		{
			title: 'Apply to Speak',
			path: 'https://w3con.eventsair.com/web3convention/ats/Site/Register'
		}
	],
	[ENavItem.ATTEND]: [
		{
			title: 'Ticket Types',
			path: '/get-tickets'
		},
		{
			title: 'Book Now',
			path: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
		}
	],
	[ENavItem.PARTNER]: [
		{
			title: 'Partner with Us',
			path: '/partners'
		},
		{
			title: 'Why Partner?',
			path: '/why-sponsor'
		},
		{
			title: '2024 Partners',
			path: '/previous-partner'
		}
	]
};

export default navItemsConfig;
