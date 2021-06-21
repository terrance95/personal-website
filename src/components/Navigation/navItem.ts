export type navItemsType = {
	title: string;
	to: string;
};

const navItems: navItemsType[] = [
	{ title: 'Home', to: '/' },
	{ title: 'About Me', to: '/about' },
	{ title: 'Writings', to: '/posts' },
	{ title: 'Contact', to: '#' },
];

export default navItems;
