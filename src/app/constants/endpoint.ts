import { ROUTE_PARAMS } from "./path";

export const ENDPOINTS = {
  MOVIE_BY_STATUS: `landing/status/movies`,
  MOVIE_SLUG: `landing/movie/${ROUTE_PARAMS.MOVIE_SLUG}`,
  GET_SHOWTIME_BY_CINEMA_DATE: `landing/cinema/${ROUTE_PARAMS.CINEMA_ID}/showtime`,
  CINEMA_MOVIES_SHOWTIME: "landing/cinema/movie/showtime",
  SHOWTIME_BY_MOVIE: `lading/movie/${ROUTE_PARAMS.MOVIE_ID}/showtime`,
  SEARCH_MOVIE: `landing/searchMovie`,
  SHOWTIME_SEAT: `landing/showtime/${ROUTE_PARAMS.SHOWTIME_ID}/seats`,
  MOVIE_GENRES: `landing/movieGenres`,
  CINEMA_DETAILS: `landing/cinema/${ROUTE_PARAMS.CINEMA_ID}`,
  CINEMA_LIST: `landing/cinemas`,
  PROFILE: {
    DATA: "profile",
    CHECKPASSWORD: "checkPassword",
    UPDATE_AVATAR: "user/avatar",
    UPDATE_PROFILE: "user",
    CHANGEPASSWORD: "changePassword",
  },
  PAYMENT: {
    POST_BILL: "customer/bill",
  },

   AUTH: {
      FORGOT_PASSWORD: "auth/sendToResetPass",
      RESET_PATH: "auth/resetPass",
   },

   ADMIN: {
      MOVIE: {
         DETAIL: `admin/movie/${ROUTE_PARAMS.MOVIE_ID}`,
         LIST: `admin/movie`,
         PUT: `admin/movie/${ROUTE_PARAMS.MOVIE_ID}`,
      },
      COMMENT: {
         ALL: "admin/comments",
         BY_STATUS: `admin/comments/status`,
         MODIFY_STATUS: `admin/moderationComment/${ROUTE_PARAMS.COMMENT_ID}`,
      },
      DASHBOARD: {
         ALL: `admin/statistical`,
      },
   },
};

export const getEndPoint = (endpoint: string, arg: Object) => {
   let newEndpoint = "";
   Object.keys(arg).forEach((key) => {
      const regex = new RegExp("(:" + key + ")", "g");
      //@ts-ignore
      newEndpoint = endpoint.replace(regex, arg[key]);
   });
   return newEndpoint;
};
