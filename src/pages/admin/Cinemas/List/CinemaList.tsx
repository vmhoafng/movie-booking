import React from 'react';
import Table from '@/app/components/table';
import SwitchButton from '@/app/components/button/SwitchButton';
import useTable from '@/app/components/table/useTable';

function CinemaList() {
	const { data, setData } = useTable();

	const handleOnClick = (row: any) => {
		const result = data.map((user) => {
			if (user.email === row.email) {
				return {
					...user,
					verify: !row.verify,
				};
			}
			return user;
		});

		setData([...result]);
	};

	return (
		<>
			<Table
				header={[
					'Ảnh',
					'Họ tên',
					'Email',
					'Giới tính',
					'Điện thoại',
					'Ngày sinh',
					'Điểm',
					'Kích hoạt',
					'Tác vụ',
				]}
				row={(row, index) => {
					return (
						<>
							<div className="py-3">
								<img
									src={`${row.img || './assets/icons/account-circle.svg'}`}
									alt=""
									className="w-full"
								/>
							</div>
							<div className=" truncate py-3">
								<span className="truncate">{row.full_name}</span>
							</div>
							<div className="py-3 truncate">
								<span className="truncate">{row.email}</span>
							</div>
							<div className="py-3">
								<span>{row.gender ? 'Nam' : 'Nữ'}</span>
							</div>
							<div className="py-3">
								<span className="truncate">{row.phone_number}</span>
							</div>
							<div className="py-3">
								<span>{row.date_of_birth}</span>
							</div>
							<div className="py-3">
								<span>{row.point}</span>
							</div>
							<div className="py-3">
								<SwitchButton
									enabled={row.verify}
									setEnabled={() => handleOnClick(row)}
								/>
							</div>
							<div className="py-3">...</div>
						</>
					);
				}}
			/>
		</>
	);
}

export default CinemaList;
