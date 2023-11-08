import React, { useEffect, useState } from 'react';
import { SelectInputProps, SelectOption } from './SelectInput.type';
import { Listbox, Transition } from '@headlessui/react';
import { Controller } from 'react-hook-form';

function SelectInput({
	id,
	inputClassName,
	name,
	disabled,
	endIcon: Icon,
	errors,
	placeholder,
	register,
	required,
	options,
	optionClassName,
	onChange,
	value,
	control,
	buttonClassName,
}: SelectInputProps) {
	const [selected, setSelected] = useState<SelectOption>(
		placeholder ? { value: '', label: placeholder } : options[0]
	);

	useEffect(() => {
		if (!value) {
			setSelected(placeholder ? { value: '', label: placeholder } : options[0]);
		} else {
			setSelected(value);
		}
	}, [value, options, placeholder]);

	if (control) {
		return (
			<Controller
				name={id}
				control={control}
				render={({ field }) => (
					<div className={inputClassName}>
						<Listbox
							value={selected}
							onChange={(e) => {
								setSelected(e);
								field.onChange(e.value);
							}}
						>
							<div className="relative">
								<Listbox.Button
									className={
										!buttonClassName
											? 'bg-[#EFEFEF]/20 relative w-full rounded border text-left py-[1px]  pl-[15px]'
											: buttonClassName
									}
								>
									<span
										className={`block truncate text-[15px] ${
											!selected.value && 'text-slate-300'
										}`}
									>
										{selected.label}
									</span>
									{Icon && (
										<span className="absolute inset-y-0 right-0 pr-[15px] flex items-center">
											{/* @ts-ignore */}
											{<Icon className="w-5 h-5" />}
										</span>
									)}
								</Listbox.Button>
								<Transition
									as={React.Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Listbox.Options className="absolute z-[1] mt-1 max-h-60 overflow-y-scroll py-3 px-4 bg-[#31375A] border-2 rounded w-full">
										{options
											.filter((option) => option.label !== '')
											.map((option) => {
												return (
													<Listbox.Option
														key={option.value}
														className={`text-[15px] ${optionClassName} cursor-pointer`}
														value={option}
													>
														{option.label}
													</Listbox.Option>
												);
											})}
									</Listbox.Options>
								</Transition>
							</div>
						</Listbox>
					</div>
				)}
			/>
		);
	}

	return (
		<div className={inputClassName}>
			<Listbox
				value={selected}
				{...(register && register(name))}
				onChange={(e: SelectOption) => {
					onChange && onChange(e);
					setSelected(e);
				}}
			>
				<div className={`relative `}>
					<Listbox.Button
						className={
							!buttonClassName
								? 'bg-[#EFEFEF]/20 relative w-full rounded border text-left py-[1px]  pl-[15px]'
								: buttonClassName
						}
					>
						<span
							className={`block truncate text-[15px] ${
								!selected.value && 'text-slate-300'
							}`}
						>
							{selected.label}
						</span>
						{Icon && (
							<span className="absolute inset-y-0 right-0 pr-[15px] flex items-center">
								<Icon className="w-5 h-5" />
							</span>
						)}
					</Listbox.Button>
					<Transition
						as={React.Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute mt-1 z-30 bg-bgPrimary border border-borderColor rounded w-full flex flex-col">
							{options
								.filter((option) => option.label !== '')
								.map((option) => {
									return (
										<Listbox.Option
											key={option.value}
											className={`text-[15px] ${optionClassName} cursor-pointer`}
											value={option}
										>
											{option.label}
										</Listbox.Option>
									);
								})}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}

export default SelectInput;
