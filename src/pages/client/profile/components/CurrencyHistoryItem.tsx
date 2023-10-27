import { Menu } from "@headlessui/react";
import Title from "./Title";
import Subtitle from "./Subtitle";
export default function MyDropdown() {
  return (
    <Menu as="div" className="flex justify-end relative">
      <Menu.Button className="text-sm md:text-base lg:text-sm text-highlight font-bold">
        Lịch sử giao dịch
      </Menu.Button>
      <Menu.Items className="absolute top-7 right-0 bg-[#0E1946] py-[10px] w-[350px] md:w-[400px] shadow-[0px_4px_24px_8px_rgba(0,0,0,0.25)] z-30">
        <Menu.Item
          as="div"
          className="py-[10px] px-5 md:px-6 border-b border-white/10"
        >
          <div className="flex justify-between gap-[10px]">
            <div className="flex flex-col w-[180px]">
              <Title>the nun</Title>
              <Subtitle>An Dương Vương | RAP 1</Subtitle>
              <Subtitle>15:30 | CN 17/09</Subtitle>
              <Subtitle>Ghế: H6, H7,H6, H7, H6, H7H6, H7H6, H7</Subtitle>
            </div>
            <div className="flex flex-col justify-between items-end text-right w-[120px]">
              <div>
                <Title>20/10/2023</Title>
                <Subtitle>10:20:17</Subtitle>
              </div>
              <Title highlight>11.135.000 VND</Title>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item
          as="div"
          className="py-[10px] px-5 md:px-6 border-b border-white/10"
        >
          <div className="flex justify-between gap-[10px]">
            <div className="flex flex-col w-[180px]">
              <Title>the nun</Title>
              <Subtitle>An Dương Vương | RAP 1</Subtitle>
              <Subtitle>15:30 | CN 17/09</Subtitle>
              <Subtitle>Ghế: H6, H7,H6, H7, H6, H7H6, H7H6, H7</Subtitle>
            </div>
            <div className="flex flex-col justify-between items-end text-right w-[120px]">
              <div>
                <Title>20/10/2023</Title>
                <Subtitle>10:20:17</Subtitle>
              </div>
              <Title highlight>11.135.000 VND</Title>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item
          as="div"
          className="py-[10px] px-5 md:px-6 border-b border-white/10"
        >
          <div className="flex justify-between gap-[10px]">
            <div className="flex flex-col w-[180px]">
              <Title>the nun</Title>
              <Subtitle>An Dương Vương | RAP 1</Subtitle>
              <Subtitle>15:30 | CN 17/09</Subtitle>
              <Subtitle>Ghế: H6, H7,H6, H7, H6, H7H6, H7H6, H7</Subtitle>
            </div>
            <div className="flex flex-col justify-between items-end text-right w-[120px]">
              <div>
                <Title>20/10/2023</Title>
                <Subtitle>10:20:17</Subtitle>
              </div>
              <Title highlight>11.135.000 VND</Title>
            </div>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
