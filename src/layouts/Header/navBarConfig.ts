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
	},
	[ENavItem.SPONSOR]: {
		title: 'sponsor',
		path: '/sponsor'
	}
};

export const subNavItemsConfig: { [K in ENavItem]?: INavItem[] } = {
	[ENavItem.ABOUT]: [
		{
			title: 'Venue',
			path: '/venue'
		}
	],
	[ENavItem.EVENTS]: [
		{
			title: 'Convention',
			path: '/convention'
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
			title: 'Hackathon',
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
			path: '/apply-to-speak'
		}
	],
	[ENavItem.ATTEND]: [
		{
			title: 'Ticket Types',
			path: '/get-tickets'
		},
		{
			title: 'Book Tickets',
			path: 'https://w3con.eventsair.com/web3convention/registration/Site/Register'
		}
	],
	[ENavItem.PARTNER]: [
		{
			title: 'Previous Partner',
			path: '/previous-partner'
		},
		{
			title: 'Partner with Us',
			path: 'https://w3con.eventsair.com/SponsorshipPortal/Account/Login?ReturnUrl=%2FSponsorshipPortal%2Fweb3convention%2Fsponsorship'
		}
	],
	[ENavItem.SPONSOR]: [
		{
			title: 'Why Sponsor?',
			path: '/why-sponsor'
		}
	]
};

export default navItemsConfig;
