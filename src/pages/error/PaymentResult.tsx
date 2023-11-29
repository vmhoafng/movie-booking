import Button from '@/app/components/button/Button';
import useQuery from '@/app/hooks/useQuery';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import LoadingAnimation from '@/app/components/loading/LoadingAnimation';
import { toast } from 'sonner';
import { Axios } from '@/app/utils/api';

type status = 'succeed' | 'failure';

const statuses = {
	succeed: {
		title: 'Đặt vé thành công',
		color: 'text-highlight',
		sub_title: 'Chúc bạn có những giây phút xem phim thư giãn.',
	},
	failure: {
		title: 'Đặt vé không thành công',
		color: 'text-gradientStart',
		sub_title: 'Vui lòng thử lại sau.',
	},
};

const PaymentResult = () => {
	const [status, setStatus] = useState<status>('failure');
	const [loading, setLoading] = useState<boolean>(true);
	const searchParams = useQuery();
	const id = searchParams.get('id');
	useEffect(() => {
		const response = Axios.axiosPutWithToken(`customer/payment/${id}`, {});
		toast.promise(response, {
			loading: '',
			className: 'hidden',
			success: (data) => {
				setStatus('succeed');
				setLoading(false);

				return '';
			},
			error: (err) => {
				setStatus('failure');
				setLoading(false);

				return '';
			},
		});
	}, [id]);

	if (!id) return <Navigate to={'/error'} />;
	if (id && loading)
		return (
			<div className="bg-bgPrimary absolute top-0 left-0 bottom-0 right-0 z-[10000]">
				{' '}
				<LoadingAnimation />
			</div>
		);
	return (
		<>
			{/* Background for this screen is bg-01.jpg */}
			{/* Payment result component */}
			<div className="w-full h-screen flex flex-col gap-5 pt-24 justify-start items-center">
				<img src={`./assets/icons/${status}.svg`} alt="" />
				<h1
					className={clsx(
						'text-base md:text-lg lg:text-xl font-inter font-semibold',
						statuses[status].color
					)}
				>
					{statuses[status].title}
				</h1>
				<span className="text-sm text-white/70">
					{statuses[status].sub_title}
				</span>
				<Button medium>Trang chủ</Button>
			</div>
		</>
	);
};

export default PaymentResult;
