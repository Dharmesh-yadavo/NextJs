"use client";

import { use } from "react";

//! Dynamic routing (path parameter) in client side ...
//! http:localhost:3000/user/Dharmesh/post/123

const PostIdPage = (props) => {
  const user = use(props.params);

  //   console.log(user);

  return (
    <div className="mt-10 ml-14 flex flex-col gap-2 text-purple-300 ">
      <h1>userName: {user.userName}</h1>
      <h2>postId: {user.postId}</h2>
    </div>
  );
};

export default PostIdPage;
