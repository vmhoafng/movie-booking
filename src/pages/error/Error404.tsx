import Button from "@/app/components/Button/Button";
import React from "react";

const Error404 = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center bg-bgPrimary">
      <img
        src="./assets/images/error-404.png"
        alt=""
        className="w-[300px] md:w-[400px] lg:w-[500px]"
      />
      <h1 className="text-white/90 text-base md:text-lg lg:text-2xl font-inter font-semibold">
        Lỗi: Không tìm thấy trang!
      </h1>
      <Button medium>Trang chủ</Button>
    </div>
  );
};

export default Error404;
