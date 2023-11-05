export type CRUDButtonProps = {
	variant: 'Add' | 'Edit' | 'Cancel' | 'Save';
	children: JSX.Element | string;
	type?: 'button' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
};
