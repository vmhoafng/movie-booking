import { ENDPOINTS, getEndPoint } from "@/app/constants/endpoint";
import { ICommentStatus, INewComment } from "@/app/types/comment";
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

   postComment: async (payload: INewComment) => {
      return await Axios.axiosPostWithToken(ENDPOINTS.POST_COMMENT, payload);
   },
};

export default commentService;
