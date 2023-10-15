import BookingItem from "./components/BookingItem";
import PaymentItem from "./components/PaymentItem";
import Title from "./components/Title";
export default function Payment() {
  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center py-5 gap-[10px]"
      style={{ backgroundImage: `url('/assets/images/bg-auth.png')` }}
    >
      <BookingItem />
      <div className="bg-bgPrimaryLayer flex flex-col items-center w-80 px-5 h-[507px]">
        <Title>Payment</Title>
      </div>
      <PaymentItem />
    </div>
  );
}
