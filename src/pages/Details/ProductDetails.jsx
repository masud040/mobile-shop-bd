import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { productName, price, image, descriptions } = product || {};
  const handleAddCart = () => {
    const cartProduct = {
      name: product?.productName,
      brand: product?.brandName,
      price: product?.price,
      image: product?.image,
    };
    fetch("http://localhost:5000/cartProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Great!",
            text: "Successfully add on cart",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className="w-[90%]  flex justify-center gap-8 items-center mx-auto my-8">
      <img className="w-36 rounded-md md:w-52 h-full" src={image} alt="" />
      <div>
        <p>
          <span className="font-semibold">Name: </span>
          {productName}
        </p>
        <p>
          <span className="font-semibold">Price: </span>
          {price}
        </p>
        <p className="text-sm w-60">
          <span className="font-semibold">description: </span> {descriptions}
        </p>
        <button
          onClick={handleAddCart}
          className="bg-pink-400 px-4 my-2 py-2 rounded-lg text-white font-bold"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
