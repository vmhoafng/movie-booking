import React, { ReactElement } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
type HeroIconType = React.FC<React.SVGProps<SVGSVGElement>>;
export type SelectInputProps = {
	id: string;
	label?: string;
	required?: boolean;
	value?: SelectOption;
	disabled?: boolean;
	name: string;
	register?: any;
	errors?: FieldErrors;
	endIcon?: HeroIconType;
	placeholder?: string;
	inputClassName?: string;
	optionClassName?: string;
	control?: any;
	buttonClassName?: string;
	options: SelectOption[];
	onChange?: (e: SelectOption) => void;
	onClick?: (e?: SelectOption) => void;
};

export type SelectOption = {
	label: string;
	value: string | number;
};
