import BookingItem from "./components/BookingItem";
import PaymentItem from "./components/PaymentItem";
export default function Payment() {
  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center py-5 gap-[10px]"
      style={{ backgroundImage: `url('/assets/images/bg-auth.png')` }}
    >
      <BookingItem />
      <PaymentItem />
    </div>
  );
}
