import { ENavItem } from '@/constants/nav';
import { ISubNavItem } from '@/interfaces/nav';

/* Nav bar title by ENavItem */
export const NAV_ITEM_TITLE: Record<ENavItem, string> = {
	[ENavItem.HOME]: 'home',
	[ENavItem.PAGE]: 'pages',
	[ENavItem.SPEAKER]: 'speakers',
	[ENavItem.EVENT]: 'events',
	[ENavItem.BLOG]: 'blog',
	[ENavItem.SHOP]: 'shop',
	[ENavItem.ELEMENT]: 'elements'
};

const subNavItemsConfig: Record<ENavItem, ISubNavItem[]> = {
	[ENavItem.HOME]: [
		{
			title: 'Conference Home',
			path: '/'
		},
		{
			title: 'Business Forum',
			path: '/comingSoon'
		},
		{
			title: 'Tech Summit',
			path: '/comingSoon'
		},
		{
			title: 'Music Events',
			path: '/comingSoon'
		},
		{
			title: 'Medical Congress',
			path: '/comingSoon'
		},
		{
			title: 'Digital Conference',
			path: '/comingSoon'
		},
		{
			title: 'Design Conference',
			path: '/comingSoon'
		},
		{
			title: 'Landing',
			path: '/comingSoon'
		}
	],
	[ENavItem.PAGE]: [
		{
			title: 'About Event',
			path: '/comingSoon'
		},
		{
			title: 'Our Partners',
			path: '/comingSoon'
		},
		{
			title: 'Music Performers',
			path: '/comingSoon'
		},
		{
			title: 'Coming Soon',
			path: '/comingSoon'
		},
		{
			title: 'Get Tickets',
			path: '/comingSoon'
		},
		{
			title: 'Support & FAQ',
			path: '/comingSoon'
		},
		{
			title: 'Venue Info',
			path: '/comingSoon'
		},
		{
			title: 'Event Gallery',
			path: '/comingSoon'
		},
		{
			title: 'Registration',
			path: '/comingSoon'
		},
		{
			title: 'Error Page',
			path: '/comingSoon'
		}
	],
	[ENavItem.SPEAKER]: [
		{
			title: 'Apply to Speak',
			path: '/comingSoon'
		},
		{
			title: 'Speakers',
			path: '/comingSoon'
		},
		{
			title: 'Speaker Light',
			path: '/comingSoon'
		},
		{
			title: 'Speaker Dark',
			path: '/comingSoon'
		}
	],
	[ENavItem.EVENT]: [
		{
			title: 'Event Single',
			path: '/comingSoon'
		},
		{
			title: 'Schedule Dark',
			path: '/comingSoon'
		},
		{
			title: 'Schedule 2',
			path: '/comingSoon'
		},
		{
			title: 'Schedule 3',
			path: '/comingSoon'
		}
	],
	[ENavItem.BLOG]: [
		{
			title: 'Blog Standard',
			path: '/comingSoon'
		},
		{
			title: 'Blog Custom',
			path: '/comingSoon'
		},
		{
			title: 'Blog Masonry',
			path: '/comingSoon'
		},
		{
			title: 'Post Types',
			path: '/comingSoon'
		}
	],
	[ENavItem.SHOP]: [
		{
			title: 'Shop List',
			path: '/comingSoon'
		},
		{
			title: 'Single Types',
			path: '/comingSoon'
		},
		{
			title: 'Shop Layouts',
			path: '/comingSoon'
		},
		{
			title: 'Shop Pages',
			path: '/comingSoon'
		}
	],
	[ENavItem.ELEMENT]: [
		{
			title: 'Classic',
			path: '/comingSoon'
		},
		{
			title: 'Infographic',
			path: '/comingSoon'
		},
		{
			title: 'Interactive',
			path: '/comingSoon'
		},
		{
			title: 'Typography',
			path: '/comingSoon'
		}
	]
};

export default subNavItemsConfig;
