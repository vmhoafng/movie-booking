import { FieldError } from 'react-hook-form';

export type UnderlineInputProps = {
	id: string;
	disabled: boolean;
	name: string;
	register?: any;
	errors?: FieldError;
};
