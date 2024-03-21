export const SidebarData = [
	{
		title: 'Home',
		path: '/home',

		subNav: [],
	},
	{
		title: 'Profile',
		path: '/user/$username',

		subNav: [],
	},
	{
		title: 'Create',
		subNav: [
			{
				title: 'Project',
				path: '/projects/new',
			},
			{
				title: 'Article',
				path: '/articles/new',
			},
		],
	},
	{ title: 'Articles', path: '/articles' },

	{
		title: 'About',
		path: '/about',
	},
];

export interface SidebarItem {
	title: string;
	path?: string;
	subNav?: SidebarItem[];
}
