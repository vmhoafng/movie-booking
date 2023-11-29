import CRUDButton from '@/pages/admin/components/buttons/CRUDButton';
import React from 'react';
import { DeleteShowtimeFormProps } from './DeleteShowtimeForm.type';
import { useRedux } from '@/app/hooks';
import { toast } from 'sonner';
import { deleteShowtime } from '@/app/redux/admin/showtime/showtime.admin.slice';

function DeleteShowtimeForm({
	eventInfo,
	movie,
	onCloseModal,
}: DeleteShowtimeFormProps) {
	const { event } = eventInfo;
	const date = new Date(movie.start);
	const { dispatch } = useRedux();
	const handleClick = () => {
		toast.promise(dispatch(deleteShowtime({ id: event.id })), {
			loading: 'Đang tiến hành xóa...',
			success: () => {
				event.remove();
				return 'Xóa thành công';
			},
			error(error) {
				return error;
			},
		});
	};

	return (
		<div className="text-center text-white bg-[#0E1946] px-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={37}
				height={36}
				viewBox="0 0 37 36"
				fill="none"
				className="mx-auto"
			>
				<path
					d="M36.8332 17.9997L32.7665 13.3664L33.3332 7.23307L27.3165 5.86641L24.1665 0.566406L18.4998 2.99974L12.8332 0.566406L9.68317 5.86641L3.6665 7.21641L4.23317 13.3497L0.166504 17.9997L4.23317 22.6331L3.6665 28.7831L9.68317 30.1497L12.8332 35.4497L18.4998 32.9997L24.1665 35.4331L27.3165 30.1331L33.3332 28.7664L32.7665 22.6331L36.8332 17.9997ZM20.1665 26.3331H16.8332V22.9997H20.1665V26.3331ZM20.1665 19.6664H16.8332V9.66641H20.1665V19.6664Z"
					fill="#FF4343"
				/>
			</svg>
			<div className="mt-4 text-base">
				<p>
					Bạn sắp <span className="font-semibold text-gradientStart">xóa</span>{' '}
					phim <span className="underline">{movie.name}</span> vào lúc{' '}
					{eventInfo.timeText}{' '}
				</p>

				<p>
					{date.toLocaleString('vi-VN', {
						day: 'numeric',
						weekday: 'long',
						month: 'long',
					})}
				</p>
				<p className="mt-4">Bạn vẫn muốn tiếp tục chứ?</p>
			</div>
			<div className="flex justify-center gap-4 mt-4 items-center">
				<CRUDButton variant="Delete" onClick={handleClick}>
					Xác nhận
				</CRUDButton>
				<CRUDButton variant="Cancel" onClick={onCloseModal}>
					Hủy bỏ
				</CRUDButton>
			</div>
		</div>
	);
}

export default DeleteShowtimeForm;
