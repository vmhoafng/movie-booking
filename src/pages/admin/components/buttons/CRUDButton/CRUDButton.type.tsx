export type CRUDButtonProps = {
	variant: 'Add' | 'Edit' | 'Cancel' | 'Save' | 'Delete';
	children: JSX.Element | string;
	type?: 'button' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
	to?: string;
};
