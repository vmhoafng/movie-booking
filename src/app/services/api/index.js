/* eslint-disable import/no-anonymous-default-export */

import movie from '../modules/movie';
import showtime from '../modules/showtime';
import cinemaService from '../modules/cinema';
import moviesService from '../modules//movies/movies.service';
import { paymetService } from '../modules/payment';
import commentService from "../modules/comment/comments.service";
import dashboardService from "../modules/dashboard/dashboard.service";
export default {
   movie,
   showtime,
   cinemaService,
   moviesService,
	paymetService,
   commentService,
   dashboardService,
};
