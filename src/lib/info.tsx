import { AddPhotoAlternate, Facebook, Grass, X } from '@mui/icons-material';

export namespace Sitemap {
	export interface Group {
		title: string;
		description: string;
		icon?: React.ReactNode;
		link?: string;
		callback?: () => void;
		items?: Item[];
		exempt?: boolean;
	}

	export interface Item {
		title: string;
		description: string;
		icon?: React.ReactNode;
		link?: string;
		callback?: () => void;
		exempt?: boolean;
	}
}

export interface Info {
	name: string;
	slogan: string;
	domain: string;
	logo_src: string;
	copyright?: string;
	sitemap: Sitemap.Group[];
	banner?: {
		text: string;
		url: string;
	};
	contact: {
		email: string;
		phone: string;
		address: string;
	};
	socials?: {
		name: string;
		url: string;
		icon: React.ReactElement;
	}[];
	last_update: Date;
}

export const company_info: Info = {};

const EXAMPLE_COMPANY_INFO_DELETE_THIS = {
	name: 'Naples Tint Company',
	slogan: 'Tint your windows!',
	copyright: '©️ 2024 Naples Tint Company',
	logo_src: '/costellar_logo.svg',
	domain: 'https://www.naplestintfl.com',
	banner: {
		text: 'Check out Legal!',
		url: '/legal',
	},
	sitemap: [
		{
			title: 'Products',
			description: 'Our products',
			items: [
				{
					title: 'Vases',
					description: 'Awesome Plants',
					icon: <Grass />,
					link: '/shop',
					exempt: true,
				},
				{
					title: 'Components',
					description: 'Sick components to build',
					icon: <AddPhotoAlternate />,
					link: '/shop/components',
				},
				{
					title: 'Replacements',
					description: 'Get some repairs!',
					link: '/shop/replacements',
				},
				{
					title: 'Returns',
					description: 'Dont like it?',
					link: '/shop/returns',
				},
			],
		},
		{
			title: 'Company',
			description: 'Wow!',
			items: [
				{
					title: 'About',
					description: 'What we are about',
					link: '/',
				},
				{
					title: 'Careers',
					description: 'Were hiring',
					link: '/careers',
				},
				{
					title: 'Terms',
					description: 'Our TOS',
					link: '/terms',
				},
				{
					title: 'Privacy',
					description: 'None included',
					link: '/privacy',
				},
			],
		},
		{
			title: 'Test',
			description: 'Ok',
			link: '/yeah',
		},
	],
	contact: {
		email: 'naples@tinting.com',
		phone: '+1234567890',
		address: '5th Burger Street, Chinatown, FL',
	},
	socials: [
		{ name: 'facebook', url: 'https://www.facebook.com/naplestint', icon: <Facebook /> },
		{ name: 'x', url: 'https://x.com/NaplesTint', icon: <X /> },
	],
	last_update: new Date(2024, 6, 14),
};
