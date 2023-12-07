import { ROUTE_PARAMS } from "./path";

export const ENDPOINTS = {
  MOVIE_BY_STATUS: `landing/status/movies`,
  MOVIES: `landing/movies`,
  MOVIE_SLUG: `landing/movie/${ROUTE_PARAMS.MOVIE_SLUG}`,
  GET_SHOWTIME_BY_CINEMA_DATE: `landing/cinema/${ROUTE_PARAMS.CINEMA_ID}/showtime`,
  CINEMA_MOVIES_SHOWTIME: "landing/cinema/movie/showtime",
  SHOWTIME_BY_MOVIE: `landing/movie/${ROUTE_PARAMS.MOVIE_ID}/showtime`,
  SEARCH_MOVIE: `landing/searchMovie`,
  SHOWTIME_SEAT: `landing/showtime/${ROUTE_PARAMS.SHOWTIME_ID}/seats`,
  MOVIE_GENRES: `landing/movieGenres`,
  CINEMA_DETAILS: `landing/cinema/${ROUTE_PARAMS.CINEMA_ID}`,
  CINEMA_LIST: `landing/cinemas`,
  POST_COMMENT: `comment`,
  PROFILE: {
    DATA: "profile",
    CHECKPASSWORD: "checkPassword",
    UPDATE_AVATAR: "user/avatar",
    UPDATE_PROFILE: "user",
    CHANGEPASSWORD: "changePassword",
    BILLS: "customer/user/bills",
  },
  PAYMENT: {
    POST_BILL: "customer/bill",
  },

  AUTH: {
    FORGOT_PASSWORD: "auth/sendToResetPass",
    RESET_PATH: "auth/resetPass",
    REGISTER: "auth/register",
    VERIFY_EMAIL: "guest/verifyAccount",
    REQUEST_VERIFY_EMAIL: "guest/sendToVerifyAccount",
    CHECK_FORGOT_PASSWORD: "auth/checkUrlToResetPass",
  },

  ADMIN: {
    MOVIE: {
      DETAIL: `admin/movie/${ROUTE_PARAMS.MOVIE_ID}`,
      LIST: `admin/movies`,
      PUT: `admin/movie/${ROUTE_PARAMS.MOVIE_ID}`,
      POST: "admin/movie",
    },
    COMMENT: {
      ALL: "admin/comments",
      BY_STATUS: `admin/comments/status`,
      MODIFY_STATUS: `admin/moderationComment/${ROUTE_PARAMS.COMMENT_ID}`,
    },
    DASHBOARD: {
      ALL: `admin/statistical`,
    },
    CINEMA: {
      POST_CINEMA: "admin/cinemaRoom",
      UPDATE_CINEMA: `admin/cinema/${ROUTE_PARAMS.CINEMA_ID}`,
      GET_ROOMS_BY_CINEMA_ID: `admin/cinema/${ROUTE_PARAMS.CINEMA_ID}/rooms`,
      GET_CINEMA_BY_ID: `admin/cinema/${ROUTE_PARAMS.CINEMA_ID}`,
      UPDATE_ROOM: `admin/room/${ROUTE_PARAMS.ROOM_ID}/status`,
    },
    SCHEDULE: {
      LIST: "admin/cinema/room/showtime",
      POST_SHOWTIME: "admin/showtime",
      DELETE_SHOWTIME: `admin/showtime/${ROUTE_PARAMS.SHOWTIME_ID}`,
    },
    ACCOUNT: {
      ALL: "admin/users",
      DETAIL: `admin/user/${ROUTE_PARAMS.USER_ID}`,
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
