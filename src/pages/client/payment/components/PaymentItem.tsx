import clsx from "clsx";
import "../css/Payment.css";
interface PaymentItemProps {
   label: string;
   disabled?: boolean;
   borderWhite?: boolean;
   value?: string;
}
function PaymentItem({
   label,
   disabled,
   borderWhite,
   value,
}: PaymentItemProps) {
   return (
      <div
         className={`flex w-full py-[3px] flex-col items-start gap-1 md:flex-row md:items-center md:justify-between md:gap-2`}
      >
         <label
            className={clsx(
               "text-white/90 text-[15px] font-bold leading-6 md:min-w-[140px]"
            )}
         >
            <span
               className="
                [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
                shadow-black/50
               "
            >
               {label}
            </span>
         </label>
         <div className="w-full relative">
            <div
               className={clsx(
                  `
                w-full
                rounded
                border
                px-[15px]
                shadow-sm
                bg-white/10
                text-white/90
                border-borderColor
                selection:bg-highlight
                selection:text-primary
                overflow-x-scroll
                overflow-y-hidden
                container-snap
                h-10 
                leading-10
                md:h-[35px] md:leading-[35px]
               `,
                  borderWhite && "border-white/50 focus:border-white/50",
                  disabled && "opacity-50 cursor-default"
               )}
            >
               {value}
            </div>
         </div>
      </div>
   );
}

export default PaymentItem;
