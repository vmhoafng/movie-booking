import { ENDPOINTS } from '@/app/constants/endpoint';
import { PATHS } from '@/app/constants/path';
import { useRedux } from '@/app/hooks';
import { changeVerifyState } from '@/app/redux/auth';
import { Axios } from '@/app/utils/api';
import { ArrowPathIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Toaster, toast as t } from 'sonner';

function VerifyEmail() {
	const { dispatch, appSelector } = useRedux();
	const { email, verify } = appSelector((state) => state.auth.user);
	const [codes, setCodes] = useState(Array(6).fill(''));
	const [disable, setDisable] = useState(false);
	const [isError, setIsError] = useState(false);
	const [time, setTime] = useState<number>(0);
	const inputRefs = useRef(Array(6).fill(null));
	const timeoutRef = useRef(0);

	const minutes = useMemo(() => Math.floor(time / 60), [time]);
	const seconds = useMemo(() => time % 60, [time]);
	const handleCountDown = () => {
		setIsError(false);

		clearInterval(timeoutRef.current);
		let startTime: number = 300;
		setTime(startTime);
		timeoutRef.current = window.setInterval(() => {
			setTime((prev) => {
				if (prev === 0) {
					clearInterval(timeoutRef.current);
					setIsError(true);
					return 0;
				}

				return prev - 1;
			});
		}, 1000);
	};

	const handleRequestVerify = () => {
		const response = Axios.axiosGetWithToken(
			ENDPOINTS.AUTH.REQUEST_VERIFY_EMAIL
		);
		t.promise(response, {
			loading: 'Đang gửi mã xác nhận',
			success: () => {
				handleCountDown();
				return 'Đã gửi một mã xác minh tới email của bạn';
			},
			error: (error) => {
				return 'Đã xảy ra lỗi, vui lòng thử lại sau';
			},
		});
	};

	useEffect(() => {
		handleCountDown();
		// handleRequestVerify();
	}, []);

	useEffect(() => {
		const count = codes.filter((c: string) => !c);
		setIsError(false);
		if (!count.length) {
			const data = codes.join('');
			setDisable(true);
			const response = Axios.axiosPutWithToken(ENDPOINTS.AUTH.VERIFY_EMAIL, {
				verify: data,
			});
			t.promise(response, {
				loading: 'Sending...',
				success: (data: any) => {
					dispatch(changeVerifyState(true));
					clearInterval(timeoutRef.current);
					return 'Thành công';
				},
				error: (err: any) => {
					setDisable(false);
					setIsError(true);
					return 'Error: ' + err;
				},
			});
		}
	}, [codes, dispatch]);

	const handleInputChange = (index: any, value: any) => {
		if (value === '' || (value >= 0 && value <= 9)) {
			const newCodes = [...codes];
			newCodes[index] = value;
			setCodes([...newCodes]);

			if (index < 5 && value !== '') {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Backspace') {
			const newCodes = [...codes];

			if (index > 0 && newCodes[index] === '') {
				newCodes[index - 1] = '';
				inputRefs.current[index - 1].focus();
			} else {
				newCodes[index] = '';
			}

			setCodes(newCodes);
		}
	};

	return (
		<>
			{verify && (
				<Navigate
					to={{
						pathname: `/${PATHS.HOME.IDENTITY}`,
					}}
					replace
				/>
			)}
			<Toaster position="top-center" expand gap={10} closeButton richColors />
			<div
				className="  h-full drop-shadow-none text- flex items-center justify-center"
				style={{
					backgroundImage: `url('/assets/images/bg-auth.png')`,
				}}
			>
				<div className="border relative text-center text-white bg-transparent px-4 py-2 rounded-xl border-borderColor shadow">
					<div className="">
						<EnvelopeIcon className="  mx-auto h-14 w-14" />
					</div>
					<h2 className="text-xl">Xác minh tài khoản</h2>
					<p className="text-sm">
						Chúng tôi đã gửi một mã xác nhận gồm sáu số tới{' '}
						<span className="font-bold">
							{email
								.substring(email.lastIndexOf('@') - 2)
								.padStart(email.length, '*')}
						</span>
					</p>
					<div className="flex max-w-[500px] gap-2 mt-4">
						{codes.map((code: any, index: any) => (
							<label
								className="shadow-xl"
								key={index}
								htmlFor={`input-${index}`}
							>
								<input
									ref={(el) => (inputRefs.current[index] = el)}
									className={`bg-transparent w-full border shadow-inner leading-tight  md:h-[120px]  rounded-md text-6xl md:text-7xl border-black/50 text-center valid:border-lightPrimary ${
										isError ? 'text-red-500' : 'text-highlight'
									}`}
									id={`input-${index}`}
									placeholder="0"
									type="text"
									disabled={disable}
									value={code}
									onChange={(e) => handleInputChange(index, e.target.value)}
									onKeyDown={(e) => handleKeyDown(index, e)}
									maxLength={1}
								/>
							</label>
						))}
					</div>
					{isError && (
						<div className="mt-4 text-red-500 text-sm">
							{time === 0
								? 'Mã xác nhận đã hết hạn, vui lòng bấm gửi lại'
								: 'Xác minh tài khoản thất bại, vui lòng thử lại'}
						</div>
					)}
					<div className="mt-4 py-1 rounded-xl ">
						<div className="text-sm">
							<p>Bạn không nhận được mã xác nhận? </p>
							<div className="mt-4">
								<span
									onClick={handleRequestVerify}
									className="bg-highlight/20 lg:bg-gradient-to-r pl-3 pr-4 py-1 rounded-xl lg:from-highlight/20 border border-highlight lg:from-[50%] to-[50%] lg:bg-right lg:bg-[length:200%_200%] lg:hover:bg-left lg:to-transparent lg:transition-all lg:transform lg:duration-300 lg:ease-[cubic-bezier(.47,1.64,.41,.8)] text-highlight lg:group/item lg:hover:underline   lg:hover:cursor-pointer"
								>
									<ArrowPathIcon className="inline-block mr-2 text-highlight  h-4 w-4 group-hover/item:animate-spin  " />
									Gửi lại
								</span>
							</div>
						</div>
					</div>
					<div className="absolute left-2 top-1 ">
						<p className="text-xs">Mã sẽ hết hạn sau:</p>
						<div className=" mt-1 text-xs md:text-sm flex gap-2  justify-center  shadow-xl px-3 py-2 rounded-md border border-borderColor">
							<div className="">
								<p>{`${minutes}`.padStart(2, '0')}</p>
								<p className=" text-white/80">phút</p>
							</div>
							<span>:</span>
							<div className="">
								<p>{`${seconds}`.padStart(2, '0')}</p>
								<p className=" text-white/80 ">giây</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default VerifyEmail;
