const { default: Link } = require("next/link");

export const Navigation = () => {
  return (
    <>
      <header className="grid grid-cols-2 mt-2 mx-16">
        <div className="">Dharma Logo</div>
        <nav>
          <ul className="flex gap-3 justify-end">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
