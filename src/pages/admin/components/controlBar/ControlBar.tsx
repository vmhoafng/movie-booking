import Title from "@/app/components/Title";
import Icon from "@/app/components/icon/Icon";
import React from "react";

const ControlBar: React.FC<{
   title: string;
   subTitle?: string;
   children?: any;
}> = ({ title, subTitle, children }) => {
   return (
      <div className="flex justify-between items-center my-6">
         <div className="flex justify-between items-center gap-3">
            <Title active disable={true}>
               {title}
            </Title>
            {subTitle && (
               <div className="flex justify-between items-center gap-3">
                  <Icon icon="arrowRight" className="mb-1"></Icon>
                  <Title disable={true}>{subTitle}</Title>
               </div>
            )}
         </div>

         {children && (
            <div className="flex justify-between items-center gap-3">
               {children}
            </div>
         )}
      </div>
   );
};

export default ControlBar;
