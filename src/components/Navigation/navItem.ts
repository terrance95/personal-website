export type navItemsType = {
	title: string;
	to: string;
};

const navItems: navItemsType[] = [
	{ title: 'Home', to: '/' },
	{ title: 'Writings', to: '/posts' },
	{ title: 'Side Hustles', to: '#' },
	{ title: 'About Me', to: '/about' },
];

export default navItems;
