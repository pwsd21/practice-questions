import React from "react";
import CommentBox from "./CommentBox";

const data = [
  {
    userName: "Pawan",
    comment: "Jai Shree Ram",
    replies: [
      {
        userName: "Deepika",
        comment: "Jai Bajrang Bali",
        replies: [
          {
            userName: "Katrnia",
            comment: "Jai Baba Ki",
          },
        ],
      },
    ],
  },
  {
    userName: "Jatin",
    comment: "Jai Shree Ram",
  },
  {
    userName: "Gautam",
    comment: "Jai Shree Ram",
  },
];

const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
