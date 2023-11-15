import PaymentForm from "./components/PaymentForm";
import { useRedux } from "@/app/hooks";
import PaymentTicket from "./components/PaymentTicket";
export default function Payment() {
   const { appSelector } = useRedux();
   const ticket = appSelector((state) => state.payment.ticket);
   return (
      <div
         className="flex
      flex-col-reverse
      xl:flex-row
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
         <PaymentForm />
         <PaymentTicket ticket={ticket}></PaymentTicket>
      </div>
   );
}
