import DesktopFooter from "@/app/components/Footer/DesktopFooter";
import DesktopNavbar from "@/app/components/Navbar/DesktopNavbar";
import Button from "@/app/components/button/Button";
import clsx from "clsx";
import React from "react";

type status = "succeed" | "failure";

const PaymentResult = ({ status }: { status: status }) => {
   console.log(status);

   return (
      <>
         {/* Background for this screen is bg-01.jpg */}
         {/* Payment result component */}
         <div className="w-full h-screen flex flex-col gap-5 pt-24 justify-start items-center">
            <img src={`./assets/icons/${status}.svg`} alt="" />
            <h1
               className={clsx(
                  "text-base md:text-lg lg:text-xl font-inter font-semibold",
                  status === "succeed" ? "text-highlight" : "text-gradientStart"
               )}
            >
               {status === "succeed"
                  ? "Đặt vé thành công"
                  : "Đặt vé không thành công"}
            </h1>
            <span className="text-sm text-white/70">
               {status === "succeed"
                  ? "Chúc bạn có những giây phút xem phim thư giãn."
                  : "Vui lòng thử lại sau."}
            </span>
            <Button medium>Trang chủ</Button>
         </div>
      </>
   );
};

export default PaymentResult;
