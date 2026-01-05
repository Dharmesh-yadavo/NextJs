import ProductList from "./ProductList";

const Products = async ({ searchParams }) => {
  //   const searchParam = await props.searchParams;
  //   console.log(searchParam);

  const searchParam = await searchParams;

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;

  return (
    <div className="mt-10 ml-14 flex flex-col gap-2 text-purple-300 ">
      <ProductList />
      <h1 className="text-2xl font-bold">Products</h1>
      <h1>category: {category}</h1>
      <h2>sort: {sort} </h2>
      <h3>page_number: {page}</h3>
    </div>
  );
};

export default Products;
