import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const movies = [
	{ id: 1, name: 'Wade Cooper' },
	{ id: 2, name: 'Arlene Mccoy' },
	{ id: 3, name: 'Devon Webb' },
	{ id: 4, name: 'Tom Cook' },
	{ id: 5, name: 'Tanya Fox' },
	{ id: 6, name: 'Hellen Schmidt' },
];

export default function Example() {
	const [selected, setSelected] = useState({});
	const [query, setQuery] = useState('');

	const filteredMovies =
		query === ''
			? movies
			: movies.filter((movie) =>
					movie.name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  );

	return (
		<div className="w-full">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative">
					<div className="flex px-4 items-center justify-between py-[6.5px] md:py-[8.5px] lg:py-[10.5px]  relative rounded-full bg-white/10 w-full h-full ">
						<div className=" flex gap-[10px] md:gap-[20px] lg:gap-[30px]   items-center  ">
							<button className="h-full bg-transparent border-none">
								<MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5 text-white font-bold" />
							</button>
							<Combobox.Input
								className="w-full text-sm md:text-[15px] lg:text-[16px] flex-1  text-white placeholder:text-white/50  bg-transparent border-none outline-none"
								displayValue={(person) => person.name}
								placeholder="Search films..."
								onChange={(event) => setQuery(event.target.value)}
							/>
						</div>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery('')}
					>
						<Combobox.Options className="absolute w-full">
							{filteredMovies.length === 0 && query !== '' ? (
								<div className="">Nothing found.</div>
							) : (
								filteredMovies.map((person) => (
									<Combobox.Option
										key={person.id}
										className={({ active }) =>
											` cursor-default select-none list-none py-2 px-4 pr-4 ${
												active ? 'bg-teal-600 text-white' : 'text-gray-900'
											}`
										}
										value={person}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected ? 'font-medium' : 'font-normal'
													}`}
												>
													{person.name}
												</span>
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
}
