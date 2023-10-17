import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const BrandDetails = () => {
  const loadedProduct = useLoaderData();

  return loadedProduct.length > 0 ? (
    <div className="grid md:grid-cols-2 my-8 w-[90%] md:w-[80%] mx-auto gap-6">
      {loadedProduct?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  ) : (
    <h1 className="text-center my-20 font-semibold text-4xl">
      No Product found for this brand{" "}
    </h1>
  );
};

export default BrandDetails;
