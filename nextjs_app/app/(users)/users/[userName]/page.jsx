const SingleProfile = async (props) => {
  //! Dynamic routing (path parameter) in server side ...
  //! http:localhost:3000/user/Dharmesh

  const user = await props.params;

  // console.log(user);

  return (
    <div className="ml-12 mt-10 text-purple-300">
      userName = {user.userName}
    </div>
  );
};

export default SingleProfile;
