import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const loadProduct = useLoaderData();
  //   console.log(loadProduct);
  const { name, imagelink, brandname, category, price, short, _id, rating } =
    loadProduct;
  const handleAddtoCart = (id) => {
    console.log(id);
    fetch("http://localhost:5000/addtoCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loadProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Product has been Add to Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="md:flex w-4/5 py-10 mx-auto gap-4 justify-between items-center">
      <div className="w-full">
        <img src={imagelink} alt="" />
        <p className="py-10">
          Short Description: <span> {short}</span>
        </p>
      </div>
      <div className="w-full">
        <div className="w-full bg-base-100 shadow-lg my-5 rounded-sm p-5">
          <h1 className="text-4xl py-5 uppercase font-bold">{name}</h1>
          <h1 className=" text-2xl">
            Brand Name:{" "}
            <span className="text-[#06c] text-xl"> {brandname}</span>
          </h1>
          <h1 className="py-3">
            Category: <span className="text-[#06c] text-xl"> {category}</span>
          </h1>
          <h1>
            Price:<span className="text-[#06c] text-xl"> {price}</span>
          </h1>
          <h1 className="py-5">
            Rating: <span className="text-[#06c] text-xl"> {rating}</span>
          </h1>
          <button
            onClick={() => handleAddtoCart(_id)}
            className="btn btn-primary w-full"
          >
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
