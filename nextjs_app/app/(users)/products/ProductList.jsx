"use client";

import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  //   console.log(Object.fromEntries(searchParams.entries()));
  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const sort = searchParams.get("sort");

  return (
    <div className="text-cyan-200 ">
      <h1 className="text-2xl font-bold">ProductList</h1>
      <h1>Category: {category}</h1>
      <h2>Pages: {page}</h2>
      <h3>Sort: {sort}</h3>
    </div>
  );
};

export default ProductList;
