import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const loaderProducts = useLoaderData();
  //   console.log(loaderProducts);
  return (
    <div>
      <h1>this is products page</h1>
      <div className="md:grid md:grid-cols-3 w-10/12 mx-auto gap-3">
        {loaderProducts.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
