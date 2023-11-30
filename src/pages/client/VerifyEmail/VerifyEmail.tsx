import { PATHS } from '@/app/constants/path';
import { ArrowPathIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import useVerifyEmail from './useVerifyEmail';

function VerifyEmail() {
	const {
		handleInputChange,
		handleKeyDown,
		handlePaste,
		handleRequestVerify,
		minutes,
		seconds,
		verify,
		email,
		disable,
		inputRefs,
		isError,
		codes,
		time,
	} = useVerifyEmail();

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
					<div className="flex max-w-[500px] gap-2 mt-4" onPaste={handlePaste}>
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
