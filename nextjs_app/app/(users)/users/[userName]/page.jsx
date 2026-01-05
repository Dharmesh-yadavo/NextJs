const SingleProfile = async (props) => {
  const user = await props.params;

  // console.log(user);

  return (
    <div className="ml-12 mt-10 text-purple-300">
      userName = {user.userName}
    </div>
  );
};

export default SingleProfile;
