import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import { Mousewheel, Keyboard } from "swiper/modules";

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

  const [selectedDate, setSelectedDate] = useState({});
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates([]);
    const currentDate = new Date();

    setDates((prevDates) => [
      ...prevDates,
      { date: currentDate, numberOfSlotsAvailable: 11, id: "day1" },
    ]);

    setSelectedDate({
      date: currentDate,
      numberOfSlotsAvailable: 11,
      id: "day1",
    });

    const day2 = new Date();
    day2.setDate(day2.getDate() + 1);
    setDates((prevDates) => [
      ...prevDates,
      { date: day2, numberOfSlotsAvailable: 20, id: "day2" },
    ]);

    const day3 = new Date();
    day3.setDate(day3.getDate() + 2);
    setDates((prevDates) => [
      ...prevDates,
      { date: day3, numberOfSlotsAvailable: 20, id: "day3" },
    ]);

    const day4 = new Date();
    day4.setDate(day4.getDate() + 3);
    setDates((prevDates) => [
      ...prevDates,
      { date: day4, numberOfSlotsAvailable: 20, id: "day4" },
    ]);

    const day5 = new Date();
    day5.setDate(day5.getDate() + 4);
    setDates((prevDates) => [
      ...prevDates,
      { date: day5, numberOfSlotsAvailable: 20, id: "day5" },
    ]);

    const day6 = new Date();
    day6.setDate(day6.getDate() + 5);
    setDates((prevDates) => [
      ...prevDates,
      { date: day6, numberOfSlotsAvailable: 20, id: "day6" },
    ]);

    const day7 = new Date();
    day7.setDate(day7.getDate() + 6);
    setDates((prevDates) => [
      ...prevDates,
      { date: day7, numberOfSlotsAvailable: 20, id: "day7" },
    ]);
  }, []);

  const setDateFormat = (date) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "short" });

    return `${weekday}, ${day} ${month}`;
  };

  return (
    <div className="border-t-[1px] max-w-[97vw] mx-auto rounded-b-[15px] pb-[5px] border-[#efeff1]">
      <div className="bg-[#00A500] h-[5.25px] mx-auto w-[44px] -mt-[0.8px] rounded-[3.5px]"></div>
      <div className="mt-[20px] relative">
        <div
          onClick={goToPrevSlide}
          className="absolute cursor-pointer top-1 z-20 left-0 sm:left-0"
        >
          <img src="/assets/prev.png" alt="Previous" />
        </div>
        <div
          onClick={goToNextSlide}
          className="absolute cursor-pointer top-1 z-20 right-0 sm:right-0"
        >
          <img src="/assets/next.png" alt="Next" />
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={"auto"}
          breakpoints={{
            550: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {dates.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                onClick={() => {
                  setSelectedDate((prevDate) => {
                    if (prevDate.id === item.id) {
                      return {};
                    } else {
                      return item;
                    }
                  });
                }}
                className={`${
                  selectedDate.id === item.id
                    ? "border-b-[4px] border-solid border-[#2aa7ff]"
                    : "border-b-[4px] border-solid border-[#f0f0f5]"
                } cursor-pointer`}
              >
                <div className="w-[205px] py-[11px] flex justify-center items-center flex-col gap-[3px]">
                  <span
                    className={`text-[#414146] ${
                      selectedDate.date === item.date
                        ? "font-bold"
                        : "font-medium"
                    } text-base leading-[22.4px] text-center`}
                  >
                    {dates.indexOf(item) === 0
                      ? "Today"
                      : setDateFormat(item.date)}
                  </span>
                  <span className="font-normal text-[12px] leading-[16.8px] text-center text-[#01A400]">
                    {item.numberOfSlotsAvailable} slots available
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="py-[20px] w-[95%] pl-5 mx-auto flex flex-wrap items-center border-b-[1px] border-solid border-[#F0F0F5] gap-[4px] gap-y-3">
        <div className="py-[13.5px] w-[110px] font-normal text-[14px] text-[#414146] leading-[19.6px]">
          Morning
        </div>
        <div className="flex gap-[31px] gap-y-[21px] flex-wrap">
          {selectedDate.id !== dates[0]?.id ? (
            <>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                09:30 AM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                10:00 AM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                10:30 AM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                10:00 AM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                10:30 AM
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="py-[20px] w-[95%] mx-auto pl-5 flex flex-wrap items-center border-b-[1px] border-solid border-[#F0F0F5] gap-[4px] gap-y-2">
        <div className="py-[13.5px] w-[110px] font-normal text-[14px] text-[#414146] leading-[19.6px]">
          Afternoon
        </div>
        <div className="flex gap-[31px] gap-y-[21px] flex-wrap">
          {selectedDate.id !== dates[0]?.id ? (
            <>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                12:00 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                12:30 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                01:00 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                01:30 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                02:00 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                02:30 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                03:00 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                03:30 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                04:00 PM
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="py-[20px] w-[95%] mx-auto pl-5 flex flex-wrap items-center gap-[4px] gap-y-2">
        <div className="py-[13.5px] w-[110px] font-normal text-[14px] text-[#414146] leading-[19.6px]">
          Evening
        </div>
        <div className="flex gap-[31px] gap-y-[21px] flex-wrap">
          {selectedDate.id !== dates[0]?.id ? (
            <>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                04:30 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                05:00 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                05:30 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                06:00 PM
              </div>
              <div className="border-[1px] border-solid border-[#2AA7FF] flex justify-center items-center rounded-[3px] text-[#2AA7FF] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]">
                06:30 PM
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
