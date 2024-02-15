import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, imagelink, brandname, category, price, short, _id, rating } =
    product;
  return (
    <div>
      <div className="card w-80 h-5/6 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-52" src={imagelink} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short.slice(0, 100)}</p>
          <div>
            <h1>
              Brand Name: <span>{brandname}</span>
            </h1>
            <h1>
              Category: <span>{category}</span>
            </h1>
          </div>
          <div>
            <h1>
              Price: <span>{price}</span>
            </h1>
            <h1>
              Rating: <span>{rating}</span>
            </h1>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <Link to={`/productdetails/${_id}`}>Details</Link>
            </div>
            <div className="badge badge-outline">Update</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
