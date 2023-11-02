import React, { useEffect } from 'react';
import { UnderlineInputProps } from './UnderlineInput.type';

const variants = {
	primary: 'text-2xl font-bold',
	secondary: 'text-base text-white/60',
	default: 'text-[15px] ',
};

function UnderlineInput({
	id,
	name,
	label,
	disabled,
	errors,
	register,
	containerClassName,
	variant = 'default',
}: UnderlineInputProps) {
	return (
		<label
			className={`${containerClassName || ''} ${
				label ? 'flex items-center' : ''
			} ${variants[variant]} relative `}
			htmlFor={id}
		>
			{label && <p className="text-white/70 flex-[0_0_160px]">{label}</p>}
			<input
				id={id}
				name={name}
				{...(register && register(id))}
				className={`border-b border-white/10 bg-transparent outline-none focus:border-highlight transition-all duration-150  ${
					label && 'flex-1'
				}`}
				type="text"
			/>
		</label>
	);
}

export default UnderlineInput;
