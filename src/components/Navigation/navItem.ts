export type navItemsType = {
	title: string;
	to: string;
};

const navItems: navItemsType[] = [
	{ title: 'Home', to: '/' },
	{ title: 'Writings', to: '/posts' },
	{ title: 'Side Hustles', to: '#' },
	{ title: 'Photos', to: '/photos' },
];

export default navItems;
