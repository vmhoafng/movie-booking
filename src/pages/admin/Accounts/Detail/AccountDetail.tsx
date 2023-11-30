import Title from '@/app/components/Title';
import { ENDPOINTS, getEndPoint } from '@/app/constants/endpoint';
import { IUser } from '@/app/types/account';
import { Axios } from '@/app/utils/api';
import ItemNotFound from '@/pages/error/ItemNotFound';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function AccountDetail() {
	const { userId } = useParams();
	const [data, setData] = useState<IUser>();
	const [isError, setIsError] = useState<boolean>(false);
	useEffect(() => {
		const response = Axios.axiosGetWithToken(
			getEndPoint(ENDPOINTS.ADMIN.ACCOUNT.DETAIL, {
				userId: userId,
			})
		);
		toast.promise(response, {
			success: (data) => {
				//@ts-ignore
				setData(data.data);
				return '';
			},
			error: (err) => {
				setIsError(true);
				return '';
			},
		});
	}, [userId]);

	if (isError) return <ItemNotFound />;

	return (
		<div className="flex gap-[20px]">
			<div className="flex flex-col gap-4  flex-[50%]">
				<div className=" flex shadow-2xl items-center px-4 py-2 rounded border border-borderColor">
					<div className="rounded-full overflow-hidden">
						<img
							src={data?.avatar || ''}
							className="w-[96px] h-[96px]"
							alt={data?.full_name}
						/>
					</div>
					<div className="ml-auto text-center ">
						<p>{data?.full_name || ''}</p>
						<div className="px-2 mt-2 mx-auto py-1 bg-white rounded-2xl w-[120px] text-center text-bgPrimary">
							<p className="text-sm">{data?.role}</p>
						</div>
						<div className="mt-2">
							<p className="text-sm">
								Số điểm tích lũy:
								<span className="text-highlight ">{data?.point}</span>
							</p>
						</div>
					</div>
				</div>

				<div className=" shadow-2xl px-4 py-2 rounded  border border-borderColor">
					<Title active>Thông tin</Title>
					<div className="grid grid-cols-2 mt-4 gap-y-2">
						<div className="flex gap-5">
							<p>Họ và Tên:</p>
							<p>{data?.full_name || ''}</p>
						</div>
						<div className="flex gap-5">
							<p>Giới tính:</p>
							<p>{data?.gender}</p>
						</div>
						<div className="flex gap-5">
							<p>Ngày sinh:</p>
							<p>{data?.date_of_birth || 'Không cung cấp'}</p>
						</div>
					</div>
				</div>
				<div className=" shadow-2xl px-4 py-2 min-h-[500px] rounded  border border-borderColor">
					<Title active>Bình luận</Title>
					<div className="flex gap-5 ">
						<div className="mt-4">Đang trong quá trình triển khai...</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 pt-16 flex-[50%]">
				<div className=" shadow-2xl px-4 py-2 rounded  border border-borderColor">
					<Title active>Liên hệ</Title>
					<div className="mt-4 ">
						<div className="flex gap-5">
							<p>Email:</p>
							<p>{data?.email || ''}</p>
						</div>
						<div className="flex gap-5">
							<p>Số điện thoại:</p>
							<p>{data?.phone_number || 'Không cung cấp'}</p>
						</div>
					</div>
				</div>
				<div className=" shadow-2xl px-4 py-2 rounded  border border-borderColor">
					<Title active>Tài khoản</Title>
					<div className="flex gap-5">
						<div className="mt-4">
							<p>
								{data?.verify
									? 'Tài khoản đã được xác thực email'
									: 'Tài khoản chưa xác thực email'}
							</p>
						</div>
					</div>
				</div>
				<div className=" shadow-2xl px-4 py-2 min-h-[190px] rounded  border border-borderColor">
					<Title active>Bảo mật</Title>
					<div className="flex gap-5 ">
						<div className="mt-4">Đang trong quá trình triển khai...</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AccountDetail;
