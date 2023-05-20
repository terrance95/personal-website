export type navItemsType = {
	title: string;
	to: string;
};

const navItems: navItemsType[] = [
	{ title: 'Home', to: '/' },
	{ title: 'About Me', to: '/about' },
	// { title: 'Advice', to: '/advice' },
	{ title: 'Contact', to: '#' },
];

export default navItems;
