import React from "react";

// CommentBox component that takes `data` as a prop and renders comments recursively
const CommentBox = ({ data }) => {
  return data.map((comment, index) => (
    // Each comment is wrapped in a div with padding and left border styling
    <div className="pl-10 border-l-2 border-black" key={index}>
      <div className="flex">
        {/* User avatar */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Viorh-Avs9yWy82UqoFhbsjfs49jWm3lyQ&usqp=CAU"
            alt="user"
            className="w-10 p-2 rounded-full"
          />
        </div>
        {/* Comment content */}
        <div>
          <h3 className="font-bold px-2 py-4">{comment.userName}</h3>
          <p className="px-2">{comment.comment}</p>
        </div>
      </div>
      {/* Recursive logic to render nested replies */}
      <div>{comment?.replies && <CommentBox data={comment.replies} />}</div>
    </div>
  ));
};

export default CommentBox;
