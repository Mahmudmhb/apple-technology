import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  return (
    <div className="my-5">
      <Link to="/products">
        <div className="card card-compact w-96 bg-base-100 shadow-lg mx-auto">
          <figure>
            <img
              className="h-32 w-40 rounded mt-5"
              src={brand.imageUrl}
              alt={brand.brandName}
            />
          </figure>
          <div className="text-center">
            <h2 className="text-3xl py-5 font-bold uppercase">
              {brand.brandName}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
