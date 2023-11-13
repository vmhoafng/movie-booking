export const ROUTE_PARAMS = {
  MOVIE_ID: ":movieId",
  CINEMA_ID: ":cinemaId",
  USER_ID: ":userId",
  SHOWTIME_ID: ":showTimeId",
  MOVIE_SLUG: ":movieSlug",
  COMMENT_STATUS: ":status",
  COMMENT_ID: ":commentId",
  DASHBOARD_DATE: ":date",
  PASSWORD: ":password",
  VARIANTS: ":variants",
};

export const PATHS = {
  HOME: {
    IDENTITY: "",
  },
  LOGIN: {
    IDENTITY: "login",
  },
  REGISTER: {
    IDENTITY: "register",
  },

  AUTH: {
    IDENTITY: "auth",
    VARIANTS: `${ROUTE_PARAMS.VARIANTS}`,
  },

  MOVIES: {
    IDENTITY: "movies",
    LIST: "",
    DETAIL: `${ROUTE_PARAMS.MOVIE_ID}`,
  },
  CINEMA: {
    IDENTITY: "cinema",
    LIST: "",
  },
  PROFILE: {
    IDENTITY: "profile",
    DETAIL: "",
    EXCHANGE: "lich-su-giao-dich",
  },
  PAYMENT: {
    IDENTITY: "payment",
    DETAIL: "",
  },
  TICKETS: {
    IDENTITY: "ticket/:showtimeId",
    DETAIL: "",
  },

  ADMIN: {
    IDENTITY: "admin",
    MOVIES: {
      IDENTITY: "movies",
      LIST: "",
      DETAIL: `${ROUTE_PARAMS.MOVIE_ID}`,
    },
    CINEMA: {
      IDENTITY: "cinema",
      LIST: "",
      DETAIL: `${ROUTE_PARAMS.CINEMA_ID}`,
    },
    SHOWTIMES: {
      IDENTITY: "showtimes",
      LIST: "",
    },
    DASHBOARD: {
      IDENTITY: "dashboard",
    },

    COMMENTS: {
      IDENTITY: "comments",
    },

    USERS: {
      IDENTITY: "users",
      LIST: "",
      DETAIL: `${ROUTE_PARAMS.USER_ID}`,
    },
  },
};
