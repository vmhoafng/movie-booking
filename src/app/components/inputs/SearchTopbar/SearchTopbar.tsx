import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import useSearchTopbar from './useSearchTopbar';

function SearchTopBar() {
	const { handleOnChange, searchValue } = useSearchTopbar();

	return (
		<label
			htmlFor="search-input"
			className=" flex border rounded-[32px] px-[16px] py-[10px] gap-4 items-center"
		>
			<div>
				<MagnifyingGlassIcon className="h-5 w-5" />
			</div>
			<div className="w-full">
				<input
					onChange={handleOnChange}
					value={searchValue}
					id="search-input"
					name="search-input"
					type="text"
					placeholder="Tìm kiếm"
					className="border-none bg-transparent focus:outline-none"
				/>
			</div>
		</label>
	);
}

export default SearchTopBar;
