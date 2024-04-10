import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { enqueueSnackbar } from "notistack";

const newsArray = [
  {
    type: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    avatarSrc: "/assets/avatar.png",
    imgSrc: "/assets/newsCover.png",
    id: "news1",
  },
  {
    type: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    avatarSrc: "/assets/avatar.png",
    imgSrc: "/assets/newsCover.png",
    id: "news2",
  },
  {
    type: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    avatarSrc: "/assets/avatar.png",
    imgSrc: "/assets/newsCover.png",
    id: "news3",
  },
  {
    type: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    avatarSrc: "/assets/avatar.png",
    imgSrc: "/assets/newsCover.png",
    id: "news4",
  },
  {
    type: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    avatarSrc: "/assets/avatar.png",
    imgSrc: "/assets/newsCover.png",
    id: "news5",
  },
  {
    type: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    avatarSrc: "/assets/avatar.png",
    imgSrc: "/assets/newsCover.png",
    id: "news6",
  },
];
export default () => {
  return (
    <div className="bg-white pt-[40px] pb-[69px] px-2">
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
        className="flex justify-center items-center flex-col gap-[34.5px]"
      >
        <div>
          <h6 className="text-[#2AA7FF] leading-[27px] text-center font-semibold text-base">
            Blog & News
          </h6>
          <h5 className="text-[#1B3C74] leading-[62px] mt-2 text-center text-[48px] font-semibold">
            Read Our Latest News
          </h5>
        </div>
        <div className="flex justify-center flex-wrap gap-y-[45px] items-center gap-[24px]">
          <div className="mx-auto max-w-[98vw] fixedWidthContainers w-[1300px]">
            <Swiper
              className="newsSwiper"
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              spaceBetween={15}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                830: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {newsArray.map((news) => {
                return (
                  <SwiperSlide key={news.id} className="px-1">
                    <div
                      onClick={() =>
                        enqueueSnackbar("Feature yet to be implemented.", {
                          variant: "info",
                        })
                      }
                      className="cursor-pointer border-[1px] max-w-[363px] rounded-b-[8px] rounded-t-[8px] pb-[20px] border-[#00000012]"
                    >
                      <img
                        className="w-[363px] rounded-[8px]"
                        src={news.imgSrc}
                        alt={news.type}
                      />
                      <div className="flex flex-col gap-[13px] px-2 pt-5">
                        <div className="flex gap-[10px] gap-y-[3px] font-[Roboto] font-medium text-[#77829D] leading-[21px] flex-wrap">
                          <span>{news.type}</span>
                          <span>|</span>
                          <span>{news.date}</span>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                          <h6 className="text-[#1B3C74] font-medium text-[18px] leading-[25px]">
                            {news.title}
                          </h6>
                          <div className="flex items-center flex-wrap gap-3">
                            <img
                              src={news.avatarSrc}
                              className="w-[32px h-[32px]"
                              alt={news.author}
                            />
                            <span className="text-[17px] font-medium leading-[20px] text-[#1B3C74]">
                              {news.author}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
