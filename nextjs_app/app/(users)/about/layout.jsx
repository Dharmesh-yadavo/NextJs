//! nested layout of about section
const AboutLayout = ({ children }) => {
  return (
    <section>
      <h1>About Layout Page 😁</h1>
      {/* Layout UI */}
      {/* Place children where you want to render a page or nested layout */}

      <main>{children}</main>
    </section>
  );
};

export default AboutLayout;
