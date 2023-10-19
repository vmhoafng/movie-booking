import React from 'react';
import SearchTopbar from '../inputs/SearchTopbar';
import UserProfile from '../UserProfile';

function Topbar() {
	return (
		<div className=" h-20 bg-[#021234] border-[#021339] border-b-2 ">
			<div className=" container mx-auto flex items-center py-4 ">
				<div className="flex-[0_0_42%]">
					<SearchTopbar />
				</div>
				<div className="ml-auto">
					<UserProfile />
				</div>
			</div>
		</div>
	);
}

export default Topbar;
