import React from 'react';

function CinemaDetail() {
	return (
		<div className="text-[15px]">
			<h3 className=" inline-block border-b-2 border-highlight md:text-[18px] ">
				THÔNG TIN CHI TIẾT
			</h3>
			<div className="mt-[25px] flex gap-1 flex-col ">
				<div className="flex flex-row lg:flex-col max-lg:gap-5 gap-1">
					<p className="text-white text-opacity-70">Địa chỉ:</p>
					<p className="lg:text-highlight">718bis An Dương Vương, Q5, TP.HCM</p>
				</div>
				<div className="flex flex-row lg:flex-col max-lg:gap-5 gap-1 ">
					<p className="text-white text-opacity-70">Số điện thoại:</p>
					<p className="lg:text-highlight">1900 2171</p>
				</div>
			</div>
			<div className="mt-4"></div>
			<div className="mt-[25px]">
				<p className="text-white text-opacity-70 text-sm ">
					Galaxy Cà Mau tọa lạc tại lầu 2 TTTM Sense City, số 9, Trần Hưng Đạo –
					rạp chiếu phim được xây dựng theo tiêu chuẩn quốc tế gồm 6 phòng chiếu
					2D&3D, âm thanh Dobly 7.1. Thiết kế trẻ trung, dịch vụ thân thiện, cập
					nhật liên tục những bộ phim mới nhất phim hay nhất trong nước cũng như
					quốc tế và mức giá vô cùng “hạt dẻ”.
				</p>
			</div>
		</div>
	);
}

export default CinemaDetail;
