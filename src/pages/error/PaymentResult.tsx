import Button from '@/app/components/button/Button';
import useQuery from '@/app/hooks/useQuery';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import LoadingAnimation from '@/app/components/loading/LoadingAnimation';
import { toast } from 'sonner';
import { Axios } from '@/app/utils/api';
import { PATHS } from '@/app/constants/path';
import Error404 from './Error404';

type status = 'succeed' | 'failure';

const statuses = {
	succeed: {
		title: 'Đặt vé thành công',
		color: 'text-highlight',
		sub_title: 'Chúc bạn có những giây phút xem phim thư giãn.',
		icon: (
			<svg
				width={55}
				height={52}
				viewBox="0 0 55 52"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M54.4243 26.6583C54.7539 26.2813 54.7539 25.7187 54.4243 25.3417L49.1824 19.3479C49.0021 19.1417 48.9142 18.8706 48.9394 18.5978L49.6696 10.6728C49.7156 10.1733 49.3844 9.71697 48.8953 9.60586L41.1453 7.84548C40.877 7.78454 40.6457 7.61575 40.5058 7.37886L36.4473 0.507396C36.1915 0.0743183 35.6539 -0.10138 35.1917 0.0970796L27.8946 3.23057C27.6426 3.33875 27.3574 3.33875 27.1054 3.23057L19.8071 0.0965996C19.3455 -0.101654 18.8084 0.0734593 18.5522 0.505737L14.4951 7.35352C14.3546 7.5906 14.1226 7.7592 13.8537 7.81953L6.10727 9.55765C5.61694 9.66767 5.28441 10.1245 5.3304 10.6249L6.06086 18.574C6.08586 18.8461 5.99845 19.1165 5.81896 19.3225L0.573534 25.3418C0.244971 25.7189 0.245469 26.2807 0.5747 26.6571L5.8177 32.6522C5.99796 32.8583 6.08582 33.1293 6.06076 33.402L5.33018 41.3524C5.28429 41.8518 5.61542 42.308 6.10448 42.4191L13.8555 44.1797C14.1233 44.2405 14.3543 44.4088 14.4943 44.6451L18.5511 51.4924C18.8077 51.9255 19.3462 52.1003 19.8083 51.9005L27.1045 48.746C27.3569 48.6369 27.6432 48.6365 27.8959 48.745L35.1928 51.8784C35.6545 52.0767 36.1916 51.9015 36.4478 51.4693L40.5057 44.6201C40.6457 44.3838 40.8767 44.2155 41.1445 44.1547L48.8953 42.3941C49.3844 42.283 49.7156 41.8267 49.6696 41.3272L48.9394 33.4022C48.9142 33.1294 49.0021 32.8583 49.1824 32.6521L54.4243 26.6583ZM23.433 37.09C23.0423 37.4818 22.4077 37.4818 22.0169 37.0901L13.9302 28.9821C13.5406 28.5914 13.541 27.959 13.9312 27.5688L16.2164 25.2836C16.6075 24.8925 17.2418 24.8932 17.6321 25.2852L22.0167 29.6886C22.4074 30.0811 23.0427 30.0812 23.4336 29.689L36.6429 16.4345C37.0332 16.0429 37.6673 16.0423 38.0583 16.4333L40.3439 18.7189C40.734 19.109 40.7344 19.7414 40.3448 20.1321L23.433 37.09Z"
					fill="#31D7A9"
				/>
			</svg>
		),
	},
	failure: {
		title: 'Đặt vé không thành công',
		color: 'text-gradientStart',
		sub_title: 'Vui lòng thử lại sau.',
		icon: (
			<svg
				width={55}
				height={54}
				viewBox="0 0 55 54"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M55 26.9996L48.9 20.0496L49.75 10.8496L40.725 8.79961L36 0.849609L27.5 4.49961L19 0.849609L14.275 8.79961L5.25 10.8246L6.1 20.0246L0 26.9996L6.1 33.9496L5.25 43.1746L14.275 45.2246L19 53.1746L27.5 49.4996L36 53.1496L40.725 45.1996L49.75 43.1496L48.9 33.9496L55 26.9996ZM30 39.4996H25V34.4996H30V39.4996ZM30 29.4996H25V14.4996H30V29.4996Z"
					fill="#FF4343"
				/>
			</svg>
		),
	},
};

const PaymentResult = () => {
	const [status, setStatus] = useState<status>('failure');
	const [loading, setLoading] = useState<boolean>(true);
	const searchParams = useQuery();
	const id = searchParams.get('id');
	const navigate = useNavigate();
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

	if (!id)
		return (
			<div className=" absolute left-0 right-0">
				<Error404 />
			</div>
		);
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
				{statuses[status].icon}
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
				<Button
					medium
					onClick={() =>
						navigate(`/${PATHS.HOME.IDENTITY}`, {
							replace: true,
						})
					}
				>
					Trang chủ
				</Button>
			</div>
		</>
	);
};

export default PaymentResult;
