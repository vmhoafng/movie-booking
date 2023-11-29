import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { useRef } from 'react';

type SelectProps = {
	children: JSX.Element | React.ReactElement | JSX.Element[];
	handleOnChange: (value: string) => void;
};

function Select({ children, handleOnChange }: SelectProps) {
	const selectRef = useRef<HTMLSelectElement>(null);
	return (
		<label htmlFor="cinema1" className="relative">
			test
			<select
				ref={selectRef}
				name="cinema"
				id="cinema1"
				title="cinema"
				className="bg-[#EFEFEF]/20 py-[7.5px] px-[15px] block border appearance-none ml-auto border-[#fff]/80 rounded "
				onChange={(e) => {
					handleOnChange(e.target.value);
				}}
			>
				{children}
			</select>
			<div
				onClick={() => {
					selectRef.current!.click();
				}}
				className="absolute right-2 bottom-1/2 translate-y-1/2"
			>
				<ChevronDownIcon className="h-5 w-5" />
			</div>
		</label>
	);
}

export default Select;
