//! Server Components
//Adv
//~ Zero Bundle Size: Since the code stays on the server, the JavaScript required to run that
//~  component isn't downloaded by the user. This makes your site much faster.

//~ Direct Database Access: You can use async/await to fetch data directly from your database
//~  or file system inside the component. No need for useEffect or internal API routes.

//~ Better SEO: The content is fully rendered into HTML before it reaches the browser,
//~  making it easily readable by search engine crawlers.

//~ Security: You can keep sensitive information (like API keys) on the server without
//~  ever exposing them to the browser.

const ServerComp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const res = await fetch(URL);
  const data = await res.json();
  //   console.log(data);

  return (
    <div className="min-h-screen m-10 ml-14">
      <h1 className="text-violet-400">Server Comp</h1>

      <ul className="grid grid-cols-3 gap-5">
        {data.map((curElem, index) => {
          return <li key={index}> {curElem.body} </li>;
        })}
      </ul>
    </div>
  );
};

export default ServerComp;
