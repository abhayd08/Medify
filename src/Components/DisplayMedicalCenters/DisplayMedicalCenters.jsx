import { useState, useContext, useEffect } from "react";
import MedifyContext from "../Contexts/MedifyContext";
import BookingsSection from "./BookingsSection/BookingsSection";
import { motion } from "framer-motion";
import styles from "./DisplayMedicalCenters.module.css";

export default () => {
  const {
    searchedLocation,
    medicalCentersData,
    selectedNavItem,
    bookings,
    dates,
    searchedHospital,
  } = useContext(MedifyContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPagesAllowed, setMaxPagesAllowed] = useState(1);
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(5);
  const [currentItems, setCurrentItems] = useState([]);
  const [visibleBookingCenter, setVisibleBookingCenter] = useState(null);
  const [availability, setAvailability] = useState("Available Today");

  useEffect(() => {
    if (new Date().getHours() < 18) {
      setAvailability("Available Today");
    } else {
      setAvailability("Available Tomorrow");
    }
  }, []);

  const toggleBookingSectionVisibility = (medicalCenterId) => {
    setVisibleBookingCenter((prevMedicalCenter) => {
      return prevMedicalCenter === medicalCenterId ? null : medicalCenterId;
    });
  };

  useEffect(() => {
    setStartingIndex((currentPage - 1) * 5);
    setEndingIndex((currentPage || 1) * 5);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setVisibleBookingCenter(null);
  }, [selectedNavItem, searchedHospital]);

  useEffect(() => {
    if (selectedNavItem === "myBookings" && searchedHospital !== null) {
      const matchingHospitals = bookings.filter((booking) =>
        booking.medicalCenterData["Hospital Name"]
          .toLowerCase()
          .includes(searchedHospital.toLowerCase())
      );
      setMaxPagesAllowed(Math.ceil(matchingHospitals.length / 5) || 1);
      setCurrentItems(matchingHospitals.slice(startingIndex, endingIndex));
    } else if (selectedNavItem === "myBookings" && searchedHospital === null) {
      setMaxPagesAllowed(Math.ceil(bookings.length / 5) || 1);
      setCurrentItems(bookings.slice(startingIndex, endingIndex));
    } else {
      setMaxPagesAllowed(Math.ceil(medicalCentersData.length / 5) || 1);
      setCurrentItems(medicalCentersData.slice(startingIndex, endingIndex));
    }
  }, [
    medicalCentersData,
    startingIndex,
    endingIndex,
    selectedNavItem,
    bookings,
    searchedHospital,
  ]);

  return (
    <div
      className="pt-[90px] pb-[120px] bg-gradient"
      id="displayMedicalCenters"
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
        <div
          className={`${styles.container} max-w-[1200px] justify-center gap-x-4 gap-y-14 flex mx-auto`}
        >
          <div className="flex flex-col gap-6">
            {selectedNavItem === "myBookings" ? (
              ""
            ) : (
              <motion.div
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }}
                initial={{
                  y: -15,
                }}
                className="flex flex-col px-3 gap-3"
              >
                <h4 className="font-medium text-2xl leading-[36px] text-black">
                  {medicalCentersData?.length} medical{" "}
                  {medicalCentersData?.length === 1 ? "center" : "centers"}{" "}
                  available in {searchedLocation}
                </h4>
                <div className="flex gap-5">
                  <img
                    className="w-[21.23px] h-[19.62px]"
                    src="/assets/verified.png"
                    alt="Verified"
                  />
                  <span className="font-normal text-base leading-[24px] text-[#787887]">
                    Book appointments with minimum wait-time & verified doctor
                    details
                  </span>
                </div>
              </motion.div>
            )}
            <div className="max-w-[98vw] fixedWidthContainers w-[786px] mx-auto gap-[25px] flex flex-col">
              {currentItems.map((medicalCenterData) => {
                return (
                  <motion.div
                    whileInView={{
                      y: 0,
                      transition: {
                        duration: 1,
                      },
                    }}
                    initial={{
                      y: -15,
                    }}
                    key={
                      medicalCenterData?.["Provider ID"] ||
                      medicalCenterData?.id
                    }
                    className="max-w-[98vw] fixedWidthContainers bg-white w-[786px] rounded-[15px]"
                  >
                    <div className="p-[24px] pb-[30px]">
                      <div className="flex flex-col flex-wrap gap-x-[5px] lg:flex-row lg:flex-nowrap lg:justify-between gap-y-14">
                        <div className="flex gap-[36px] gap-y-[20px] flex-wrap pt-[21px]">
                          <div className="w-[124px] relative flex justify-center items-center h-[124px] rounded-full bg-[#8CCFFF]">
                            <img
                              src="/assets/medicalCenter.png"
                              className="w-[80px] h-[80px]"
                              alt="Medical Center"
                            />
                            <img
                              src="/assets/verifiedBlue.png"
                              className="w-[20px] h-[20px] absolute top-[65%] right-[-7px] translate-y-[-50%]"
                              alt="Verified"
                            />
                          </div>
                          <div className="flex pt-[22px] flex-col gap-[18px]">
                            <h4 className="font-semibold text-[20px] text-[#14BEF0] leading-[28px]">
                              {medicalCenterData?.["Hospital Name"] ||
                                medicalCenterData?.medicalCenterData?.[
                                  "Hospital Name"
                                ]}
                            </h4>
                            <div className="flex flex-col justify-center pb-4 gap-[14px]">
                              <div className="flex flex-col gap-[0.3rem]">
                                <span className="text-[#414146] font-bold text-[14px]">
                                  {selectedNavItem !== "myBookings"
                                    ? `${medicalCenterData?.["City"]}, ${medicalCenterData?.["State"]}`
                                    : `${medicalCenterData?.medicalCenterData?.City}, ${medicalCenterData?.medicalCenterData?.State}`}
                                </span>
                                <span className="text-[#414146] font-normal text-[14px]">
                                  {medicalCenterData?.["Hospital Type"] ||
                                    medicalCenterData?.medicalCenterData?.[
                                      "Hospital Type"
                                    ]}
                                </span>
                              </div>
                              <div
                                className={`flex flex-wrap gap-y-0 gap-[5px] ${
                                  selectedNavItem === "myBookings"
                                    ? "hidden"
                                    : "flex"
                                }`}
                              >
                                <span className="text-[#02A401] text-[14px] font-bold">
                                  FREE
                                </span>
                                <span className="text-[#787887] line-through decoration-[#787887] text-[14px] font-normal">
                                  ₹500
                                </span>
                                <span className="text-[#414146] text-[14px] font-normal">
                                  Consultation fee at clinic
                                </span>
                              </div>
                            </div>
                            {typeof medicalCenterData?.[
                              "Hospital overall rating"
                            ] === "number" ||
                            typeof medicalCenterData?.medicalCenterData?.[
                              "Hospital overall rating"
                            ] === "number" ? (
                              <div
                                style={{ borderTop: "1px dotted #E8E8F0" }}
                                className="pt-[17px] max-w-[45px]"
                              >
                                <div className="w-[45px] h-[22.6px] bg-[#00A500] flex justify-center items-center gap-[4px] text-white text-[14px] rounded-[3.5px]">
                                  <img
                                    src="/assets/thumb.png"
                                    className="w-[14px] h-[14px]"
                                    alt="Likes"
                                  />
                                  {medicalCenterData?.[
                                    "Hospital overall rating"
                                  ] ||
                                    medicalCenterData?.medicalCenterData?.[
                                      "Hospital overall rating"
                                    ]}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        {selectedNavItem === "myBookings" ? (
                          ""
                        ) : (
                          <div className="flex flex-col gap-[14px] justify-end mb-3 items-center">
                            <span className="text-[#01A400] text-[14px] font-medium">
                              {availability}
                            </span>

                            <button
                              type="button"
                              aria-label="Book"
                              onClick={() =>
                                toggleBookingSectionVisibility(
                                  medicalCenterData?.["Provider ID"]
                                )
                              }
                              className={`focus:outline-white itemsToGetHoverEffect flex justify-center items-center text-center rounded-[4px] ${
                                visibleBookingCenter ===
                                medicalCenterData?.["Provider ID"]
                                  ? "bg-danger"
                                  : "bg-[#2AA7FF]"
                              } text-[14px] w-[212px] h-[40px] text-white`}
                            >
                              {visibleBookingCenter ===
                              medicalCenterData?.["Provider ID"]
                                ? "Hide Booking Section"
                                : "Book FREE Center Visit"}
                            </button>
                          </div>
                        )}
                        {selectedNavItem === "myBookings" ? (
                          <div className="flex pt-9 gap-[14px] justify-center mb-2 items-center">
                            <span className="text-[#2AA7FF] py-[7.5px] text-sm leading-[19.6px] text-center border-solid border-[1px] border-[#2AA7FF] text-[14px] rounded-[3px] w-[84px] font-normal">
                              {medicalCenterData?.slot?.timing}
                            </span>
                            <span className="text-[#007100] py-[8px] text-sm leading-[19.6px] text-center border-solid border-[1px] border-[#00A500] text-[14px] rounded-[3px] w-[128px] font-bold">
                              {new Date(
                                medicalCenterData?.date?.date
                              ).toLocaleDateString("en-US", {
                                day: "numeric",
                              })}{" "}
                              {new Date(
                                medicalCenterData?.date?.date
                              ).toLocaleDateString("en-US", {
                                month: "long",
                              })}{" "}
                              {new Date(
                                medicalCenterData?.date?.date
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {visibleBookingCenter ===
                      medicalCenterData?.["Provider ID"] &&
                    selectedNavItem !== "myBookings" ? (
                      <BookingsSection
                        visibleBookingCenter={visibleBookingCenter}
                        medicalCenterData={medicalCenterData}
                      />
                    ) : (
                      ""
                    )}
                  </motion.div>
                );
              })}
              {(selectedNavItem !== "myBookings" && currentItems.length < 1) ||
              (selectedNavItem === "myBookings" &&
                currentItems.length < 1 &&
                searchedHospital !== null) ? (
                <motion.h6
                  whileInView={{
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  initial={{
                    y: -15,
                  }}
                  className="rounded-[15px] px-2 font-medium py-[40px] bg-white"
                >
                  Oops! We couldn't find any matching search results.
                  <span className="text-[var(--color-primary)]">
                    {" "}
                    Please try refining your search criteria and try again.
                  </span>
                </motion.h6>
              ) : (
                ""
              )}
              {selectedNavItem === "myBookings" &&
              currentItems.length < 1 &&
              searchedHospital === null ? (
                <motion.h6
                  whileInView={{
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  initial={{
                    y: -15,
                  }}
                  className="rounded-[15px] px-2 font-medium  py-[40px] bg-white"
                >
                  Looks like you haven't made any bookings yet.
                  <span className="text-[var(--color-primary)]">
                    {" "}
                    Start exploring and book your first appointment today!
                  </span>
                </motion.h6>
              ) : (
                ""
              )}
              <div className="rounded-[15px] py-[24px] flex-wrap gap-[8px] flex justify-center items-center bg-white">
                <div
                  onClick={() => (currentPage > 1 ? setCurrentPage(1) : "")}
                  className={`border-[1.17px] ${
                    currentPage !== 1
                      ? "cursor-pointer text-black"
                      : "text-[#DFDFDF]"
                  } font-semibold border-[#F1F1F1] bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]`}
                >
                  {`<<`}
                </div>
                <div
                  onClick={() =>
                    currentPage > 1
                      ? setCurrentPage((prevPage) => prevPage - 1)
                      : ""
                  }
                  className={`border-[1.17px] ${
                    currentPage !== 1
                      ? "cursor-pointer text-black"
                      : "text-[#DFDFDF]"
                  } font-semibold border-[#F1F1F1] bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]`}
                >
                  {`<`}
                </div>
                <div className="bg-[#2AA7FF] font-semibold text-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]">
                  {currentPage}
                </div>
                {currentPage + 1 <= maxPagesAllowed ? (
                  <div
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                    className="border-[1.17px] cursor-pointer font-semibold text-black border-[#F1F1F1] bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]"
                  >
                    {currentPage + 1}
                  </div>
                ) : (
                  ""
                )}
                {currentPage + 2 <= maxPagesAllowed ? (
                  <div
                    onClick={() => setCurrentPage((prevPage) => prevPage + 2)}
                    className="border-[1.17px] cursor-pointer font-semibold text-black border-[#F1F1F1] bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]"
                  >
                    {currentPage + 2}
                  </div>
                ) : (
                  ""
                )}
                <div className="bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]">
                  <img src="/assets/dots.png" alt="Dots" />
                </div>
                <div
                  onClick={() =>
                    currentPage !== maxPagesAllowed
                      ? setCurrentPage(maxPagesAllowed)
                      : ""
                  }
                  className={`border-[1.17px] ${
                    currentPage !== maxPagesAllowed ? "cursor-pointer" : ""
                  } font-semibold text-black border-[#F1F1F1] bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]`}
                >
                  {maxPagesAllowed}
                </div>
                <div
                  onClick={() =>
                    currentPage < maxPagesAllowed
                      ? setCurrentPage((prevPage) => prevPage + 1)
                      : ""
                  }
                  className={`border-[1.17px] ${
                    currentPage !== maxPagesAllowed
                      ? "cursor-pointer text-black"
                      : "text-[#DFDFDF]"
                  } font-semibold border-[#F1F1F1] bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]`}
                >
                  {`>`}
                </div>
                <div
                  onClick={() =>
                    currentPage < maxPagesAllowed
                      ? setCurrentPage(maxPagesAllowed)
                      : ""
                  }
                  className={`border-[1.17px] ${
                    currentPage !== maxPagesAllowed
                      ? "cursor-pointer text-black"
                      : "text-[#DFDFDF]"
                  } font-semibold border-[#F1F1F1] bg-white flex justify-center items-center rounded-[6px] h-[40px] w-[37.9px]`}
                >
                  {`>>`}
                </div>
              </div>
            </div>
          </div>
          <img
            className={`w-[363px] h-[268px] ${styles.offerBanner} ${
              selectedNavItem === "myBookings" ? "mt-0" : "mt-[96px]"
            }`}
            src="/assets/banner.png"
            alt="Banner"
          />
        </div>
      </motion.div>
    </div>
  );
};
