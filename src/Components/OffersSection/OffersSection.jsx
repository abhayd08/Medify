import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./OffersSection.module.css";
import { motion } from "framer-motion";

const offers = [
  { offerSrc: "/assets/offer2.png", id: "offer1" },
  { offerSrc: "/assets/offer1.png", id: "offer2" },
  { offerSrc: "/assets/offer1.png", id: "offer3" },
  { offerSrc: "/assets/offer2.png", id: "offer4" },
  { offerSrc: "/assets/offer1.png", id: "offer5" },
  { offerSrc: "/assets/offer2.png", id: "offer6" },
];

export default () => {
  return (
    <div
      className={`bg-white max-w-[1300px] pt-20 mx-auto pb-5 ${styles.container} px-1`}
    >
      <motion.div
        whileInView={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          y: -50,
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="offersSwiper"
          spaceBetween={20}
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
          {offers.map((offer) => {
            return (
              <SwiperSlide key={offer.id}>
                <img src={offer.offerSrc} alt="Offer" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
};
