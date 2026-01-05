"use client";

import Link from "next/link";

//! used for working in client side { default: server side}

const Home = () => {
  return (
    <div
      className={`min-h-screen flex flex-col gap-6 items-center justify-center text-4xl `}
    >
      <h1 className="font-delius">Hello, Welcome to NextJs 😁</h1>
      <p className="font-meie">Dharma Bhai</p>
      <button
        className="bg-amber-300 rounded-2xl p-2 text-black text-2xl font-medium cursor-pointer"
        onClick={() => alert("hi")}
      >
        Click Me
      </button>
      <div className="flex gap-5">
        <button className="bg-pink-300 font-delius rounded-2xl p-2 text-black text-2xl">
          <Link href="/clientComp">ClientComp</Link>
        </button>
        <button className="bg-pink-300 font-delius rounded-2xl p-2 text-black text-2xl">
          <Link href="/serverComp">ServerComp</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
