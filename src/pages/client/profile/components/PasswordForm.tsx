import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from '../../../../app/components/inputs/Input';
import Button from '../../../../app/components/button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useWindowDimensions from '../../../../app/hooks/useWindowDimensions';
import { useRedux } from '@/app/hooks';
import {
    checkPassword,
    updatePassword,
} from '@/app/redux/profile/profile.slice';
import { ICheckPassword, IPutPassword } from '@/app/types/profile';
import { toast } from 'sonner';
import { useCallback } from 'react';
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
                    return toast.error('Mật khẩu hiện tại không chính xác');
                if (callback && data.newPass.trim().length < 8)
                    return toast.error('Mật khẩu cần tối thiểu 8 ký tự');
                if (data.newPass !== data.confirmNewPass)
                    return toast.error('Mật khẩu xác nhận không trùng khớp');
                if (
                    callback &&
                    data.newPass.trim() !== '' &&
                    data.newPass === data.confirmNewPass
                ) {
                    const res = dispatch(
                        updatePassword({
                            oldPass: data?.oldPass,
                            newPass: data?.newPass,
                        } as IPutPassword),
                    );
                    toast.promise(res, {
                        loading: 'Đang tải',
                        success: (data: any) => {
                            return 'Thay đổi mật khẩu thành công';
                        },
                        error: (err: any) => {
                            return err;
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
                <Button
                    disabled={isLoading}
                    large
                    secondary
                    fullWidth={width > 900}
                >
                    Thay đổi
                </Button>
            </>
        ),
        [errors, isLoading, register, width],
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
