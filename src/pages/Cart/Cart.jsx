import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const Cart = () => {
  const loadedData = useLoaderData();
  const [products, setProducts] = useState(loadedData);

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
        fetch(`http://localhost:5000/cartProducts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remainingProducts = products?.filter(
                (product) => product._id !== id
              );
              setProducts(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="w-[90%] mx-auto my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      {products?.map((product) => (
        <div key={product._id} className="border rounded-lg p-3">
          <img
            className=" w-32 h-28 md:w-40 md:h-32 rounded-md"
            src={product?.image}
            alt=""
          />
          <div className="mt-4">
            <p>
              <span className="font-semibold">Name: </span>
              {product.name}
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              {product.price}
            </p>
            <button
              onClick={() => handleDelete(product._id)}
              className="flex items-center justify-center gap-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-5 py-2 text-center "
            >
              <AiFillDelete />
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
