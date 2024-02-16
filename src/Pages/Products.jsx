import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import Bannar from "../Header/Bannar";
import Slider from "../Components/Slider";

const Products = () => {
  const loaderProducts = useLoaderData();
  //   console.log(loaderProducts);
  return (
    <div>
      {/* <Slider></Slider> */}
      <div className="md:grid md:grid-cols-3 my-5 w-10/12 mx-auto gap-3">
        {loaderProducts.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
