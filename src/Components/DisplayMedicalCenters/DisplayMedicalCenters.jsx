import { useState, useContext, useEffect } from "react";
import MedifyContext from "../Contexts/MedifyContext";

export default () => {
  const { selectedState, selectedCity, searchedLocation, medicalCentersData } =
    useContext(MedifyContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPagesAllowed, setMaxPagesAllowed] = useState(1);
  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(5);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setStartingIndex((currentPage - 1) * 5);
    setEndingIndex((currentPage || 1) * 5);
  }, [currentPage]);

  useEffect(() => {
    setMaxPagesAllowed(Math.ceil(medicalCentersData.length / 5));
    setCurrentItems(medicalCentersData.slice(startingIndex, endingIndex));
  }, [medicalCentersData, startingIndex, endingIndex]);

  return (
    <div className="max-w-[1200px] justify-evenly gap-x-4 flex flex-wrap px-2 mx-auto mt-[90px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-2xl leading-[36px] text-black">
            {medicalCentersData.length} medical{" "}
            {medicalCentersData.length === 1 ? "center" : "centers"} available
            in {searchedLocation}
          </h4>
          <div className="flex gap-5">
            <img
              className="w-[21.23px] h-[19.62px]"
              src="/assets/verified.png"
              alt="Verified"
            />
            <span className="font-normal text-base leading-[24px] text-[#787887]">
              Book appointments with minimum wait-time & verified doctor details
            </span>
          </div>
        </div>
        <div className="max-w-[786px] gap-[25px] flex flex-col">
          {currentItems.map((medicalCenterData) => {
            return (
              <div
                className="max-w-[786px] flex flex-col flex-wrap gap-x-[5px] lg:flex-row lg:flex-nowrap lg:justify-between gap-y-16 p-[24px] bg-white rounded-[15px]"
                key={medicalCenterData["Provider ID"]}
              >
                <div className="flex gap-[36px] gap-y-[20px] flex-wrap pt-[21px] pb-[2px]">
                  <div className="w-[124px] relative flex justify-center items-center h-[124px] rounded-full bg-[#8CCFFF]">
                    <img
                      src="/assets//medicalCenter.png"
                      className="w-[80px] h-[80px]"
                      alt="Medical Center"
                    />
                    <img
                      src="/assets//verifiedBlue.png"
                      className="w-[20px] h-[20px] absolute top-[65%] right-[-7px] translate-y-[-50%]"
                      alt="Verified"
                    />
                  </div>
                  <div className="flex pt-[22px] lg:max-w-[350px] flex-col gap-[18px]">
                    <h4 className="font-semibold text-[20px] text-[#14BEF0] leading-[28px]">
                      {medicalCenterData["Hospital Name"]}
                    </h4>
                    <div className="flex flex-col justify-center pb-4 gap-[14px]">
                      <div className="flex flex-col gap-[0.3rem]">
                        <span className="text-[#414146] font-bold text-[14px]">
                          {medicalCenterData["City"]},{" "}
                          {medicalCenterData["State"]}
                        </span>
                        <span className="text-[#414146] font-normal text-[14px]">
                          {medicalCenterData["Hospital Type"]}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-y-0 gap-[5px]">
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

                    {typeof medicalCenterData["Hospital overall rating"] ===
                    "number" ? (
                      <div
                        style={{ borderTop: "1px dotted #E8E8F0" }}
                        className="pt-[17px]"
                      >
                        <div className="w-[45px] h-[22.6px] bg-[#00A500] flex justify-center items-center gap-[4px] text-white text-[14px] rounded-[3.5px]">
                          <img
                            src="/assets/thumb.png"
                            className="w-[14px] h-[14px]"
                            alt="Likes"
                          />
                          {medicalCenterData["Hospital overall rating"]}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-[14px] justify-end mb-2 items-center">
                  <span className="text-[#01A400] text-[14px] font-medium">
                    Available Today
                  </span>
                  <button
                    type="button"
                    aria-label="Book"
                    className="focus:outline-white flex justify-center items-center text-center rounded-[4px] bg-[#2AA7FF] text-[14px] w-[212px] h-[40px] text-white"
                  >
                    Book FREE Center Visit
                  </button>
                </div>
              </div>
            );
          })}
          <div className="rounded-[8px] py-[24px] flex-wrap gap-[8px] flex justify-center items-center bg-white">
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
        className="w-[363px] h-[268px] mt-[96px]"
        src="/assets/banner.png"
        alt="Banner"
      />
    </div>
  );
};
