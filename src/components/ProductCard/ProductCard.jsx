import PropTypes from "prop-types";
import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillEye,
  AiFillEdit,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const {
    _id,
    brandName,

    image,
    price,
    productName,
    rating,
    type,
  } = product || {};
  return (
    <div className=" bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-[2px] rounded-lg">
      <div className="flex bg-white gap-8 border p-3 rounded-md">
        <img
          className="w-44 rounded-md md:w-56 h-full md:h-52"
          src={image}
          alt=""
        />
        <div>
          <div>
            <p>
              <span className=" font-semibold">Name: </span>
              {productName}
            </p>
            <p>
              <span className=" font-semibold">Brand Name: </span>
              {brandName}
            </p>
            <p>
              <span className=" font-semibold">Type: </span>
              {type}
            </p>
            <p>
              <span className=" font-semibold">Price: </span>
              {price}
            </p>
            <p className="flex gap-1">
              <Rating
                initialRating={rating}
                emptySymbol={<AiOutlineStar className="md:text-xl" />}
                fullSymbol={<AiFillStar className="md:text-xl text-red-500" />}
              />
              <span className="text-sm">({rating})</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <Link
              to={`/productDetails/${_id}`}
              className="p-2 flex items-center justify-between px-4 bg-green-500 rounded-lg"
            >
              <span className="dark:text-white">Details</span>
              <AiFillEye className="text-2xl" />
            </Link>
            <Link
              to={`/updateProduct/${_id}`}
              className="p-2 flex items-center justify-between px-4 bg-pink-600 rounded-lg"
            >
              <span className="dark:text-white">Edit</span>
              <AiFillEdit className="text-2xl" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
