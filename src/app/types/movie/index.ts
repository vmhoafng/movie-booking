import { TFile } from "@/app/components/FileUploader";
import { ICinema, ICinemaShowtimeList } from "../cinema";
import { IShowtime } from "../showtime";

export type IMovieFormat = {
   id: string;
   caption: string;
   version: string;
};

export type IMovie = {
   id: string;
   name: string;
   cast: string;
   director: string;
   rating: number;
   language: string;
   description: string;
   trailer: string;
   poster: string;
   slug: string;
   rated: string;
   status: IMovieStatus;
   sub_name: string;
   producer: string;
   release_date: string;
   end_date: string;
   running_time: number;
   number_of_ratings: number;
   horizontal_poster: string;
   showtimes?: IShowtime[];
   cinema?: ICinemaShowtimeList[];
};

export type IMovieStatus = {
   id: string;
   description: string;
   slug: string;
};

export type IMovieGenre = {
   id: number;
   name: string;
};

export type IMovieGenreList = {
   total: number;
   data: IMovieGenre[];
};

export type IMovieByStatusList = {
   total: number;
   data: [IMovieStatus & { movies: IMovie[] }];
};

export type IMovieShowTimeListByDate = IMovie & {
   genre: IMovieGenre;
   status: IMovieStatus;
   formats: IMovieFormat[];
   cinema: ICinema[];
};

export type IgetByStatus = {
   status: "coming-soon" | "showing-now";
   page?: number;
   size?: number;
};
export type IMovieSlug = {
   slug: string;
};

export type IPutMovieDetails = {
   name: string;
   sub_name: string;
   cast: string;
   language: string;
   description: string;
   country: string;
   status: string;
   producer: string;
   release_date: string;
   end_date: string;
   running_time: string;
   poster?: TFile;
   horizontal_poster?: TFile;
   images?: TFile[];
};
export type IgetShowtimeByMovie = {
   id: string;
   date: string;
};
