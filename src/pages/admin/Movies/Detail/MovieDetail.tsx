import Title from "@/app/components/Title";
import SelectInput, { SelectOption } from "@/app/components/inputs/SelectInput";
import UnderlineInput from "@/app/components/inputs/UnderlineInput";
import {
  CalendarIcon,
  ChevronDownIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import CRUDButton from "../../components/buttons/CRUDButton";
import Dropzone from "react-dropzone";
import FileUploader, { TFile } from "@/app/components/upload/FileUploader";
import Icon from "@/app/components/icon/Icon";

import ImageHolder from "@/app/components/upload/ImageHolder/ImageHolder";
import useMovieDetail from "./useMovieDetail";
import { MovieDetailProps } from "./MovieDetail.type";
import { IMovieFormat, IMovieGenre } from "@/app/types/movie";
import MultipleSelect from "@/app/components/inputs/MultipleSelect";
import { useEffect, useMemo, useState } from "react";
import { Axios } from "@/app/utils/api";
import ControlBar from "../../components/controlBar/ControlBar";
import ImageUploader from "../components/ImageUploader";
import { Toaster } from "sonner";
import { PATHS } from "@/app/constants/path";

const statusOptions: SelectOption[] = [
  {
    label: "Đang chiếu",
    value: 2,
  },
  {
    label: "Sắp chiếu",
    value: 1,
  },
  {
    label: "Ngừng chiếu",
    value: 4,
  },
];

function MovieDetail({ mode = "create" }: MovieDetailProps) {
  const {
    control,
    errors,
    clearErrors,
    movie,
    images,
    files,
    isDirty,
    register,
    handleCancel,
    setFiles,
    setHorPoster,
    setPoster,
    setImages,
    submitEdit,
    submitCreate,
  } = useMovieDetail(mode);

  const [formats, setFormats] = useState<SelectOption[]>([]);
  const [genres, setGenres] = useState<SelectOption[]>([]);

  useEffect(() => {
    Axios.axiosGetWithToken("admin/movieGenres").then(({ data }) => {
      const gettedGenres = data.data.map((genre: IMovieGenre) => ({
        label: genre.name,
        value: genre.id,
      }));
      setGenres([...gettedGenres]);
    });
    Axios.axiosGetWithToken("admin/formats").then(({ data }) => {
      const gettedFormats = data.data.map((format: IMovieFormat) => ({
        label: `${format.caption}-${format.version}`,
        value: format.id,
      }));

      setFormats([...gettedFormats]);
    });
  }, []);

  const modeConfigs = {
    edit: {
      ControlBar: (
        <ControlBar title="QUẢN LÝ PHIM" subTitle="CHỈNH SỬA">
          <div className="flex gap-2 items-center">
            <div className="">
              <CRUDButton
                onClick={handleCancel}
                to={`/admin/movies`}
                variant="Cancel"
              >
                Hủy bỏ
              </CRUDButton>
            </div>
            <div className="">
              <CRUDButton variant="Save" type="submit">
                Cập nhật
              </CRUDButton>
            </div>
          </div>
        </ControlBar>
      ),
      handle: submitEdit,
    },
    create: {
      ControlBar: (
        <ControlBar title="QUẢN LÝ PHIM" subTitle="THÊM PHIM">
          <div className="">
            <CRUDButton variant="Add" type="submit">
              Thêm mới
            </CRUDButton>
          </div>
        </ControlBar>
      ),
      handle: submitCreate,
    },
  };

  console.log(errors);

  return (
    <>
      <Toaster position="top-center" expand gap={10} closeButton richColors />
      <form className="relative" onSubmit={modeConfigs[mode].handle}>
        {modeConfigs[mode].ControlBar}
        <div className="flex gap-[30px] py-[25px] border-b-[1px] border-dashed border-borderColor ">
          <div className="">
            <ImageUploader
              id="poster"
              clear={clearErrors}
              errors={errors}
              label="Poster"
              initialImage={movie?.poster}
              onFilePreview={setPoster}
            />
            <div className="mt-[10px]">
              <ImageUploader
                id="hor_poster"
                clear={clearErrors}
                errors={errors}
                label="Poster"
                onFilePreview={setHorPoster}
                variant="horizontal"
                initialImage={movie?.horizontal_poster}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col  gap-2 ">
              <UnderlineInput
                variant="primary"
                id="name"
                name="name"
                register={register}
                errors={errors}
              />
              <UnderlineInput
                variant="secondary"
                id="subName"
                name="subName"
                register={register}
                errors={errors}
              />
            </div>
            <div className="mt-2">
              <p>
                <span className="text-white/70">Đánh giá:</span>{" "}
                {movie?.rating.toFixed(1) || 0}
                /5.0
                <StarIcon className=" ml-1 h-5 w-5 inline-block pb-1 text-yellow-400" />
                <span className="text-white/70">
                  ({movie?.sum_of_ratings || 0})
                </span>
              </p>
              <div className=" mt-1 flex gap-1 items-center ">
                <Icon icon="clock" className="pb-1" />
                <UnderlineInput
                  id="runningTime"
                  name="runningTime"
                  variant="time"
                  register={register}
                  errors={errors}
                />
                <p className="text-sm text-lightPrimary">phút</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-5 ">
              <UnderlineInput
                label="Ngôn ngữ"
                id="language"
                name="language"
                register={register}
                errors={errors}
              />

              <MultipleSelect
                id="genre"
                label="Thể loại"
                errors={errors}
                control={control}
                options={genres}
                value={useMemo(() => {
                  return (
                    (movie?.genre || []).map((f: IMovieGenre) => {
                      return genres.find((o: SelectOption) => o.value === f.id);
                    }) || []
                  );
                }, [movie, genres])}
              />

              <MultipleSelect
                id="formats"
                label="Định dạng"
                errors={errors}
                control={control}
                options={formats}
                value={useMemo(() => {
                  return (
                    (movie?.formats || []).map((f: IMovieFormat) => {
                      return formats.find(
                        (o: SelectOption) => o.value === f.id
                      );
                    }) || []
                  );
                }, [movie, formats])}
              />

              <UnderlineInput
                label="Nhà sản xuất"
                id="producer"
                name="producer"
                register={register}
                errors={errors}
              />
              <UnderlineInput
                label="Diễn viên"
                id="cast"
                name="cast"
                register={register}
                errors={errors}
              />
              <UnderlineInput
                label="Đạo diễn"
                id="director"
                name="director"
                register={register}
                errors={errors}
              />
              <UnderlineInput
                label="Độ tuổi"
                id="rated"
                name="rated"
                register={register}
                errors={errors}
              />
              {/* @ts-ignore */}
              <label
                htmlFor="relase_date"
                className="flex relative text-[15px] w-[450px] "
              >
                <p className="flex-[0_0_160px] text-white/70">
                  Ngày khởi chiếu
                </p>
                <input
                  id="release_date"
                  type="date"
                  className=" pl-[15px] text-[14px] w-[300px] rounded border  bg-[#EFEFEF]/20 outline-none"
                  placeholder="YYYY-MM-DD"
                  {...register("releaseDate")}
                />
                <span className="absolute top-[1px] right-[15px]">
                  <CalendarIcon className="h-5 w-5" />
                </span>
              </label>
              <label
                htmlFor="endDate"
                className="flex relative text-[15px]  w-[450px]  "
              >
                <p className="flex-[0_0_160px] text-white/70">
                  Ngày ngưng chiếu
                </p>
                <div className="">
                  <input
                    id="end_date"
                    type="date"
                    className=" pl-[15px] text-[14px] w-[300px] rounded border  bg-[#EFEFEF]/20 outline-none"
                    placeholder="YYYY-MM-DD"
                    {...register("endDate", {})}
                  />
                  {errors["endDate"] && (
                    <div className="text-sm mt-1 text-red-500/80 ">
                      {errors["endDate"].message?.toString()}
                    </div>
                  )}
                </div>

                <span className="absolute top-[1px] right-[15px]">
                  <CalendarIcon className="h-5 w-5" />
                </span>
              </label>

              <label className="flex  w-[450px] ">
                <p className="flex-[0_0_160px] text-white/70">Trạng thái</p>
                {/* <SelectInput
									inputClassName="w-[300px]"
									id="statusId"
									name="statusId"
									options={statusOptions}
									control={control}
									value={useMemo(() => {
										return statusOptions.find(
											(o) => o.value === (movie?.status.id || 0)
										);
									}, [movie])}
									//@ts-ignore
									endIcon={ChevronDownIcon}
								/> */}
                <select
                  className=" bg-[#EFEFEF]/20  px-[15px] text-center block border appearance-none border-[#fff]/80 rounded"
                  {...register("statusId")}
                >
                  {statusOptions.map((status) => (
                    <option
                      className="bg-[#31375A] py-[10px]"
                      value={status.value}
                    >
                      {status.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="py-[25px]  border-dashed border-b-[1px] border-borderColor">
          <Title active={true}>Nội dung phim</Title>
          <label htmlFor="description" className="block mt-4">
            <textarea
              id="description"
              placeholder="Nội dụng"
              className="text-white/60 text-[15px] h-[200px]  bg-transparent w-full resize-none border-white/10 border-b-[1px] outline-none focus:border-highlight"
              {...register("description")}
            />
            <div className="mt-1 text-sm text-red-500/80 ">
              {errors["description"]?.message?.toString()}
            </div>
          </label>
        </div>
        <div className="mt-[30px]">
          <Title active={true}>Trailer</Title>
          <label
            htmlFor="trailer"
            className="bg-white/10 py-4 px-[10px] block border mt-4 rounded border-white/10"
          >
            <input
              id="trailer"
              {...register("trailer")}
              className="bg-transparent outline-none w-full "
              type="text"
            />
            <div className="mt-1 text-sm text-red-500/80 ">
              {errors["trailer"]?.message?.toString()}
            </div>
          </label>
        </div>
        <div className="mt-[50px]">
          <Title active={true}>Hình ảnh</Title>
          <div className="mt-5">
            <FileUploader
              id="images"
              clear={clearErrors}
              errors={errors}
              maxFiles={8}
              showPreview
              onFileUpload={(acceptedFiles) => {
                setFiles([...acceptedFiles]);
              }}
              onRemovePreviewFile={(file, index) => {
                const newFiles = [...files];
                newFiles.splice(newFiles.indexOf(file), 1);
                setFiles(newFiles);
                const newImages = [...images!];
                newImages.splice(index!, 1);
                setImages([...newImages]);
              }}
              initialState={images}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default MovieDetail;
