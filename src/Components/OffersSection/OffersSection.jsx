import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./OffersSection.module.css";

const offers = [
  { offerSrc: "/assets/offer1.png" },
  { offerSrc: "/assets/offer2.png" },
  { offerSrc: "/assets/offer1.png" },
  { offerSrc: "/assets/offer2.png" },
  { offerSrc: "/assets/offer1.png" },
  { offerSrc: "/assets/offer2.png" },
];

export default () => {
  return (
    <div
      className={`g-white max-w-[1300px] pt-20 mx-auto pb-5 ${styles.container} px-1`}
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
        className="pb-24"
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
            <SwiperSlide>
              <img src={offer.offerSrc} alt="Offer" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
