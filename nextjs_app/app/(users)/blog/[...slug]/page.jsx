const Blog = async (props) => {
  //! Catch‑All Segments in Dynamic Routing (Path Parameters)
  //! http://localhost:3000/blog/web_devlopmenrt/frontend/java_script/basics

  const { slug } = await props.params;
  console.log(slug);
  return (
    <>
      <h1>BlogPage</h1>
      <div className="container">
        {slug.map((curSlug, index) => {
          return <h1 key={index}>{curSlug}</h1>;
        })}
      </div>
    </>
  );
};

export default Blog;
