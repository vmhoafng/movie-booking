import api from '../../../app/services/api';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../../app/components/Title';
import SeatRow from './components/SeatRow';
import Ticket from './components/Ticket';
import { ISeatData, ISeatRow, ISeatType, ITicketType } from './type';
import { useRedux } from '@/app/hooks';
import { clearSelectedSeats, setSelectedSeats } from '@/app/redux/payment';
import LoadingAnimation from '@/app/components/loading/LoadingAnimation';

function SeatPlan() {
    const { showtimeId } = useParams();
    const [seatData, setSeatData] = useState<ISeatData>();
    const [seatRow, setSeatRow] = useState<ISeatRow[]>();
    const [ticketData, setTicketData] = useState<ITicketType>();
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useRedux();

    const getSeatPlan = async (showtimeId: string) => {
        try {
            setIsLoading(true);
            let res = await api.showtime.getSeatsByShowtime(showtimeId);
            setIsLoading(false);
            setSeatData({ ...res.data });
        } catch (error) {
            console.log(error);
        }
    };

    function splitArrayIntoChunks(arr: ISeatType[], chunkSize: number) {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push({
                seats: arr.slice(i, i + chunkSize),
                row: arr[i]?.row,
            });
        }
        return chunkedArray;
    }

    const renderSeatRow = useMemo(
        () =>
            seatRow?.map((row) => (
                <SeatRow row={row} key={row.row as any}></SeatRow>
            )),
        [seatRow],
    );

    const renderTicket = useMemo(() => {
        return (
            <Ticket
                ticket={ticketData as ITicketType}
                key={showtimeId}
            ></Ticket>
        );
    }, [ticketData, showtimeId]);

    useEffect(() => {
        getSeatPlan(showtimeId as string);
    }, [showtimeId]);

    useEffect(() => {
        if (seatData) {
            let temp = splitArrayIntoChunks(seatData?.room.seats || [], 15);
            const { movie, room, format, start_date, start_time } = seatData;
            const ticket: ITicketType = {
                showtime_id: showtimeId as string,
                cinema: room.cinema.name,
                format: format.caption,
                movie_name: movie.name,
                showtime: `${start_time} | ${start_date}`,
                ticket_price: room.seats[0].type.price,
            };
            setSeatRow(temp);
            dispatch(clearSelectedSeats());
            setTicketData(ticket);
        }
    }, [seatData, showtimeId, dispatch]);

    return (
        <>
            {isLoading && <LoadingAnimation></LoadingAnimation>}
            <div className="w-full h-fit flex flex-col gap-5 py-6 pb-10 xl:flex-row xl:gap-14 xl:py-12 2xl:gap-20 ">
                <div className="flex flex-col gap-5 xl:gap-6 flex-1 h-[510px] ">
                    <Title disable active>
                        Chọn ghế
                    </Title>
                    <div className="flex flex-col justify-center bg-[#0A1E5ECC] border-borderColor border-2 py-8 px-3 md:px-5 md:gap-4 lg:px-14 lg:gap-4 xl:bg-transparent xl:px-0 xl:gap-6 xl:border-none xl:py-5 2xl:px-5">
                        <div className="w-full flex flex-col-reverse gap-[2px] overflow-x-scroll md:overflow-hidden pb-2 scroll-smooth">
                            {renderSeatRow}
                        </div>
                        <div className="flex flex-col gap-1 items-center font-inter mt-2">
                            <span className="uppercase text-sm text-white/70">
                                screen
                            </span>
                            <div className="xl:w-[600px] lg:w-[500px] md:w-[450px] w-[300px] h-1 bg-borderColor"></div>
                            <div className="xl:w-[400px] lg:w-[333px] md:w-[300px] w-[200px] h-[2px] bg-borderColor"></div>
                        </div>
                        <div className="flex gap-4 justify-center items-center font-inter">
                            <div className="flex justify-center items-center gap-3">
                                <div className="w-4 h-4 rounded-sm bg-gradientStart"></div>
                                <span className="text-white/90 text-sm">
                                    Ghế đã bán
                                </span>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <div className="w-4 h-4 rounded-sm bg-highlight"></div>
                                <span className="text-white/90 text-sm">
                                    Ghế đang chọn
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {renderTicket}
                {/* <Ticket ticket={ticketData as ITicketType}></Ticket> */}
            </div>
        </>
    );
}

export default SeatPlan;
