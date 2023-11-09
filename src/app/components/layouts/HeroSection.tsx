import React from 'react';

export default function HeroSection() {
	return (
		<section className="relative">
			<div
				style={{
					backgroundImage:
						"linear-gradient( #05113FCC, #05113FCC), url('/assets/images/bg-02.jpg')",
				}}
				className="bg-cover bg-center bg-no-repeat h-[calc(100vh_-_96px)] md:h-[calc(100vh_-_146px)]"
			></div>
			<div className="absolute top-1/2 text-center text-white left-1/2 translate-x-[-50%] translate-y-[-50%]">
				<p className="md:hidden text-highlight font-bold ">Welcome to Cinema</p>
				<div className="text-[32px] mt-[20px] md:text-[36px] lg:text-[64px]  font-extrabold ">
					<p className="drop-shadow-[2px_2px_4px_0_#000] whitespace-nowrap ">
						BOOK YOUR TICKET
					</p>
					<p>
						FOR <span className="text-highlight ">MOVIE</span>
					</p>
				</div>
				<div className="hidden mt-[30px] md:block drop-shadow">
					<p className="uppercase lg:text-xl whitespace-nowrap">
						Đặt vé dễ dàng, Trải nghiệm phim hay, Cảm xúc Ngập tràn
					</p>
				</div>
			</div>
		</section>
	);
}
