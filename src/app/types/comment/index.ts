export type IComment = {
   id: string;
   content: string;
   movie: string;
   user: string;
   status: string;
   create_date: string;
   avatar_user: string;
   rating: number;
};

export type ICommentList = {
   total: number;
   data: IComment[];
};

export type ICommentStatus = "PENDING" | "APPROVED" | "DELETED";

export type INewComment = {
   content: string;
   movieId: string;
   rating: number;
};
