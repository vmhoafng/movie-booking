import Sidebar from './Sidebar';

export type SidebarProps = {};

export type NavItem = {
	text: string;
	to?: string;
	icon?: any;
	children?: NavItem[];
	activeIcon?: string;
};

export type NavItemDropdownProps = {
	item: NavItem;
	isChild?: boolean;
	active: string;
};
