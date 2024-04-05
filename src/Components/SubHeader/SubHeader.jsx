import styles from "./SubHeader.module.css";
import { CircularProgress } from "@nextui-org/react";
import { useContext, useState } from "react";
import MedifyContext from "../Contexts/MedifyContext";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { motion } from "framer-motion";

export default ({ component }) => {
  const {
    states,
    selectedState,
    setSelectedState,
    cities,
    setCities,
    selectedCity,
    setSelectedCity,
    loadingContent,
    setLoadingContent,
    setMedicalCentersData,
    setSearchedLocation,
    selectedNavItem,
  } = useContext(MedifyContext);

  const [btnLoadingContent, setBtnLoadingContent] = useState("Search");

  const fetchMedicalCenters = (e, selectedState, selectedCity) => {
    e.preventDefault();
    if (selectedState === "State") {
      enqueueSnackbar("Before proceeding, kindly select a state and city.", {
        variant: "warning",
      });
    } else if (selectedCity === "City") {
      enqueueSnackbar("Before proceeding, kindly select a city.", {
        variant: "warning",
      });
    } else {
      (async () => {
        setBtnLoadingContent(
          <CircularProgress aria-label="Loading..." color="secondary" />
        );
        document
          .getElementById("fetchMedicalCentersBtn2")
          .setAttribute("disabled", true);
        document.getElementById("btn2SearchIcon").style.display = "none";
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
          );
          setMedicalCentersData(response.data);
          setSearchedLocation(
            selectedCity !== "City" ? selectedCity : selectedState
          );
        } catch (error) {
          console.log(error);
          setSelectedCity("City");
          setMedicalCentersData([]);
          setSearchedLocation(null);
        } finally {
          document
            .getElementById("fetchMedicalCentersBtn2")
            .removeAttribute("disabled");
          document.getElementById("btn2SearchIcon").style.display = "block";
          setBtnLoadingContent("Search");
        }
      })();
    }
  };

  const fetchCities = (selectedState) => {
    (async () => {
      try {
        setSelectedCity("City");
        setLoadingContent("Loading...");
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        setCities(response.data);
      } catch (error) {
        setSelectedState("State");
        setSelectedCity("City");
        setCities([]);
        enqueueSnackbar(
          "There is an issue loading the cities. Please refresh the page or try again later.",
          {
            variant: "error",
          }
        );
        console.log(error);
      } finally {
        setLoadingContent("");
      }
    })();
  };

  return (
    <div
      className={`px-2 relative gap-[60px] animate__animated animate__fadeInLeft gap-y-0 flex justify-center items-center ${styles.container}`}
    >
      {selectedNavItem === "myBookings" ? (
        <>
          <div
            className={`absolute top-0 -z-10 w-[100%] rounded-b-[16px] ${styles.coloredBox}`}
          ></div>
          <motion.h4
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.01 }}
            whileInView={{ opacity: 1 }}
            className="font-bold text-[35px] h-[80px] flex justify-center sm:text-[40px] leading-[45px] sm:leading-[50px] text-center text-white"
          >
            My Bookings
          </motion.h4>
          <motion.form
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.01 }}
            whileInView={{ opacity: 1 }}
            onSubmit={(e) => e.preventDefault()}
            className={`py-[27px] flex justify-center items-center gap-[20px] rounded-[15px] bg-[#FFFFFF] px-[20px] max-w-[96.5vw] w-[780px] ${styles.form}`}
          >
            <input
              placeholder="Search By Hospital"
              type="text"
              className="rounded-[8px] focus:outline-[var(--color-primary)] border-[1px] pl-[25px] border-[#F0F0F0] h-[50px] w-[535px] bg-[#FAFBFE] text-[14px] leading-[21px] font-normal tracking-[0.02em]"
            />
            <button
              type="submit"
              aria-label="Search"
              className={` focus:outline-white pl-6 relative text-center tracking-[0.02em] font-medium rounded-[8px] bg-[var(--color-primary)] leading-[24px] text-base w-[177px] h-[50px] text-white`}
            >
              Search
              <img
                className="absolute left-[23%] w-[20.8px] top-[50%] translate-y-[-50%]"
                src="/assets/searchIcon2.png"
                alt="Search"
              />
            </button>
          </motion.form>
        </>
      ) : (
        <>
          <div
            className={`absolute top-0 -z-10 w-[100%] rounded-b-[16px] ${styles.coloredBox2}`}
          ></div>
          <motion.form
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.01 }}
            whileInView={{ opacity: 1 }}
            onSubmit={(e) =>
              fetchMedicalCenters(e, selectedState, selectedCity)
            }
            className={`py-[27px] flex justify-center items-center gap-[20px] rounded-[15px] bg-[#FFFFFF] px-[10px] max-w-[96.5vw] w-[1166px] ${styles.form2}`}
          >
            <div
              className={`relative ${
                selectedState === "State" ? "text-[#9CA3AF]" : "text-[#11181C]"
              } text-sm w-[323px] rounded-[8px] h-[50px]`}
            >
              <select
                value={selectedState}
                className="w-[100%] rounded-[8px] pl-14 focus:outline-[var(--color-primary)] h-[100%] bg-[#FAFBFE]"
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setCities([]);
                  fetchCities(e.target.value);
                }}
                style={{
                  border: "1px solid #F0F0F0",
                }}
              >
                <option className="text-gray-500" disabled value="State">
                  State
                </option>
                {loadingContent !== "" ? (
                  <option className="text-green-500 font-medium" disabled>
                    {loadingContent}
                  </option>
                ) : (
                  ""
                )}
                {states.map((state) => {
                  return (
                    <option
                      className="text-[#11181C]"
                      key={state}
                      value={state}
                    >
                      {state}
                    </option>
                  );
                })}
              </select>
              <img
                className="absolute left-4 w-5 h-5 top-[50%] translate-y-[-50%]"
                src="/assets/searchIcon.png"
                alt="Search"
              />
            </div>
            <div
              className={`relative ${
                selectedCity === "City" ? "text-[#9CA3AF]" : "text-[#11181C]"
              } text-sm w-[519px] rounded-[8px] h-[50px]`}
            >
              <select
                value={selectedCity}
                className="w-[100%] rounded-[8px] pl-14 focus:outline-[var(--color-primary)] h-[100%] bg-[#FAFBFE]"
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                }}
                style={{
                  border: "1px solid #F0F0F0",
                }}
              >
                <option className="text-gray-500" disabled value="City">
                  City
                </option>
                {selectedState !== "State" ? (
                  <>
                    {loadingContent !== "" ? (
                      <option className="text-green-500 font-medium" disabled>
                        {loadingContent}
                      </option>
                    ) : (
                      ""
                    )}
                    {cities.map((city) => {
                      return (
                        <option
                          className="text-[#11181C]"
                          key={city}
                          value={city}
                        >
                          {city}
                        </option>
                      );
                    })}
                  </>
                ) : (
                  <option className="text-danger font-medium" disabled>
                    Select the state first.
                  </option>
                )}
              </select>
              <img
                className="absolute left-4 w-5 h-5 top-[50%] translate-y-[-50%]"
                src="/assets/searchIcon.png"
                alt="Search"
              />
            </div>
            <button
              type="submit"
              id="fetchMedicalCentersBtn2"
              aria-label="Search"
              className={`relative ${
                btnLoadingContent === "Search" ? "pl-5" : "pl-0"
              }  focus:outline-white font-medium flex justify-center leading-[24px] tracking-[0.02em] items-center text-center rounded-[8px] bg-[var(--color-primary)] text-base w-[228px] h-[50px] text-white`}
            >
              {btnLoadingContent}
              <img
                id="btn2SearchIcon"
                className="absolute left-[25%] w-5 h-5 top-[50%] translate-y-[-50%]"
                src="/assets/searchIcon2.png"
                alt="Search"
              />
            </button>
          </motion.form>
        </>
      )}
    </div>
  );
};
