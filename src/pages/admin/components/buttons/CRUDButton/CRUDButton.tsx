import React from 'react';
import { CRUDButtonProps } from './CRUDButton.type';
import { Link } from 'react-router-dom';

const common = 'text-[12px] text-center hover:cursor-pointer ';
const variants = {
	Add: `py-2
	px-3 
	block 
	rounded 
	min-w-[120px] 
	bg-admin-button-add/20 
	text-admin-button-add 
	border border-admin-button-add 
	hover:bg-admin-button-add 
	hover:text-white 
	transform 
	transition 
	duration-300
	font-bold `,
	Edit: `py-2 font-bold
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
	Save: `py-2 font-bold
	disabled:text-slate-50 disabled:bg-gray-600 border-slate-50 
	ease-in
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
	Delete: `py-2 font-bold
	px-3 
	block 
	rounded 
	w-[120px] 
	bg-gradientStart/20 
	text-gradientStart 
	border border-gradientStart 
	hover:bg-gradientStart 
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
	to,
	disabled = false,
}: CRUDButtonProps) {
	if (to)
		return (
			<Link
				to={to}
				className={` ${common} ${variants[variant]}`}
				relative="route"
				replace
			>
				{children}
			</Link>
		);
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
