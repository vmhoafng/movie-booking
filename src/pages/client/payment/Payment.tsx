import BookingMobileItem from "./components/BookingMobileItem";
import BookingDesktopItem from "./components/BookingDesktopItem";
import PaymentItem from "./components/PaymentForm";
export default function Payment() {
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
      <BookingMobileItem />
      <PaymentItem />
      <BookingDesktopItem />
    </div>
  );
}
