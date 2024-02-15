import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const carts = useLoaderData();
  const [totalCart, setTotalCart] = useState(carts);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addtoCart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaing = totalCart.filter((remin) => remin._id !== id);
            setTotalCart(remaing);
          });
      }
    });

    console.log(id);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-2xl">
              <th>Name</th>
              <th>Brand Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {totalCart.map((cart) => (
              <tr className="">
                <td key={cart._id}>{cart.name}</td>
                <td>{cart.brandname}</td>
                <td>{cart.category}</td>
                <td>
                  <button
                    onClick={() => handleDelete(cart._id)}
                    className=" text-3xl text-warning"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
