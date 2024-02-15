import React, { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/public/brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl uppercase text-center py-10 font-bold">
        Top technology <br></br>
        <span className="text-[#06c] my-3"> brands in the world </span>
      </h1>
      <div className="md:grid md:grid-cols-3 md:gap-3">
        {brands.map((brand) => (
          <Brand brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
