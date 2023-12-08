import BookingTitle from "../../payment/components/BookingTitle";
import BookingSubtitle from "../../payment/components/BookingSubtitle";
import { useRedux } from "@/app/hooks";
import { ITicketType } from "../../seatPlan/type";

function PaymentTicket({ ticket }: { ticket: ITicketType }) {
  const { appSelector } = useRedux();
  const selected_seats = appSelector((state) => state.payment.selected_seats);
  console.log(selected_seats);

  return (
    <div className="bg-[#0A1E5ECC] flex flex-col items-center text-sm pb-4 px-4 md:px-8 lg:px-12 w-full xl:w-[240px] xl:py-2 xl:px-[30px] 2xl:w-[300px] 2xl:px-9 font-inter border-2 xl:border border-borderColor">
      <h2 className="py-4 uppercase text-white/90 font-bold">Booking sumary</h2>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex py-3 lg:py-4 justify-between">
        <div className="flex flex-col w-[148px] md:w-[280px]">
          <BookingTitle>{ticket?.movie_name}</BookingTitle>
          <BookingSubtitle>{ticket?.format}</BookingSubtitle>
        </div>

        <div className="xl:hidden flex flex-col items-end">
          <BookingTitle>{ticket?.cinema}</BookingTitle>
          <BookingTitle>{ticket?.showtime}</BookingTitle>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full flex xl:flex-col xl:justify-normal justify-between text-white gap-[15px] py-3 lg:py-4 font-semibold leading-6">
        <div className="xl:flex flex-col hidden">
          <BookingTitle>Rạp</BookingTitle>
          <BookingSubtitle>{ticket?.cinema}</BookingSubtitle>
        </div>
        <div className="xl:flex flex-col hidden ">
          <BookingTitle>Suất chiếu</BookingTitle>
          <BookingSubtitle>{ticket?.showtime}</BookingSubtitle>
        </div>
        <div className="flex flex-col">
          <BookingTitle>Ghế ({selected_seats.length})</BookingTitle>
          <BookingSubtitle>
            {selected_seats.map((seat) => seat.row + seat.row_index).join(", ")}
          </BookingSubtitle>
        </div>
        <div className="flex flex-col items-end xl:hidden">
          <BookingTitle>Giá vé</BookingTitle>
          <BookingSubtitle>{ticket?.ticket_price as any}VND</BookingSubtitle>
        </div>
      </div>
      <div className="w-full relative border-t border-dashed border-borderColor">
        <div className="w-[34px] h-[34px] hidden xl:block border-r border-borderColor absolute rounded-full gradient-to-r top-[-18px] -left-12 2xl:-left-[54px]"></div>
        <div className="w-[34px] h-[34px] hidden xl:block border-l border-borderColor absolute rounded-full gradient-to-l top-[-18px] left-[calc(100%+14px)] 2xl:left-[calc(100%+20px)]"></div>
      </div>
      <div className="w-full hidden xl:flex flex-col xl:py-4 ">
        <div className="flex flex-col">
          <BookingTitle>Giá vé</BookingTitle>
          <BookingSubtitle>{ticket?.ticket_price as any} VND</BookingSubtitle>
        </div>
      </div>
      <div className="w-full border-t border-dashed border-borderColor" />
      <div className="w-full py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <BookingTitle>Tổng</BookingTitle>
          <BookingSubtitle>
            <span className="text-highlight text-base font-semibold">
              {ticket?.ticket_price * selected_seats.length} VND
            </span>
          </BookingSubtitle>
        </div>
      </div>
    </div>
  );
}

export default PaymentTicket;
