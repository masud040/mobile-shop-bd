import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    fetch(
      "https://technology-and-electronics-server-rlmxwnicm.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-8 text-center w-[90%]  mx-auto">
      <h1 className="  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent text-2xl font-bold bg-clip-text ">
        Brand Category
      </h1>
      <div className="grid mt-6 grid-cols-2 md:grid-cols-3 gap-5">
        {brands?.map((brand) => (
          <Link to={`/brands/${brand.brandName}`} key={brand._id}>
            <div className="text-center border rounded-lg p-1 bg-gradient-to-r from-green-400 to-blue-500  ">
              <div className="bg-white p-2 rounded-md">
                <img
                  className="w-32 mx-auto  md:w-60 h-32 md:h-44"
                  src={brand.logo}
                  alt=""
                />
                <p className="capitalize text-xl font-semibold">
                  {brand.brandName}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
