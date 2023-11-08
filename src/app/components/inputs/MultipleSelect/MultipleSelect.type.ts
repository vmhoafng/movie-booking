import { SelectOption } from '../SelectInput';
import { UseFormRegister, FieldValues, Control } from 'react-hook-form';
export type ChipOptionProps = {
	children: JSX.Element | string;
	className?: string;
};

export type MultipleSelectProps = {
	id: string;
	control: Control;
	errors?: any;
	options: SelectOption[];
	register?: any;
	value?: any;
	label: string;
};
