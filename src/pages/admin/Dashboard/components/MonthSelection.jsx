import Icon from "@/app/components/icon/Icon";
import React, { forwardRef, useState } from "react";
import "../style/datePicker.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function formatDate(inputDate) {
   const dateObject = new Date(inputDate);
   const formattedDate = dateObject.toLocaleDateString("zh-Hans-CN", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
   });

   return formattedDate.replace(/\//g, "-");
}

const MonthSelection = ({ onChange }) => {
   const [startDate, setStartDate] = useState(new Date());
   const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button
         ref={ref}
         onClick={(event) => {
            onClick(event.target.value);
         }}
         className=" w-[180px] h-8 flex justify-between items-center px-3 bg-white/20 border border-white/50 rounded overflow-hidden"
      >
         {value}
         <Icon icon="calendar"></Icon>
      </button>
   ));

   return (
      <DatePicker
         selected={startDate}
         onChange={(date) => {
            onChange(formatDate(date));
            setStartDate(date);
         }}
         dateFormat="MM/yyyy"
         showMonthYearPicker
         customInput={<ExampleCustomInput />}
      />
   );
};

export default MonthSelection;
