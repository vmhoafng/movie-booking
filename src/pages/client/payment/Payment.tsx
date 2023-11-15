import BookingMobileItem from "./components/BookingMobileItem";
import BookingDesktopItem from "./components/BookingDesktopItem";
import PaymentForm from "./components/PaymentForm";
import Ticket from "../seatPlan/components/Ticket";
import { useRedux } from "@/app/hooks";
export default function Payment() {
   const { appSelector } = useRedux();
   const ticket = appSelector((state) => state.payment.ticket);
   return (
      <div
         className="flex
      flex-col
      lg:flex-row
      justify-center
      items-center
      lg:items-start
      py-5
      lg:py-[50px]
      2xl:py-[80px]
      gap-[10px]
      lg:gap-5
      2xl:gap-20
     "
      >
         {/* <BookingMobileItem /> */}
         <Ticket ticket={ticket}></Ticket>
         <PaymentForm />
         {/* <BookingDesktopItem /> */}
      </div>
   );
}
