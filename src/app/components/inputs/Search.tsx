import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRedux } from '@/app/hooks';
import { IMovie } from '@/app/types/movie';
import { Link } from 'react-router-dom';

export default function Example() {
	const [selected, setSelected] = useState({});
	const [query, setQuery] = useState('');
	const { dispatch, appSelector } = useRedux();
	const { movies } = appSelector((state) => state.movies);

	const filteredMovies =
		query === ''
			? movies
			: movies.filter(
					(movie) =>
						movie.name
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.toLowerCase().replace(/\s+/g, '')) ||
						movie.sub_name
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.toLowerCase().replace(/\s+/g, ''))
			  );

	return (
		<div className="w-full">
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative">
					<div className=" px-4 items-center justify-between py-[6.5px] md:py-[8.5px] lg:py-[10.5px]  relative rounded-full bg-white/10 w-full ">
						<div className=" flex gap-[10px] md:gap-[20px] lg:gap-[30px]   items-center  ">
							<button className="h-full bg-transparent border-none">
								<MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5 text-white font-bold" />
							</button>
							<Combobox.Input
								className="w-full text-sm md:text-[15px] lg:text-[16px] flex-1  text-white placeholder:text-white/50  bg-transparent border-none outline-none"
								displayValue={(movie: IMovie) => movie.name}
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
						<Combobox.Options className="absolute w-full text-white border bg-bgPrimaryBar">
							{filteredMovies.length === 0 && query !== '' ? (
								<div className="">Nothing found.</div>
							) : (
								filteredMovies.map((movie: IMovie) => (
									<Combobox.Option
										key={movie.id}
										className={({ active }) =>
											` cursor-default select-none list-none py-2 px-4 pr-4 ${
												active ? 'bg-teal-600 text-white' : 'text-gray-900'
											}`
										}
										value={movie}
									>
										{({ selected, active }) => (
											<Link
												onClick={setSelected}
												to={`/movies/${movie.slug}`}
												replace
											>
												<div className="flex flex-col lg:flex-row text-white">
													<div className="h-[180px] flex-[0_0_120px]">
														<img
															src={movie.poster}
															className="h-full w-full"
															alt={movie.name}
														/>
													</div>
													<div className="px-2">
														<p
															className={`block truncate ${
																selected ? 'font-medium' : 'font-normal'
															}`}
														>
															{movie.name}
														</p>
														<p className="text-sm md:text-base text-white/50">
															{movie.sub_name}
														</p>
														<div className="flex gap-2 flex-wrap">
															{(movie.genre || []).map((g) => {
																return (
																	<div className=" text-xs min-w-[70px] py-1 text-center border rounded-md ">
																		{g.name}
																	</div>
																);
															})}
														</div>
													</div>
												</div>
											</Link>
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
