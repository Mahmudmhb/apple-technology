import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadProduct = useLoaderData();
  //   console.log(loadProduct);
  const { name, imagelink, brandname, category, price, short, _id, rating } =
    loadProduct;
  return (
    <div className="flex w-4/5 mx-auto gap-4 justify-between">
      <div className="w-full">
        <img src={imagelink} alt="" />
        <p>{short}</p>
      </div>
      <div className="w-full bg-blue-200 my-5 rounded-sm p-5">
        <h1 className="text-4xl py-5 text-white font-bold">{name}</h1>
        <h1 className=" text-2xl">
          Brand Name: <span className="text-[#06c] text-2xl"> {brandname}</span>
        </h1>
        <h1 className="py-3">
          Category: <span className="text-[#06c] text-2xl">{category}</span>
        </h1>
        <h1>
          Price:<span className="text-[#06c] text-2xl">{price}</span>
        </h1>
        <h1 className="py-5">
          Rating: <span className="text-[#06c] text-2xl">{rating}</span>
        </h1>
        <button className="btn btn-primary w-full"> Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
