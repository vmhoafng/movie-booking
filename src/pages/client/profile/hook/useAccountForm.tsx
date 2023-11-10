import React, { useEffect, useMemo, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { useRedux } from "@/app/hooks";
import { UserData, updateProfile } from "@/app/redux/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IPutProfile } from "@/app/types/profile";
import { PulseLoader } from "react-spinners";
import { dirtyValue } from "@/app/utils";
import { toast } from "sonner";
import Icon from "@/app/components/icon/Icon";

export default function useAccountForm() {
  const { width } = useWindowDimensions();
  const { appSelector, dispatch } = useRedux();
  const { user, isLoading: userLoading } = appSelector((state) => state.auth);
  const [currentUser, setCurrentUser] = useState<UserData>();
  useEffect(() => {
    if (!userLoading) {
      setCurrentUser(user);
    }
  }, [user, currentUser, userLoading]);
  const validationSchema = yup.object({
    fullName: yup.string(),
    dateOfBirth: yup.string(),
    gender: yup.string(),
    phoneNumber: yup.string(),
    email: yup.string().email(),
  });

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, dirtyFields, isLoading, isSubmitSuccessful },
  } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(validationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (isLoading) {
      toast.custom((t) => (
        <div
          className="flex
          items-center
          justify-between
          bg-warning/20
          px-2
          py-3
          rounded
          min-w-[200px]
          text-warning
          font-bold
          text-base
          gap-7"
        >
          <div className="flex items-center gap-2">
            <div>Đang tải</div>
            <PulseLoader color="#FAC917" size={5} />
          </div>
          <div className="cursor-pointer" onClick={() => toast.dismiss(t)}>
            <Icon icon="close" />
          </div>
        </div>
      ));
    }
    dispatch(updateProfile(dirtyValue(dirtyFields, data) as IPutProfile));
    if (!isSubmitSuccessful) {
      toast(
        <div className="bg-error w-full text-white/90 font-bold text-base">
          <div>Chưa thể thay đổi thông tin</div>
        </div>
      );
    }
    if (isSubmitSuccessful) {
      toast.custom((t) => (
        <div
          className="flex
          items-center
          justify-between
          bg-highlight/20
          px-2
          py-3
          rounded
          min-w-[200px]
          text-highlight
          font-bold
          text-base
          gap-7"
        >
          <div>Thay đổi thông tin thành công</div>
          <div className="cursor-pointer" onClick={() => toast.dismiss(t)}>
            <Icon icon="close" />
          </div>
        </div>
      ));
    }
  };

  useEffect(() => {
    reset({
      fullName: currentUser?.full_name,
      email: currentUser?.email,
      dateOfBirth: currentUser?.date_of_birth,
      phoneNumber: currentUser?.phone_number,
      gender: currentUser?.gender,
    });
  }, [currentUser, reset]);
  return {
    register,
    errors,
    control,
    currentUser,
    handleEditAccount: handleSubmit(onSubmit),
    width,
  };
}
