import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const specialists = [
  { specialistSrc: "/assets/specialist1.png", name: "specialist1" },
  { specialistSrc: "/assets/specialist2.png", name: "specialist2" },
  { specialistSrc: "/assets/specialist3.png", name: "specialist3" },
  { specialistSrc: "/assets/specialist1.png", name: "specialist4" },
  { specialistSrc: "/assets/specialist2.png", name: "specialist5" },
  { specialistSrc: "/assets/specialist3.png", name: "specialist6" },
];

export default () => {
  return (
    <div className="pt-[70px] pb-[45px] bg-white">
      <motion.div
        whileInView={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          y: -35,
        }}
        className="max-w-[1300px] px-2 mx-auto flex flex-col gap-[65px] justify-center items-center"
      >
        <h5 className="font-semibold text-[48px] leading-[62px] text-center text-[#1B3C74]">
          Our Medical Specialist
        </h5>
        <div className="mx-auto fixedWidthContainers max-w-[98vw] w-[1300px]">
          <Swiper
            className="specialistsSwiper"
            spaceBetween={15}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1100: {
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
      </motion.div>
    </div>
  );
};
