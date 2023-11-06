import React from "react";
import ControlBar from "../components/controlBar/ControlBar";
import Card from "./components/Card";

function Dashboard() {
   return (
      <>
         <ControlBar title={"Thống kê"}></ControlBar>
         <div className="flex justify-between items-center">
            <Card
               title={"doanh thu"}
               percent={"50"}
               status={"up"}
               value={"1.000.000.000"}
               type="revenue"
            ></Card>
         </div>
      </>
   );
}

export default Dashboard;
