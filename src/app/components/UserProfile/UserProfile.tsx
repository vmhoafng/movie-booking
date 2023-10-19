import React from 'react';
import useSearchTopbar from '../inputs/SearchTopbar/useSearchTopbar';

function UserProfile() {
	return (
		<div className="flex gap-[10px]">
			<div className="text-[15px]">
				<span className="block">Nguyễn Trương Khánh Hoàng</span>
				<span className="block text-right text-[#D9D9D9]">Admin</span>
			</div>
			<div className="h-10 w-10">
				<img
					src="/assets/icons/account-circle.svg"
					alt="user-img"
					className="h-full"
				/>
			</div>
		</div>
	);
}

export default UserProfile;
