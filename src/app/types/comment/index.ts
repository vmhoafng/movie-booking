export type IComment = {
   id: any;
   content: string;
   movie: string;
   user: string;
   status: string;
   create_date: string;
   avatar_user: string;
};

export type ICommentList = {
   total: number;
   data: IComment[];
};

export type ICommentStatus = {
   status: "pending" | "approved" | "deleted";
};
