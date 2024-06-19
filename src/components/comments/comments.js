import React from "react";
import CommentBox from "./CommentBox";

// Sample data array containing comments and nested replies
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

// Comments component that renders the CommentBox component with the data
const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
