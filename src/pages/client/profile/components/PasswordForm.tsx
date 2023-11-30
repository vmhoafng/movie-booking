import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "../../../../app/components/inputs/Input";
import Button from "../../../../app/components/button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useWindowDimensions from "../../../../app/hooks/useWindowDimensions";
import { useRedux } from "@/app/hooks";
import {
  checkPassword,
  updatePassword,
} from "@/app/redux/profile/profile.slice";
import { ICheckPassword, IPutPassword } from "@/app/types/profile";
import { toast } from "sonner";
import { useCallback, useEffect } from "react";
import Icon from "@/app/components/icon/Icon";
import { PulseLoader } from "react-spinners";
function PasswordItem() {
  const { width } = useWindowDimensions();
  const { appSelector, dispatch } = useRedux();
  const { isLoading } = appSelector((state) => state.profile);
  const validationSchema = yup.object({
    oldPass: yup.string().required(),
    newPass: yup.string().required(),
    confirmNewPass: yup.string().required(),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(validationSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(checkPassword({ password: data?.oldPass } as ICheckPassword))
      .then((data) => data.payload)
      .then((callback) => {
        if (!callback)
          return toast.error(
            //     <div
            //       className="flex
            // items-center
            // justify-between
            // bg-error/20
            // px-2
            // py-3
            // rounded
            // min-w-[200px]
            // text-error
            // font-bold
            // text-base
            // gap-7"
            //     >
            //       <div className="flex items-center gap-2">
            //         <div>Mật khẩu hiện tại không chính xác</div>
            //       </div>
            //       <div className="cursor-pointer" onClick={() => toast.dismiss()}>
            //         <Icon icon="close" />
            //       </div>
            //     </div>
            "Mật khẩu hiện tại không chính xác"
          );
        if (callback && data.newPass.trim().length < 8)
          return toast.error(
            // <div
            //   className="flex
            // items-center
            // justify-between
            // bg-error/20
            // px-2
            // py-3
            // rounded
            // min-w-[200px]
            // text-error
            // font-bold
            // text-base
            // gap-7"
            // >
            //   <div className="flex items-center gap-2">
            //     <div>Mật khẩu cần tối thiểu 8 ký tự</div>
            //   </div>
            //   <div className="cursor-pointer" onClick={() => toast.dismiss()}>
            //     <Icon icon="close" />
            //   </div>
            // </div>
            "Mật khẩu cần tối thiểu 8 ký tự"
          );
        if (data.newPass !== data.confirmNewPass)
          return toast.error(
            //   <div
            //     className="flex
            // items-center
            // justify-between
            // bg-error/20
            // px-2
            // py-3
            // rounded
            // min-w-[200px]
            // text-error
            // font-bold
            // text-base
            // gap-7"
            //   >
            //     <div className="flex items-center gap-2">
            //       <div>Mật khẩu xác nhận không trùng khớp</div>
            //     </div>
            //     <div className="cursor-pointer" onClick={() => toast.dismiss()}>
            //       <Icon icon="close" />
            //     </div>
            //   </div>
            "Mật khẩu xác nhận không trùng khớp"
          );
        if (
          callback &&
          data.newPass.trim() !== "" &&
          data.newPass === data.confirmNewPass
        ) {
          const res = dispatch(
            updatePassword({
              oldPass: data?.oldPass,
              newPass: data?.newPass,
            } as IPutPassword)
          );
          toast.promise(res, {
            loading:
              // <div
              //   className="flex
              //     items-center
              //     justify-between
              //     bg-warning/20
              //     px-2
              //     py-3
              //     rounded
              //     min-w-[200px]
              //     text-warning
              //     font-bold
              //     text-base
              //     gap-7"
              // >
              //   <div className="flex items-center gap-2">
              //     <div>Đang tải</div>
              //     <PulseLoader color="#FAC917" size={5} />
              //   </div>
              //   <div className="cursor-pointer" onClick={() => toast.dismiss()}>
              //     <Icon icon="close" />
              //   </div>
              // </div>
              "Đang tải",
            success: (data: any) => {
              return (
                // <div
                //   className="flex
                //       items-center
                //       justify-between
                //       bg-highlight/20
                //       px-2
                //       py-3
                //       rounded
                //       min-w-[200px]
                //       text-highlight
                //       font-bold
                //       text-base
                //       gap-7"
                // >
                //   <div>Thay đổi thông tin thành công</div>
                //   <div
                //     className="cursor-pointer"
                //     onClick={() => toast.dismiss()}
                //   >
                //     <Icon icon="close" />
                //   </div>
                // </div>
                "Thay đổi mật khẩu thành công"
              );
            },
            error: (err: any) => {
              return (
                // <div
                //   className="flex
                //   items-center
                //   justify-between
                //   bg-error/20
                //   px-2
                //   py-3
                //   rounded
                //   min-w-[200px]
                //   text-error
                //   font-bold
                //   text-base
                //   gap-7"
                // >
                //   <div className="flex items-center gap-2">
                //     <div>Chưa thể thay đổi thông tin</div>
                //   </div>
                //   <div
                //     className="cursor-pointer"
                //     onClick={() => toast.dismiss()}
                //   >
                //     <Icon icon="close" />
                //   </div>
                // </div>
                err
              );
            },
          });
          reset();
        }
      });
  };
  const renderForm = useCallback(
    () => (
      <>
        <div className="flex flex-col gap-[10px]">
          <Input
            disabled={isLoading}
            type="password"
            id="oldPass"
            label="Mật khẩu hiện tại"
            col
            register={register}
            errors={errors}
          />
          <Input
            disabled={isLoading}
            type="password"
            id="newPass"
            label="Mật khẩu mới"
            col
            register={register}
            errors={errors}
          />
          <Input
            disabled={isLoading}
            type="password"
            id="confirmNewPass"
            label="Xác nhận mật khẩu mới"
            col
            register={register}
            errors={errors}
          />
        </div>
        <div className="hidden xl:block w-full border-t border-dashed border-borderColor" />
        <Button disabled={isLoading} large secondary fullWidth={width > 900}>
          Thay đổi
        </Button>
      </>
    ),
    [errors, isLoading, register, width]
  );
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-[250px] xl:w-[280px] 2xl:w-[400px] flex flex-col py-[25px] gap-[25px] lg:py-5"
      >
        {renderForm()}
      </form>
    </div>
  );
}

export default PasswordItem;
