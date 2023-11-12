import { Menu } from "@headlessui/react";
import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
interface CurrencyHistoryItemProps {
  cinema: string;
  movie: string;
  price: number;
  room: string;
  seat: string;
  showtime: string;
  paymentAt: string;
}
function CurrencyHistoryItem({
  cinema,
  movie,
  price,
  room,
  seat,
  showtime,
  paymentAt,
}: CurrencyHistoryItemProps) {
  console.log(paymentAt);

  return (
    <Menu.Item
      disabled
      as="div"
      className="py-[10px] px-5 md:px-6 border-b border-white/10"
    >
      <div className="flex justify-between gap-[10px]">
        <div className="flex flex-col w-[210px] gap-[1px]">
          <Title>{movie}</Title>
          <Subtitle>
            <div className="flex justify-start items-end gap-1">
              <div className="leading-5">{cinema} </div>
              <div className="leading-6">|</div>
              <div className="leading-5 truncate"> {room}</div>
            </div>
          </Subtitle>
          <Subtitle>
            <div className="flex justify-start items-end gap-1">
              <div className="leading-5">{showtime.split(" ")[2]}</div>
              <div className="leading-5">{`${showtime.split(" ")[0]} ${
                showtime.split(" ")[1]
              }`}</div>
            </div>
          </Subtitle>
          <Subtitle>Ghế: {seat}</Subtitle>
        </div>
        <div className="flex flex-col justify-between items-end text-right w-[120px]">
          <div>
            <Title>{paymentAt.split(" ")[0]}</Title>
            <Subtitle>{paymentAt.split(" ")[1]}</Subtitle>
          </div>
          <Title highlight>{price.toLocaleString("vi-VN")} VND</Title>
        </div>
      </div>
    </Menu.Item>
  );
}

export default CurrencyHistoryItem;
