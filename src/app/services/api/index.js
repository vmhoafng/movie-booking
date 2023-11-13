/* eslint-disable import/no-anonymous-default-export */

import movie from "../modules/movie";
import showtime from "../modules/showtime";
import cinemaService from "../modules/cinema";
import profileService from "../modules/profile/profile.service";
import moviesService from "../modules/movies/movies.service";
import { paymetService } from "../modules/payment";
import dashboardService from "../modules/dashboard/dashboard.service";
import commentService from "../modules/comment/comments.service";
export default {
   movie,
   showtime,
   cinemaService,
   moviesService,
   paymetService,
   profileService,
   commentService,
   dashboardService,
};
