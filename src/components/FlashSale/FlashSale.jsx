import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
const FlashSale = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://technology-and-electronics-server-rlmxwnicm.vercel.app/products/apple"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-[#000000] my-6 w-[90%] mx-auto h-70vh rounded-md">
      <img
        src="https://i.ibb.co/3MbpNKR/33ec7df7-53b1-459c-bdaa-74dda383106e.gif"
        alt=""
        className="rounded-md"
      />
      <div className="flex justify-between mt-3 p-3">
        <p className="text-white font-semibold text-xl">Products</p>
        <p className="bg-white px-2 rounded-lg">Show more</p>
      </div>
      <div>
        <Swiper
          className="mySwiper "
          speed={3000}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 1500 }}
        >
          {products?.map((banner) => (
            <SwiperSlide key={banner._id}>
              <img
                src={banner.image}
                className="h-44 rounded-lg object-contain"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FlashSale;
