import React from 'react';
import Table from '../../../../app/components/table';
import SwitchButton from '../../../../app/components/button/SwitchButton';

function CinemaList() {
	return (
		<div>
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
					'Tác  vụ',
				]}
				row={(row) => {
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
								<span className="truncate">Nguyễn Trương Khánh Hoàng</span>
							</div>
							<div className="py-3 truncate">
								<span className="truncate">hn26677@gmail.com</span>
							</div>
							<div className="py-3">
								<span>Nam</span>
							</div>
							<div className="py-3">
								<span className="truncate">0363855850</span>
							</div>
							<div className="py-3">
								<span>30/10/2003</span>
							</div>
							<div className="py-3">
								<span>1000</span>
							</div>
							<div className="py-3">
								<SwitchButton
									enabled={row.isActive}
									setEnabled={() => {
										return !row.isActive;
									}}
								/>
							</div>
							<div className="py-3">...</div>
						</>
					);
				}}
				initialState={[
					{
						img: '',
						name: 'Nguyễn Trương Khánh Hoàng',
						gender: 'Nam',
						phone_number: '0363855850',
						isActive: false,
					},
					{
						img: '',
						name: 'Nguyễn Trương Khánh Hoàng',
						gender: 'Nam',
						phone_number: '0363855850',
						isActive: true,
					},
					{
						img: '',
						name: 'Nguyễn Trương Khánh Hoàng',
						gender: 'Nam',
						phone_number: '0363855850',
						isActive: false,
					},
				]}
			/>
		</div>
	);
}

export default CinemaList;
