import { CinemaDetailProps } from './CinemaDetail.type';

function CinemaDetail({ cinema }: CinemaDetailProps) {
	const { address, description, phone_number } = cinema;

	return (
		<div className=" flex-1 text-[15px]">
			<h3 className=" inline-block border-b-2 border-highlight md:text-[18px] ">
				THÔNG TIN CHI TIẾT
			</h3>
			<div className="mt-[25px] flex gap-1 flex-col ">
				<div className="flex flex-row lg:flex-col max-lg:gap-5 gap-1">
					<p className="text-white text-opacity-70">Địa chỉ:</p>
					<p className="lg:text-highlight">{address}</p>
				</div>
				<div className="flex flex-row lg:flex-col max-lg:gap-5 gap-1 ">
					<p className="text-white text-opacity-70">Số điện thoại:</p>
					<p className="lg:text-highlight">{phone_number}</p>
				</div>
			</div>
			<div className="mt-4"></div>
			<div className="mt-[25px]">
				<p className="text-white text-opacity-70 text-sm ">{description}</p>
			</div>
		</div>
	);
}

export default CinemaDetail;
