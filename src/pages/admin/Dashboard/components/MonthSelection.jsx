import Icon from "@/app/components/icon/Icon";
import React, { forwardRef, useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function formatToMonthYear(inputDate) {
   const dateObject = new Date(inputDate);
   const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "2-digit",
      year: "numeric",
   });

   return formattedDate;
}

const MonthSelection = () => {
   const [startDate, setStartDate] = useState(new Date());
   const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
      <button
         ref={ref}
         onClick={(event) => {
            onClick(event.target.value);
         }}
         className="flex justify-between items-center px-2 bg-white/10 border border-white/10 rounded w-[200px] h-8"
      >
         {value}
         <Icon icon="calendar"></Icon>
      </button>
   ));

   return (
      <DatePicker
         selected={startDate}
         onChange={(date) => {
            console.log(formatToMonthYear(date));
            setStartDate(date);
         }}
         dateFormat="MM/yyyy"
         showMonthYearPicker
         customInput={<ExampleCustomInput />}
      />
   );
};

export default MonthSelection;
