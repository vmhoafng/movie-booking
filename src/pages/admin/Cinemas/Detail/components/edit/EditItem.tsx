import React, { ForwardedRef, useCallback, useEffect, useState } from 'react';
import CinemaForm from '../CinemaForm';
import Button from '@/app/components/button/Button';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useRedux } from '@/app/hooks';
import { getCinemaById } from '@/app/redux/cinema';
import Table from '../../../../components/table/Table';
import Pagination from '../../../../components/pagination/Pagination';
import Status from '@/pages/admin/components/Status';
import clsx from 'clsx';
import { ChevronDownIcon, PencilIcon } from '@heroicons/react/20/solid';
import SelectInput, { SelectOption } from '@/app/components/inputs/SelectInput';
import { Axios } from '@/app/utils/api';
import { ENDPOINTS, getEndPoint } from '@/app/constants/endpoint';
import { toast } from 'sonner';
import useOutsideClick from '@/app/hooks/useOutsideClick';

interface EditItemProps {
    id: string;
}
const dataKeys = ['id', 'name', 'totalSeats', 'status'];
const columns = ['ID', 'Phòng', 'Số ghế', 'Trạng thái'];
function EditItem({ id }: EditItemProps) {
    const ref = useOutsideClick(() => setEditStatus(undefined));
    const { appSelector, dispatch } = useRedux();
    const { currentCinema, rooms } = appSelector((state) => state.cinema);
    const [roomsData, setRoomsData] = useState(rooms);
    useEffect(() => {
        dispatch(getCinemaById(id));
    }, [dispatch, id]);
    useEffect(() => {
        setRoomsData(rooms);
    }, [rooms]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page
    const pageCount = Math.ceil(roomsData.length / itemsPerPage);
    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage + 1);
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
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        resolver: yupResolver<FieldValues>(validationSchema),
    });
    useEffect(() => {
        reset({
            name: currentCinema?.name,
            address: currentCinema?.address,
            district: currentCinema?.district,
            city: currentCinema?.city,
            status: currentCinema?.status,
            phoneNumber: currentCinema?.phone_number,
        });
    }, [currentCinema, reset]);
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const cinemaData = {
            name: data.name,
            address: data.address,
            district: data.district,
            city: data.city,
            description: 'null',
            phoneNumber: data.phoneNumber,
            status: data.status,
        };
        console.log(cinemaData);

        const cinema = Axios.axiosPutWithToken(
            getEndPoint(ENDPOINTS.ADMIN.CINEMA.UPDATE_CINEMA, {
                cinemaId: id,
            }),
            cinemaData,
        );
        toast.promise(cinema, {
            loading: 'Đang tải...',
            success: (data: any) => {
                return 'Sửa rạp thành công';
            },
            error: (err: any) => {
                return 'Error: ' + err;
            },
        });
    };
    const [editStatus, setEditStatus] = useState();
    const statusOptions: SelectOption[] = [
        { label: 'Hoạt động', value: 1 },
        { label: 'Đóng cửa', value: 2 },
        { label: 'Bảo trì', value: 3 },
    ];
    const renderCell = useCallback(
        (row: any, dataKeys: any) => {
            if (dataKeys === 'status' && editStatus !== row.id)
                return (
                    <Status
                        status={
                            clsx(
                                row['status'] === 'Hoạt động' && 'active',
                                row['status'] === 'Bảo trì' && 'warning',
                                row['status'] === 'Đóng cửa' && 'disabled',
                            ) as 'active' | 'warning' | 'disabled'
                        }
                    >
                        {row['status']}
                    </Status>
                );
            if (dataKeys === 'status' && editStatus === row.id)
                return (
                    <div ref={ref as ForwardedRef<HTMLDivElement>}>
                        <SelectInput
                            required
                            id="status"
                            control={control}
                            options={statusOptions}
                            placeholder="Chọn trạng thái"
                            name="status"
                            onChange={(e) => {
                                const newRoom = roomsData.map((room) => {
                                    if (room.id === row.id) {
                                        console.log(e.value);

                                        const axios = Axios.axiosPutWithToken(
                                            getEndPoint(
                                                ENDPOINTS.ADMIN.CINEMA
                                                    .UPDATE_ROOM,
                                                {
                                                    roomId: room.id,
                                                },
                                            ),
                                            '',
                                            {
                                                params: {
                                                    statusId: e.value,
                                                },
                                            },
                                        );
                                        toast.promise(axios, {
                                            loading: 'Đang tải...',
                                            success: (data: any) => {
                                                return 'Sửa rạp thành công';
                                            },
                                            error: (err: any) => {
                                                return 'Error: ' + err;
                                            },
                                        });
                                        return {
                                            ...room,
                                            status: e.label,
                                        };
                                    }
                                    return room;
                                });
                                setRoomsData(newRoom);
                            }}
                            register={register}
                            inputClassName="w-full"
                            value={statusOptions.find(
                                (status) =>
                                    status.value === currentCinema?.status,
                            )}
                            optionClassName="
            z-30
            text-white/90
            hover:bg-white/10
            px-[15px] 
            py-2
            transition-all
            duration-150"
                            buttonClassName="
            text-start
            block
            w-full
            px-[15px]
            rounded
            border
            shadow-sm
            bg-white/10
            outline-0
            text-white/90
            border-borderColor
            focus:border-borderColor
            relative
            h-[35px]"
                            //@ts-ignore
                            endIcon={ChevronDownIcon}
                        />
                    </div>
                );
            return <span className="">{row[dataKeys]}</span>;
        },
        [control, currentCinema?.status, editStatus, register, statusOptions],
    );
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center gap-10"
            >
                <div className="w-full flex flex-col gap-4">
                    <CinemaForm
                        register={register}
                        control={control}
                        errors={errors}
                        currentCinema={currentCinema}
                    />
                    <div>
                        <Table
                            action={(row) => [
                                {
                                    label:
                                        row.id !== editStatus ? 'Sửa' : 'Hủy',
                                    onClick: () => {
                                        if (row.id !== editStatus) {
                                            return setEditStatus(row.id);
                                        }
                                        row['status'] = row.id;

                                        return setEditStatus(undefined);
                                    },
                                    icon: PencilIcon,
                                },
                            ]}
                            data={roomsData}
                            columns={columns}
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            dataKeys={dataKeys}
                            renderCell={renderCell}
                        />
                        <Pagination
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                            itemPerPage={itemsPerPage}
                            dataLength={roomsData.length}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                    <Button large highlight onClick={() => {}}>
                        Cập nhật
                    </Button>
                    <Link
                        className="text-white/50 text-sm font-semibold font-inter"
                        to="/admin/cinema"
                    >
                        Hủy bỏ
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default EditItem;
