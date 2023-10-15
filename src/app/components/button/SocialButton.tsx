import React from "react";
interface AuthSocialProps {
   icon: any;
   onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocialProps> = ({
   icon: Icon,
   onClick,
}) => {
   return (
      <button
         type="button"
         onClick={onClick}
         className="flex w-10 h-10 justify-center items-center rounded-full bg-transparent shadow-sm ring-1 ring-inset ring-borderColor hover:bg-highlight focus:outline-offset-0 transition-colors duration-300"
      >
         <img src={Icon} alt="" />
      </button>
   );
};
export default AuthSocialButton;
