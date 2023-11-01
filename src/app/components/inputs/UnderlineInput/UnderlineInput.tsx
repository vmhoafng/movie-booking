import React from 'react';
import { UnderlineInputProps } from './UnderlineInput.type';

function UnderlineInput({
	id,
	name,
	disabled,
	errors,
	register,
}: UnderlineInputProps) {
	return (
		<label htmlFor="">
			<input type="text" />
		</label>
	);
}

export default UnderlineInput;
