import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, productName, price, image, descriptions } = product || {};
  const handleAddCart = () => {};
  return (
    <div className="w-[90%] md:w-[80%] flex justify-center gap-6 mx-auto my-8">
      <img src={image} alt="" />
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
