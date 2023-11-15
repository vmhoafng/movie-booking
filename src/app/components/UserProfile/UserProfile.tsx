import { useRedux } from '@/app/hooks';
import React from 'react';

function UserProfile() {
	const { appSelector } = useRedux();
	const { full_name, role } = appSelector((state) => state.auth.user);
	return (
		<div className="flex justify-center items-center gap-[10px]">
			<div className="text-sm">
				<span className="block">{full_name}</span>
				<span className="block text-right text-white/60">{role}</span>
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
