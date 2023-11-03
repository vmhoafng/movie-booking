import React from 'react';
import { CRUDButtonProps } from './CRUDButton.type';

const common = 'text-[12px]  ';
const box = (variant: 'add' | 'edit' | 'save') =>
	`py-2
	 px-3 
	 block 
	 rounded 
	 w-[120px] 
	 bg-admin-button-${variant}/20 
	 text-admin-button-${variant} 
	 border border-admin-button-${variant} 
	 hover:bg-admin-button-${variant} 
	 hover:text-white 
	 hover:border-white 
	 transform 
	 transition 
	 duration-300 `;

const variants = {
	Add: `py-2
	px-3 
	block 
	rounded 
	w-[120px] 
	bg-admin-button-add/20 
	text-admin-button-add 
	border border-admin-button-add 
	hover:bg-admin-button-add 
	hover:text-white 
	hover:border-white 
	transform 
	transition 
	duration-300 `,
	Edit: `py-2
	px-3 
	block 
	rounded 
	w-[120px] 
	bg-admin-button-edit/20 
	text-admin-button-edit 
	border border-admin-button-edit 
	hover:bg-admin-button-edit 
	hover:text-white 
	hover:border-white 
	transform 
	transition 
	duration-300`,
	Cancel: `text-white/50 hover:underline hover:text-white`,
	Save: `py-2
	px-3 
	block 
	rounded 
	w-[120px] 
	bg-admin-button-save/20 
	text-admin-button-save 
	border border-admin-button-save 
	hover:bg-admin-button-save 
	hover:text-white 
	hover:border-white 
	transform 
	transition 
	duration-300`,
};

function CRUDButton({
	variant,
	children,
	onClick,
	type = 'button',
	disabled = false,
}: CRUDButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={` ${common} ${variants[variant]}`}
		>
			{children}
		</button>
	);
}

export default CRUDButton;
