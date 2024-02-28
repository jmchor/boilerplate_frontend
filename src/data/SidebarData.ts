export const SidebarData = [
	{
		title: 'Home',
		path: '/',

		subNav: [],
	},
	{
		title: 'Dashboard',
		subNav: [
			{
				title: 'Home',
				path: '/',
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
		title: 'Test',
		subNav: [
			{
				title: 'Home',
				path: '/',
			},
			{
				title: 'Dashboard Again',
				path: '/dashboard',
			},
		],
	},
];

export interface SidebarItem {
	title: string;
	path?: string;
	subNav?: SidebarItem[];
}
