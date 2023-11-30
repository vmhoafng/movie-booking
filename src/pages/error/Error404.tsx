import Button from '@/app/components/button/Button';
import { PATHS } from '@/app/constants/path';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen h-screen flex flex-col gap-5 justify-center items-center bg-bgPrimary">
			<img
				src="./assets/images/error-404.png"
				alt=""
				className="w-[300px] md:w-[400px] lg:w-[500px]"
			/>
			<h1 className="text-white/90 text-base md:text-lg lg:text-2xl font-inter font-semibold">
				Lỗi: Không tìm thấy trang!
			</h1>
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
	);
};

export default Error404;
