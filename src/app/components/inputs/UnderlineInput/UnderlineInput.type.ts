import { FieldErrors } from 'react-hook-form';

export type UnderlineInputProps = {
	id: string;
	disabled?: boolean;
	name: string;
	register?: any;
	errors?: FieldErrors;
	containerClassName?: string;
	label?: string;
	variant?: 'primary' | 'secondary' | 'default';
};
