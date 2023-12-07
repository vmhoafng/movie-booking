import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRedux } from '@/app/hooks';
import { IMovie } from '@/app/types/movie';
import { Link, useNavigate } from 'react-router-dom';

export default function Example() {
    const [selected, setSelected] = useState({});
    const [query, setQuery] = useState('');
    const { dispatch, appSelector } = useRedux();
    const { movies } = appSelector((state) => state.movies);
    const [openOptions, setOpenOptions] = useState(false);
    const navigate = useNavigate();
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
                          .includes(query.toLowerCase().replace(/\s+/g, '')),
              );

    return (
        <div className="w-full">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative">
                    <div className=" px-4 items-center justify-between py-[6.5px] md:py-[8.5px] lg:py-[10.5px]  relative rounded-full bg-white/10 w-full ">
                        <div className=" flex gap-[10px] md:gap-[20px] lg:gap-[30px] items-center  ">
                            <button className="h-full bg-transparent border-none">
                                <MagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5 text-white font-bold" />
                            </button>
                            <Combobox.Input
                                className="w-full text-sm md:text-[15px] lg:text-[16px] flex-1  text-white placeholder:text-white/50  bg-transparent border-none outline-none"
                                displayValue={(movie: IMovie) => movie.name}
                                placeholder="Search films..."
                                onChange={(event) => {
                                    setQuery(event.target.value);
                                    setOpenOptions(true);
                                }}
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
                        <Combobox.Options
                            static={openOptions}
                            className="absolute w-full text-white bg-bgPrimaryBar overflow-y-auto max-h-[400px] shadow-black"
                        >
                            {filteredMovies.length === 0 && query !== '' ? (
                                <div className="">Nothing found.</div>
                            ) : (
                                filteredMovies.map((movie: IMovie) => (
                                    <Combobox.Option
                                        key={movie.id}
                                        className={({ active }) =>
                                            ` cursor-default select-none list-none border-b border-white/30 ${
                                                active
                                                    ? 'bg-teal-600 text-white'
                                                    : 'text-gray-900'
                                            }`
                                        }
                                        value={''}
                                        onClick={() => {
                                            setOpenOptions(false);
                                        }}
                                    >
                                        <div
                                            onClick={() => {
                                                navigate(
                                                    `/movies/${movie.slug}`,
                                                );
                                            }}
                                            className="flex flex-col justify-start items-center lg:flex-row text-white"
                                        >
                                            <div className="md:h-[100px] md:w-[200px] p-2">
                                                <img
                                                    src={
                                                        movie.horizontal_poster
                                                    }
                                                    className="h-full w-full object-cover"
                                                    alt={movie.name}
                                                />
                                            </div>
                                            <div className="px-2">
                                                <p
                                                    className={`block truncate ${'font-medium'}`}
                                                >
                                                    {movie.name}
                                                </p>
                                                <p className="text-sm md:text-base text-white/50">
                                                    {movie.sub_name}
                                                </p>
                                            </div>
                                        </div>
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
