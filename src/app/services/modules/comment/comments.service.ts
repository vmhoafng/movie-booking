import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import { ICommentStatus } from "@/app/types/comment";
import { Axios } from "@/app/utils/api";
const commentService = {
   getAll: async () => {
      return await Axios.axiosGetWithToken(ENDPOINTS.ADMIN.COMMENT.ALL);
   },

   getCommentByStatus: async (payload: ICommentStatus) => {
      return await Axios.axiosGetWithToken(ENDPOINTS.ADMIN.COMMENT.BY_STATUS, {
         params: {
            status: payload,
         },
      });
   },

   putStatus: async (id: string, payload: ICommentStatus) => {
      console.log(id, payload);

      return await Axios.axiosPutWithToken(
         getEndPoint(ENDPOINTS.ADMIN.COMMENT.MODIFY_STATUS, {
            commentId: id,
         }),
         payload,
         {
            params: {
               status: payload,
            },
         }
      );
   },
};

export default commentService;
