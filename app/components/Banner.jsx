"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import imdos, { FILE_PATH } from "@/imdos";
import { Loader2 } from "lucide-react";

const ScrollBanner = () => {
  const [banners, setBanners] = useState([1, 1, 1]);

  return (
    <div className="w-[100vw] px-4 md:px-8 lg:px-[120px] pb-5">
      {
        banners != null && (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            mousewheel={false}
            freeMode={{ enabled: true, sticky: true }}
            modules={[Autoplay, Pagination, Navigation, Mousewheel, FreeMode]}
            loop={true}
            className="mySwiper h-[200px] md:h-[230px] lg:h-[270px] xl:h-[320px] p-3 flex overflow-x-scroll space-x-4 rounded-xl border object-contain"
          >
            {banners?.map((item, index) => (
              <SwiperSlide
                key={index}
                className="min-w-full min-h-full bg-white rounded-xl"
              >
                <img
                  src="https://countrychickenco.in/static/media/banner1.0118bd6b6526506b3e42.png"
                  alt="banner"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
        //  : (
        //   <div className="mySwiper h-[200px] md:h-[230px] lg:h-[270px] xl:h-[320px] p-3 flex overflow-x-scroll space-x-4 rounded-xl border animate-pulse">
        //     <div className="min-w-full h-full bg-gray-300 rounded-xl"></div>
        //   </div>
        // )
      }
    </div>
  );
};

export default ScrollBanner;
