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
import imdos from "@/lib/imdos";

const ScrollBanner = () => {
  const [banners, setBanners] = useState(null);

  const getData = async () => {
    const data = await imdos.request("SELECT * FROM banners");
    setBanners(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[100vw] px-4 md:px-8 lg:px-[0px] pb-5 lg:pt-[80px]">
      {banners != null ? (
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
          {banners.map((item, index) => (
            <SwiperSlide
              key={index}
              className="max-h-[200px] lg:max-h-[260px] max-w-[1534px] aspect-video object-contain bg-white rounded-xl"
            >
              <a
                href={item?.link !== "" ? item?.link : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.NEXT_PUBLIC_FILE_PATH + item?.image}
                  alt="banner"
                  className="w-full min-h-[200px] md:min-h-[230px] lg:min-h-[320px]"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
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
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="max-h-[200px] lg:max-h-[260px] max-w-[1534px] aspect-video object-contain bg-white rounded-xl"
            >
              <div className="w-full min-h-[200px] md:min-h-[230px] lg:min-h-[320px] bg-gray-300 animate-pulse rounded-xl"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ScrollBanner;
