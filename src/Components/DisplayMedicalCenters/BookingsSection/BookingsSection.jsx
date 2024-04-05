import { useEffect, useRef, useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import { Mousewheel, Keyboard } from "swiper/modules";
import MedifyContext from "../../Contexts/MedifyContext";
import ConfirmBoooking from "./ConfirmBoooking";
import { enqueueSnackbar } from "notistack";

export default ({ medicalCenterData }) => {
  const {
    selectedSlot,
    setSelectedSlot,
    selectedDate,
    setSelectedDate,
    bookings,
    setBookings,
    isOpen,
    onOpen,
    onOpenChange,
    alertType,
    setAlertType,
    bookingToRemove,
    setBookingToRemove,
  } = useContext(MedifyContext);

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

  const [dates, setDates] = useState([]);

  const [slotsAvaliable, setSlotsAvailabe] = useState([
    {
      morning: [
        { timing: "9:30 AM", id: "morningSlot1" },
        { timing: "10:00 AM", id: "morningSlot2" },
        { timing: "10:30 AM", id: "morningSlot3" },
        { timing: "11:00 AM", id: "morningSlot4" },
        { timing: "11:30 AM", id: "morningSlot5" },
      ],
      afternoon: [
        { timing: "12:00 PM", id: "afternoonSlot1" },
        { timing: "12:30 PM", id: "afternoonSlot2" },
        { timing: "1:00 PM", id: "afternoonSlot3" },
        { timing: "1:30 PM", id: "afternoonSlot4" },
        { timing: "2:00 PM", id: "afternoonSlot5" },
        { timing: "2:30 PM", id: "afternoonSlot6" },
        { timing: "3:00 PM", id: "afternoonSlot7" },
        { timing: "3:30 PM", id: "afternoonSlot8" },
        { timing: "4:00 PM", id: "afternoonSlot9" },
      ],
      evening: [
        { timing: "4:30 PM", id: "eveningSlot1" },
        { timing: "5:00 PM", id: "eveningSlot2" },
        { timing: "5:30 PM", id: "eveningSlot3" },
        { timing: "6:00 PM", id: "eveningSlot4" },
      ],
    },
  ]);

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

  const checkSlotAvailability = (date, slot) => {
    const currentHour = date?.date.getHours();
    const currentMinutes = date?.date.getMinutes();

    const [slotTime, period] = slot.timing.split(" ");
    const [slotHour, slotMinutes] = slotTime.split(":").map(Number);

    const adjustedSlotHour =
      period === "AM"
        ? slotHour === 12
          ? 0
          : slotHour
        : slotHour === 12
        ? slotHour
        : slotHour + 12;

    let isSlotAvailable = false;

    if (
      currentHour < adjustedSlotHour ||
      (currentHour === adjustedSlotHour && currentMinutes < slotMinutes)
    ) {
      isSlotAvailable = true;
    }

    return isSlotAvailable;
  };

  const isSlotAlreadyBookedFn = (bookings, slot) => {
    let isSlotAlreadyBooked = false;
    let bookingid = null;
    bookings.forEach((booking) => {
      if (booking.slot.id === slot.id && booking.date.id === selectedDate.id) {
        isSlotAlreadyBooked = true;
        bookingid = booking.id;
      }
    });
    return { isSlotAlreadyBooked, bookingid };
  };

  const setDateFormat = (date) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "short" });

    return `${weekday}, ${day} ${month}`;
  };

  return (
    <div className="border-t-[1px] animate__animated animate__bounceInLeft w-[786px] max-w-[95vw] mx-auto rounded-b-[15px] pb-[5px] border-[#efeff1]">
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
        <div className="flex gap-[31px] gap-y-[25px] flex-wrap">
          {selectedDate.id !== dates[0]?.id ? (
            <>
              {slotsAvaliable[0].morning.map((slot) => {
                const { isSlotAlreadyBooked, bookingid } =
                  isSlotAlreadyBookedFn(bookings, slot);

                return (
                  <div
                    onClick={() => {
                      if (typeof selectedDate.id !== "string") {
                        enqueueSnackbar("Kindly select the date first.", {
                          variant: "warning",
                        });
                      } else {
                        if (!isSlotAlreadyBooked) {
                          setSelectedSlot(slot);
                          setAlertType("confirmation");
                          onOpen();
                        } else {
                          setAlertType("alreadyBooked");
                          const removableBooking = bookings.find(
                            (booking) => booking.id === bookingid
                          );
                          setBookingToRemove(removableBooking);
                          onOpen();
                        }
                      }
                    }}
                    key={slot.id}
                    className={`border-[1px] border-solid ${
                      !isSlotAlreadyBooked
                        ? "border-[#2AA7FF] text-[#2AA7FF] cursor-pointer"
                        : isSlotAlreadyBooked
                        ? "bg-[#2AA7FF] text-white border-white cursor-default"
                        : "border-[#9CA3AF] cursor-default text-[#9CA3AF]"
                    } flex justify-center items-center rounded-[3px] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]`}
                  >
                    {slot.timing}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {slotsAvaliable[0].morning.map((slot) => {
                const isSlotAvailable = checkSlotAvailability(dates[0], slot);
                const { isSlotAlreadyBooked, bookingid } =
                  isSlotAlreadyBookedFn(bookings, slot);
                return (
                  <div
                    onClick={() => {
                      if (typeof selectedDate.id !== "string") {
                        enqueueSnackbar("Kindly select the date first.", {
                          variant: "warning",
                        });
                      } else {
                        if (!isSlotAvailable) {
                          enqueueSnackbar("Slot not available.", {
                            variant: "warning",
                          });
                        } else {
                          if (!isSlotAlreadyBooked) {
                            setSelectedSlot(slot);
                            setAlertType("confirmation");
                            onOpen();
                          } else {
                            setAlertType("alreadyBooked");
                            const removableBooking = bookings.find(
                              (booking) => booking.id === bookingid
                            );
                            setBookingToRemove(removableBooking);
                            onOpen();
                          }
                        }
                      }
                    }}
                    key={slot.id}
                    className={`border-[1px] border-solid ${
                      isSlotAvailable && !isSlotAlreadyBooked
                        ? "border-[#2AA7FF] text-[#2AA7FF] cursor-pointer"
                        : isSlotAlreadyBooked
                        ? "bg-[#2AA7FF] text-white border-white cursor-default"
                        : "border-[#9CA3AF] cursor-default text-[#9CA3AF]"
                    } flex justify-center items-center rounded-[3px] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]`}
                  >
                    {slot.timing}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="py-[20px] w-[95%] mx-auto pl-5 flex flex-wrap items-center border-b-[1px] border-solid border-[#F0F0F5] gap-[4px] gap-y-2">
        <div className="py-[13.5px] w-[110px] font-normal text-[14px] text-[#414146] leading-[19.6px]">
          Afternoon
        </div>
        <div className="flex gap-[31px] gap-y-[25px] flex-wrap">
          {selectedDate.id !== dates[0]?.id ? (
            <>
              {slotsAvaliable[0].afternoon.map((slot) => {
                const { isSlotAlreadyBooked, bookingid } =
                  isSlotAlreadyBookedFn(bookings, slot);
                return (
                  <div
                    onClick={() => {
                      if (typeof selectedDate.id !== "string") {
                        enqueueSnackbar("Kindly select the date first.", {
                          variant: "warning",
                        });
                      } else {
                        if (!isSlotAlreadyBooked) {
                          setSelectedSlot(slot);
                          setAlertType("confirmation");
                          onOpen();
                        } else {
                          setAlertType("alreadyBooked");
                          const removableBooking = bookings.find(
                            (booking) => booking.id === bookingid
                          );
                          setBookingToRemove(removableBooking);
                          onOpen();
                        }
                      }
                    }}
                    key={slot.id}
                    className={`border-[1px] border-solid ${
                      !isSlotAlreadyBooked
                        ? "border-[#2AA7FF] text-[#2AA7FF] cursor-pointer"
                        : isSlotAlreadyBooked
                        ? "bg-[#2AA7FF] text-white border-white cursor-default"
                        : "border-[#9CA3AF] cursor-default text-[#9CA3AF]"
                    } flex justify-center items-center rounded-[3px] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]`}
                  >
                    {slot.timing}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {slotsAvaliable[0].afternoon.map((slot) => {
                const isSlotAvailable = checkSlotAvailability(dates[0], slot);
                const { isSlotAlreadyBooked, bookingid } =
                  isSlotAlreadyBookedFn(bookings, slot);

                return (
                  <div
                    key={slot.id}
                    onClick={() => {
                      if (typeof selectedDate.id !== "string") {
                        enqueueSnackbar("Kindly select the date first.", {
                          variant: "warning",
                        });
                      } else {
                        if (!isSlotAvailable) {
                          enqueueSnackbar("Slot not available.", {
                            variant: "warning",
                          });
                        } else {
                          if (!isSlotAlreadyBooked) {
                            setSelectedSlot(slot);
                            setAlertType("confirmation");
                            onOpen();
                          } else {
                            setAlertType("alreadyBooked");
                            const removableBooking = bookings.find(
                              (booking) => booking.id === bookingid
                            );
                            setBookingToRemove(removableBooking);
                            onOpen();
                          }
                        }
                      }
                    }}
                    className={`border-[1px] border-solid ${
                      isSlotAvailable && !isSlotAlreadyBooked
                        ? "border-[#2AA7FF] text-[#2AA7FF] cursor-pointer"
                        : isSlotAlreadyBooked
                        ? "bg-[#2AA7FF] text-white border-white cursor-default"
                        : "border-[#9CA3AF] cursor-default text-[#9CA3AF]"
                    } flex justify-center items-center rounded-[3px] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]`}
                  >
                    {slot.timing}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="py-[20px] w-[95%] mx-auto pl-5 flex flex-wrap items-center gap-[4px] gap-y-2">
        <div className="py-[13.5px] w-[110px] font-normal text-[14px] text-[#414146] leading-[19.6px]">
          Evening
        </div>
        <div className="flex gap-[31px] gap-y-[25px] flex-wrap">
          {selectedDate.id !== dates[0]?.id ? (
            <>
              {slotsAvaliable[0].evening.map((slot) => {
                const { isSlotAlreadyBooked, bookingid } =
                  isSlotAlreadyBookedFn(bookings, slot);
                return (
                  <div
                    onClick={() => {
                      if (typeof selectedDate.id !== "string") {
                        enqueueSnackbar("Kindly select the date first.", {
                          variant: "warning",
                        });
                      } else {
                        if (!isSlotAlreadyBooked) {
                          setSelectedSlot(slot);
                          setAlertType("confirmation");
                          onOpen();
                        } else {
                          setAlertType("alreadyBooked");
                          const removableBooking = bookings.find(
                            (booking) => booking.id === bookingid
                          );
                          setBookingToRemove(removableBooking);
                          onOpen();
                        }
                      }
                    }}
                    key={slot.id}
                    className={`border-[1px] border-solid ${
                      !isSlotAlreadyBooked
                        ? "border-[#2AA7FF] text-[#2AA7FF] cursor-pointer"
                        : isSlotAlreadyBooked
                        ? "bg-[#2AA7FF] text-white border-white cursor-default"
                        : "border-[#9CA3AF] cursor-default text-[#9CA3AF]"
                    } flex justify-center items-center rounded-[3px] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]`}
                  >
                    {slot.timing}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {slotsAvaliable[0].evening.map((slot) => {
                const isSlotAvailable = checkSlotAvailability(dates[0], slot);
                const { isSlotAlreadyBooked, bookingid } =
                  isSlotAlreadyBookedFn(bookings, slot);

                return (
                  <div
                    key={slot.id}
                    onClick={() => {
                      if (typeof selectedDate.id !== "string") {
                        enqueueSnackbar("Kindly select the date first.", {
                          variant: "warning",
                        });
                      } else {
                        if (!isSlotAvailable) {
                          enqueueSnackbar("Slot not available.", {
                            variant: "warning",
                          });
                        } else {
                          if (!isSlotAlreadyBooked) {
                            setSelectedSlot(slot);
                            setAlertType("confirmation");
                            onOpen();
                          } else {
                            setAlertType("alreadyBooked");
                            const removableBooking = bookings.find(
                              (booking) => booking.id === bookingid
                            );
                            setBookingToRemove(removableBooking);
                            onOpen();
                          }
                        }
                      }
                    }}
                    className={`border-[1px] border-solid ${
                      isSlotAvailable && !isSlotAlreadyBooked
                        ? "border-[#2AA7FF] text-[#2AA7FF] cursor-pointer"
                        : isSlotAlreadyBooked
                        ? "bg-[#2AA7FF] text-white border-white cursor-default"
                        : "border-[#9CA3AF] cursor-default text-[#9CA3AF]"
                    } flex justify-center items-center rounded-[3px] text-[14px] leading-[19.6px] font-normal text-center py-[7.25px] w-[84px]`}
                  >
                    {slot.timing}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <ConfirmBoooking medicalCenterData={medicalCenterData} />
    </div>
  );
};
