import { Menu } from "@headlessui/react";

export default function MyDropdown() {
  return (
      <Menu as="div" className="flex flex-col relative">
        <Menu.Button className="text-sm md:text-base lg:text-sm text-highlight font-bold">
          Lịch sử giao dịch
        </Menu.Button>
        <Menu.Items className="absolute top-0 bg-bgPrimaryLayer">
          <Menu.Item>
     
          </Menu.Item>
          <Menu.Item>
          
          </Menu.Item>
          <Menu.Item>
          </Menu.Item>
        </Menu.Items>
      </Menu>
  );
}
