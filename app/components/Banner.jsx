"use client";
import React, { useState } from "react";
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

const ScrollBanner = () => {
  const [banners, setBanners] = useState([
    "https://countrychickenco.in/static/media/desk-banner3.784c5f6ee5e12cd91be4.png",
    "https://countrychickenco.in/static/media/desk-banner1.8baaf335a7c42fb04543.png",
    "https://countrychickenco.in/static/media/desk-banner2.93a0fb70def5b933bc73.png",
  ]);

  return (
    <div className="w-[100vw] px-4 md:px-8 lg:px-[0px] pb-5 lg:pt-[80px]">
      {banners != null && (
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
          className="mySwiper w-full  p-3 flex overflow-x-scroll space-x-4 rounded-xl lg:rounded-[0px] object-cover"
        >
          {banners?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="min-w-full min-h-full bg-white rounded-xl"
            >
              <img
                src={item}
                alt="banner"
                className="w-full min-h-[200px] md:min-h-[230px] lg:min-h-[320px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ScrollBanner;
