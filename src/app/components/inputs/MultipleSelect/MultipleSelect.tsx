import React, { useEffect, useRef, useState } from 'react';
import { ChipOptionProps, MultipleSelectProps } from './MultipleSelect.type';
import { Controller, useController } from 'react-hook-form';
import { Listbox, Transition } from '@headlessui/react';
import { SelectOption } from '../SelectInput';
import { PlusIcon } from '@heroicons/react/20/solid';
import { CheckIcon } from '@heroicons/react/24/solid';
import { InvalidTokenError } from 'jwt-decode';

const ChipOption = ({ children, className }: ChipOptionProps) => {
	return (
		<div
			className={`min-w-[120px] h-[30px] py-1 text-[13px] rounded-3xl text-center  border-borderColor border ${className}`}
		>
			<span>{children}</span>
		</div>
	);
};

function MultipleSelect({
	id,
	errors,
	control,
	options,
	label,
	register,
	value,
}: MultipleSelectProps) {
	const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>(
		value || []
	);
	useEffect(() => {
		if (value) setSelectedOptions(value);
	}, [value]);

	return (
		<>
			<Controller
				name={id}
				rules={{
					required: true,
				}}
				control={control}
				render={({ field }) => {
					return (
						<Listbox
							as={'div'}
							className={' mb-3 relative flex items-center '}
							multiple
							value={selectedOptions}
							onChange={(e) => {
								field.onChange(e);
								setSelectedOptions(e);
							}}
						>
							<Listbox.Label className="flex-[0_0_160px] text-white/70">
								{label}
							</Listbox.Label>
							<div className="relative flex-1 py-1">
								<Listbox.Button
									className={
										' h-full w-full rounded flex-wrap flex gap-2 transition-all duration-100 ease-in  '
									}
								>
									{(selectedOptions || []).map((o) => {
										return <ChipOption key={o.value}>{o.label}</ChipOption>;
									})}

									<ChipOption className="border-dashed border-2 flex items-center justify-center">
										<PlusIcon className="h-4  w-4 " />
									</ChipOption>
								</Listbox.Button>
								<div className="">
									{errors?.[id] && (
										<div className="absolute mt-2  text-sm text-red-500/80 ">
											{errors[id]?.message?.toString()}
										</div>
									)}
								</div>
								<Transition
									as={React.Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<Listbox.Options
										as="ul"
										className="absolute z-[1] mt-1 max-h-60 w-[420px] overflow-y-scroll py-3 px-4 bg-[#31375A] border-2 rounded"
									>
										{options
											.filter((option) => option.label !== '')
											.map((option, index) => {
												return (
													<Listbox.Option
														as="li"
														key={option.value}
														className={`text-[15px]  cursor-pointer`}
														value={option}
													>
														{({ active, selected }) => (
															<div
																className={`px-2  py-1 text-sm items-center gap-1 transition-all duration-100 ease-in 

																} flex  ${active ? 'bg-slate-500' : ''} ${selected ? '' : ''}`}
															>
																{selected && (
																	<CheckIcon className="mr-2 h-5 w-5" />
																)}
																<p>{option.label}</p>
															</div>
														)}
													</Listbox.Option>
												);
											})}
									</Listbox.Options>
								</Transition>
							</div>
						</Listbox>
					);
				}}
			/>
		</>
	);
}

export default MultipleSelect;
