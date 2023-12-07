import { useCallback, useEffect } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import useWindowDimensions from '@/app/hooks/useWindowDimensions';
import { useRedux } from '@/app/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IPutProfile } from '@/app/types/profile';
import { dirtyValue } from '@/app/utils';
import { toast } from 'sonner';
import { getCurrentUser } from '@/app/redux/auth';
import { Axios } from '@/app/utils/api';
import { ENDPOINTS } from '@/app/constants/endpoint';

export default function useAccountForm() {
    const { width } = useWindowDimensions();
    const { appSelector, dispatch } = useRedux();
    const { user: currentUser } = appSelector((state) => state.auth);
    const { isLoading } = appSelector((state) => state.profile);
    useEffect(() => {
        dispatch(getCurrentUser);
    }, [dispatch]);
    const validationSchema = yup.object({
        fullName: yup.string().required(),
        dateOfBirth: yup.string().required(),
        gender: yup.string().required(),
        phoneNumber: yup.string().required(),
        email: yup.string().email().required(),
    });

    const {
        handleSubmit,
        register,
        control,
        reset,
        formState: { errors, dirtyFields },
    } = useForm<FieldValues>({
        resolver: yupResolver<FieldValues>(validationSchema),
    });

    const onSubmit: SubmitHandler<FieldValues> = useCallback(
        (data) => {
            const res = Axios.axiosPutWithToken(
                ENDPOINTS.PROFILE.UPDATE_PROFILE,
                dirtyValue(dirtyFields, data) as IPutProfile,
            );
            // dispatch(
            //   updateProfile(dirtyValue(dirtyFields, data) as IPutProfile)
            // );
            console.log(res);

            toast.promise(res, {
                loading: 'Đang tải',
                success: (data: any) => {
                    return 'Thay đổi thông tin thành công';
                },
                error: (err: any) => {
                    return `${err}`;
                },
            });
        },
        [dirtyFields],
    );
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
        isLoading,
    };
}
