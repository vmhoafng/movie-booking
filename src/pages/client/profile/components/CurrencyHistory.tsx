import { Menu } from "@headlessui/react";
import CurrencyHistoryItem from "./CurrencyHistoryItem";
import { useRedux } from "@/app/hooks";
import { getBills } from "@/app/redux/profile/profile.slice";
import { useEffect } from "react";

export default function MyDropdown() {
  const { appSelector, dispatch } = useRedux();
  const { bills } = appSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getBills({}));
  }, [dispatch]);
  console.log(bills);

  return (
    <Menu as="div" className="flex justify-end relative">
      <Menu.Button className="text-sm md:text-base lg:text-sm text-highlight font-bold">
        Lịch sử giao dịch
      </Menu.Button>
      <Menu.Items className="absolute max-h-[300px] overflow-y-scroll top-7 right-0 bg-[#0E1946] py-[10px] w-[350px] md:w-[400px] shadow-[0px_4px_24px_8px_rgba(0,0,0,0.25)] z-30">
        {bills.map((bill) =>
          bill.tickets.map((ticket) => {
            return (
              <CurrencyHistoryItem
                paymentAt={bill.payment_at}
                cinema={ticket.cinema}
                movie={ticket.movie}
                price={ticket.price}
                room={ticket.room}
                seat={ticket.seat}
                showtime={ticket.showtime}
                key={ticket.id}
              />
            );
          })
        )}
      </Menu.Items>
    </Menu>
  );
}
