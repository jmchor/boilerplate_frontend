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
		title: 'Dashboard',
		subNav: [
			{
				title: 'Home',
				path: '/home',
			},
			{
				title: 'Another',
				path: '/dashboard',
			},
			{
				title: 'Dashboard',
				path: '/dashboard',
			},
		],
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
];

export interface SidebarItem {
	title: string;
	path?: string;
	subNav?: SidebarItem[];
}
