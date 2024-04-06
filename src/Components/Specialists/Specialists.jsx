import { useEffect, useRef, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import { Autoplay, Pagination } from "swiper/modules";

const specialists = [
  { specialistSrc: "/assets/specialist1.png", name: "specialist1" },
  { specialistSrc: "/assets/specialist2.png", name: "specialist2" },
  { specialistSrc: "/assets/specialist3.png", name: "specialist3" },
  { specialistSrc: "/assets/specialist1.png", name: "specialist4" },
  { specialistSrc: "/assets/specialist2.png", name: "specialist5" },
  { specialistSrc: "/assets/specialist3.png", name: "specialist6" },
];

export default () => {
  const swiperRef = useRef(null);

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="pt-[70px] pb-[45px] max-w-[1300px] mx-auto bg-white flex flex-col gap-[65px] justify-center items-center">
      <h5 className="font-semibold text-[48px] leading-[60px] text-center text-[#1B3C74]">
        Our Medical Specialist
      </h5>
      <div className="mx-auto fixedWidthContainers max-w-[98vw] w-[1300px]">
        <Swiper
          className="pb-20"
          spaceBetween={15}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          ref={swiperRef}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            868: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
        >
          {specialists.map((specialist) => {
            return (
              <SwiperSlide key={specialist.name}>
                <img
                  src={specialist.specialistSrc}
                  className="max-w-[370px] max-h-[504px]"
                  alt={specialist.name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
