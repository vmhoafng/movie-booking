import React, { useCallback, useState } from 'react';
import CinemaForm from '../CinemaForm';
import RoomForm from '../RoomForm';
import Button from '@/app/components/button/Button';
import { Link } from 'react-router-dom';
import DasboardItem from '../DashboardItem';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useRedux } from '@/app/hooks';
import { initSeats } from '@/app/constants/data';
import { toast } from 'sonner';
import { Axios } from '@/app/utils/api';
import { ENDPOINTS } from '@/app/constants/endpoint';

function AddItem() {
    const [dashboardList, setDashboardList] = useState<
        Array<Record<string, any>>
    >([]);
    const handleAddRoom = () => {
        setDashboardList([
            ...dashboardList,
            { totalSeats: 150, seats: initSeats },
        ]);
    };
    const handleRemoveRoom = useCallback(
        (index: number) => {
            const newRoom = [...dashboardList];
            newRoom.splice(index, 1);
            setDashboardList(newRoom);
        },
        [dashboardList],
    );
    const renderDashboard = useCallback(
        () =>
            dashboardList.map((db, index) => (
                <DasboardItem
                    onClick={() => {
                        handleRemoveRoom(index);
                    }}
                    key={index}
                    name={(index + 1).toString()}
                />
            )),
        [dashboardList, handleRemoveRoom],
    );
    const handleAddCinema = () => {
        const newRooms = dashboardList.map((room, index) => ({
            ...room,
            name: `RAP ${index + 1}`,
        }));
        setDashboardList(newRooms);
    };
    const validationSchema = yup.object({
        name: yup.string().required(),
        address: yup.string().required(),
        district: yup.string().required(),
        city: yup.string().required(),
        status: yup.string().required(),
        phoneNumber: yup.string().required(),
    });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: yupResolver<FieldValues>(validationSchema),
    });

    const { dispatch } = useRedux();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const payload = { ...data, rooms: dashboardList, description: 'null' };
        const res =
            //  dispatch(
            // postCinema(payload as ICinema)
            Axios.axiosPostWithToken(
                ENDPOINTS.ADMIN.CINEMA.POST_CINEMA,
                payload,
            );
        // );
        toast.promise(res, {
            loading: 'Đang tải...',
            success: (data: any) => {
                return 'Thêm mới thành công';
            },
            error: (err: any) => {
                return 'Error: ' + err;
            },
        });
        window.location.reload();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-10"
        >
            <div className="w-full">
                <CinemaForm
                    register={register}
                    control={control}
                    errors={errors}
                />
                <RoomForm
                    handleAddRoom={handleAddRoom}
                    renderDashboard={renderDashboard}
                />
            </div>
            <div className="flex flex-col items-center gap-[10px]">
                <Button
                    large
                    highlight
                    onClick={() => {
                        handleAddCinema();
                    }}
                >
                    Thêm rạp
                </Button>
                <Link
                    className="text-white/50 text-sm font-semibold font-inter"
                    to="/admin/cinema"
                >
                    Hủy bỏ
                </Link>
            </div>
        </form>
    );
}

export default AddItem;
