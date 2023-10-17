import React, { ReactElement } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type SelectInputProps = {
	id: string;
	label?: string;
	required?: boolean;
	value?: SelectOption;
	disabled?: boolean;
	name: string;
	register?: any;
	errors?: FieldErrors;
	endIcon?: React.ReactNode | JSX.Element;
	placeholder?: string;
	inputClassName?: string;
	optionClassName?: string;
	options: SelectOption[];
	onChange: (e: SelectOption) => void;
};

export type SelectOption = {
	label: string;
	value: string;
};
