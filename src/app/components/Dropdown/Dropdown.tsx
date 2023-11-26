import { Menu } from "@headlessui/react";
import React from "react";
import { DropdownProps } from "./Dropdown.type";
import { Link } from "react-router-dom";

function Dropdown({
  children,
  items,
  buttonClassName,
  containerClassName,
}: DropdownProps) {
  return (
    <Menu as="div" className={`relative ${containerClassName}`}>
      <Menu.Button className={buttonClassName}>{children}</Menu.Button>
      <Menu.Items
        as={"ul"}
        className={`right-0 absolute z-50 w-[150px] bg-bgPrimary border-borderColor border rounded py-[5px]`}
      >
        {items.map((item) => {
          const { icon: Icon } = item;
          return (
            <Menu.Item key={item.label} as="li">
              <Link
                onClick={item.onClick}
                className={`flex items-center text-sm gap-3 hover:bg-white/10 px-5 py-[5px] text-[#9F9F9F]`}
                to={item.to!}
              >
                {item.icon && (
                  <div className="">
                    {/*@ts-ignore*/}
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <div className="">
                  <p>{item.label}</p>
                </div>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;
