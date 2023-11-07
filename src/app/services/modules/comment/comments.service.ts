import { ENDPOINTS } from "@/app/constants/endpoint";
import { ICommentStatus } from "@/app/types/comment";
import { Axios } from "@/app/utils/api";
const commentService = {
   getAll: async () => {
      return await Axios.axiosGet(ENDPOINTS.ADMIN.ALL_COMMENT);
   },
   getCommentByStatus: (payload: ICommentStatus) => {
      return Axios.axiosGet(`${ENDPOINTS.MOVIE_SLUG}/${payload.status}`);
   },
};

export default commentService;
