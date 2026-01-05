const postIdPage = async (props) => {
  const user = await props.params;

  //   console.log(user);

  return (
    <div className="mt-10 ml-14 flex flex-col gap-2 text-purple-300 ">
      <h1>userNAme: {user.userName}</h1>
      <h2>postId: {user.postId}</h2>
    </div>
  );
};

export default postIdPage;
