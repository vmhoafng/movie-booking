import React from 'react';
import clsx from 'clsx';
import { ISeatType } from '../type';
import { useRedux } from '@/app/hooks';
import { setSelectedSeats } from '@/app/redux/payment';

const Seat = ({
    seat,
    is_reserved,
}: {
    seat: ISeatType;
    is_reserved: boolean;
}) => {
    const { dispatch } = useRedux();

    return (
        <button
            className={clsx(
                'flex justify-center items-center h-8 w-8 border-2 border-bgPrimary rounded-lg text-center  cursor-pointer transition-colors',
                seat?.is_reserved
                    ? 'bg-gradientStart hover:none'
                    : 'bg-borderColor lg:hover:bg-highlight',
                is_reserved && 'bg-highlight',
            )}
            disabled={seat?.is_reserved}
            onClick={() => dispatch(setSelectedSeats(seat))}
        >
            <span className="text-sm">{seat?.row_index as any}</span>
        </button>
    );
};

export default Seat;
