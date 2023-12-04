import { TFile } from "@/app/components/upload/FileUploader";
import { ICinema, ICinemaShowtimeList } from "../cinema";
import { IShowtime } from "../showtime";
import { IComment } from "../comment";

export type IMovieFormat = {
  id: number;
  caption: string;
  version: string;
};

export type IMovie = {
  id: string;
  name: string;
  cast: string;
  comment: IComment[];
  rating: number;
  language: string;
  producer: string;
  description: string;
  country: string;
  trailer: string;
  poster: string;
  slug: string;
  rated: number;
  formats: IMovieFormat[];
  genre: IMovieGenre[];
  director: string;
  status: IMovieStatus;
  sub_name: string;
  release_date: string;
  end_date: string;
  running_time: number;
  sum_of_ratings: number;
  horizontal_poster: string;
  images?: IMovieImage[];
  showtimes?: IShowtime[];
  cinema?: ICinemaShowtimeList[];
};

export type IMovieStatus = {
  id: number;
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

export type IMoviesGetAll = {
  total: number;
  data: IMovie[];
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

export type IMovieImage = {
  path: string;
  extention?: string;
  id: number;
};

export type IPutMovieDetails = {
  movie: string;
  poster?: TFile;
  horPoster?: TFile;
  images?: TFile[];
};
export type IgetShowtimeByMovie = {
  id: string;
  date: string;
};
