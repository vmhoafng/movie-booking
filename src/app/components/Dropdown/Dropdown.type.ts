export type MenuItem<T> = {
	label: string;
	icon?: any;
	to?: string;
	onClick?: () => void;
};

export type DropdownProps = {
	children: JSX.Element | string | undefined;
	items: MenuItem<any>[];
	containerClassName?: string;
	buttonClassName?: string;
};
