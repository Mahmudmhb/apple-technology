import React from "react";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage:
            "url(https://www.apple.com/v/iphone/home/bs/images/overview/subhero/guided_tour__c40f88on9o8y_large.jpg)",
        }}
      >
        <div className="">
          {/* <img
            src="https://www.apple.com/v/home/bk/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_large.jpg"
            className=" rounded-lg shadow-2xl"
          /> */}
          <div>
            <h1 className="text-4xl text-white font-bold">A Guided Tour of</h1>
            <h1 className="text-5xl py-4 text-white font-bold">
              iPhone 15 & iPhone 15 Pro
            </h1>

            <Link to="/products">
              <button className="btn btn-primary">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
