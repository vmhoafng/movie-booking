import { ENDPOINTS } from "@/app/constants/endpoint";
import { ICommentStatus } from "@/app/types/comment";
import { Axios } from "@/app/utils/api";
const commentService = {
   getAll: async () => {
      return await Axios.axiosGet(ENDPOINTS.ADMIN.COMMENT.ALL);
   },
   getCommentByStatus: async (payload: ICommentStatus) => {
      console.log(payload);

      return await Axios.axiosGet(
         `${ENDPOINTS.ADMIN.COMMENT.BY_STATUS}/${payload}`
      );
   },
};

export default commentService;
