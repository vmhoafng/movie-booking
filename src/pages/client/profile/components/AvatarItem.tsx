import React, { useState } from "react";
import AvatarModal from "./AvatarModal";
import Icon from "@/app/components/icon/Icon";
import { useRedux } from "@/app/hooks";

function AvatarItem() {
  const [openModal, setOpenModal] = useState(false);
  const { appSelector } = useRedux();
  const { avatar } = appSelector((state) => state.auth.user);
  const { user, isLoading } = appSelector((state) => state.auth);

  return (
    <div className="flex flex-col gap-[10px] items-center">
      {openModal && (
        <AvatarModal
          onClick={() => {
            setOpenModal(false);
          }}
        />
      )}
      <div className="relative">
        <img
          src={avatar}
          alt=""
          className="
            h-[150px]
            lg:h-[120px]
            2xl:h-[150px]
            w-[150px]
            lg:w-[120px]
            2xl:w-[150px]
            border-[3px]
            rounded-full
            object-cover
            border-borderColor"
        />
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="absolute right-0 bottom-4 lg:bottom-2 2xl:bottom-4"
        >
          <Icon icon="smile" className="h-[30px] lg:h-[26px] xl:h-[30px]" />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-[15px] text-white font-bold leading-6">
          Điểm thành viên
        </div>
        <div className="text-sm text-highlight font-bold leading-6">
          {user.point} điểm
        </div>
      </div>
    </div>
  );
}

export default AvatarItem;
