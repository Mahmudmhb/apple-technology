import React from "react";

const AddProducts = () => {
  const handleAddToProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imagelink = form.imagelink.value;
    const brandname = form.brandname.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const short = form.short.value;
    const addtoProduct = {
      name,
      imagelink,
      brandname,
      category,
      price,
      short,
      rating,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addtoProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("SuccessFully added Products");
        // form.reset();
      });
    // console.log(addtoProduct);
  };
  return (
    <div className="w-4/5 my-5 mx-auto">
      <h1 className="text-center text-5xl font-bold my-5 uppercase">
        ADD your New Products
      </h1>
      <form onSubmit={handleAddToProducts}>
        <div className="md:flex  my-5 gap-3">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Name:
              <input
                required
                type="text"
                className="grow"
                placeholder="Name"
                name="name"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              ImageLink:
              <input
                required
                type="text"
                className="grow"
                placeholder="ImageLink"
                name="imagelink"
              />
            </label>
          </div>
        </div>
        <div className="md:flex  my-5 gap-3">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Brand Name:
              <input
                required
                type="text"
                className="grow"
                placeholder="Brand Name"
                name="brandname"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Category:
              <input
                required
                type="text"
                className="grow"
                placeholder="Category "
                name="category"
              />
            </label>
          </div>
        </div>
        <div className="md:flex  my-5 gap-3">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Price:
              <input
                required
                type="text"
                className="grow"
                placeholder="Price"
                name="price"
              />
            </label>
          </div>
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Short description:
              <input
                required
                type="text"
                className="grow"
                placeholder="Short description"
                name="short"
              />
            </label>
          </div>
        </div>
        <div className="md:flex  my-5 gap-3">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Rating:
              <input
                required
                type="text"
                className="grow"
                placeholder="Rating"
                name="rating"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-primary text-white w-full">
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
