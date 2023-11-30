import { ENDPOINTS } from '@/app/constants/endpoint';
import { useRedux } from '@/app/hooks';
import { changeVerifyState } from '@/app/redux/auth';
import { Axios } from '@/app/utils/api';
import { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

export default function useVerifyEmail() {
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
		toast.promise(response, {
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

			toast.promise(response, {
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
		if (e.key === 'ArrowLeft') {
			inputRefs.current[index - 1].focus();
		}
		if (e.key === 'ArrowRight') {
			if (index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
	};
	function handlePaste(e: React.ClipboardEvent<HTMLDivElement>) {
		e.preventDefault();
		const paste = e.clipboardData.getData('text');
		const pastedValues = paste.split('').filter((char) => /\d/.test(char));

		const newOTP = [...codes];

		inputRefs.current.forEach((input, index) => {
			newOTP[index] = pastedValues[index];
		});

		if (pastedValues.length <= 6) {
			inputRefs.current[pastedValues.length].focus();
		}

		setCodes(newOTP);
	}

	return {
		handleCountDown,
		handleInputChange,
		handleKeyDown,
		handlePaste,
		handleRequestVerify,
		minutes,
		seconds,
		verify,
		email,
		inputRefs,
		disable,
		isError,
		codes,
		time,
	};
}
