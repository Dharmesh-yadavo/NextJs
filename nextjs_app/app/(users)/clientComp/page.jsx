"use client";
//! Client Components
//Adv
//~ Interactivity: This is where you use event listeners like onClick, onChange, and onSubmit.

//~ State & Lifecycle: Only Client Components can use React hooks like useState, useReducer, and useEffect.

//~ Browser APIs: If you need to access window, document, localStorage, or geolocation,
//~ you must use a Client Component.

//~ Immediate Feedback: Because they run in the browser, they provide the "Single Page App"
//~  feel with instant UI updates.

import { useEffect, useState } from "react";
import { Counter } from "./Counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      //   console.log(data);
      setPostData(data);

      return data;
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen m-10 ml-14">
      <button
        className="bg-blue-400 rounded-2xl p-2 text-black text-xl font-bold font-delius cursor-pointer"
        onClick={() => alert("Hello Everyone! ")}
      >
        Fetch Data
      </button>
      <Counter />
      <ul className="grid grid-cols-3 gap-5 mt-5">
        {postData.map((curElem, index) => {
          return <li key={index}> {curElem.body} </li>;
        })}
      </ul>
    </div>
  );
};

export default ClientComp;
