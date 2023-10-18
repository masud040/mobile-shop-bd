import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

const BrandDetails = () => {
  const loadedProduct = useLoaderData();

  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(
      "https://technology-and-electronics-server-rlmxwnicm.vercel.app/banners"
    )
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  return (
    <div>
      <Swiper
        className="mySwiper "
        speed={4000}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 1500 }}
      >
        {banners?.map((banner) => (
          <SwiperSlide key={banner._id}>
            <img
              src={banner.image}
              className="w-full h-[30vh] md:h-[60vh] lg:h-[90vh] rounded-lg object-cover"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {loadedProduct.length > 0 ? (
        <div className="grid md:grid-cols-2 my-8 w-[90%] md:w-[80%] mx-auto gap-6">
          {loadedProduct?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h1 className="text-center my-20 font-semibold text-4xl">
          No Product found for this brand{" "}
        </h1>
      )}
    </div>
  );
};

export default BrandDetails;
