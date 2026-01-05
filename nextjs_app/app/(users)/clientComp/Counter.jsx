import { useState } from "react";
//! no need to write here {use client}

export const Counter = () => {
  const [inc, setInc] = useState(0);

  return (
    <button
      className="bg-blue-400 rounded-2xl p-2 text-black text-xl font-bold font-delius cursor-pointer ml-3"
      onClick={() => setInc((prev) => prev + 1)}
    >
      Add - {inc}
    </button>
  );
};
