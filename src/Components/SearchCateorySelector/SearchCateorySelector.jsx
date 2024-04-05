import { CircularProgress } from "@nextui-org/react";
import { useContext, useState } from "react";
import MedifyContext from "../Contexts/MedifyContext";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

export default () => {
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
          .getElementById("fetchMedicalCentersBtn")
          .setAttribute("disabled", true);
        document.getElementById("btnSearchIcon").style.display = "none";
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
            .getElementById("fetchMedicalCentersBtn")
            .removeAttribute("disabled");
          document.getElementById("btnSearchIcon").style.display = "block";
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
    <div className="relative">
      <div
        className="h-[70%] w-[100%] absolute top-0 -z-10"
        style={{
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        }}
      ></div>
      <div
        style={{ boxShadow: "6px 6px 35px 0px #1028511C" }}
        className="max-w-[1170px] flex flex-col gap-[70px] bg-white border-[#F0F0F0] border-[1px] rounded-[15px] py-[55px] mx-auto"
      >
        <form
          onSubmit={(e) => fetchMedicalCenters(e, selectedState, selectedCity)}
          className="px-2 flex flex-wrap justify-center flex-col md:flex-row gap-y-5 items-center gap-[120px]"
        >
          <div
            className={`relative ${
              selectedState === "State" ? "text-[#9CA3AF]" : "text-[#11181C]"
            } text-sm w-[300px] rounded-[8px] h-[50px]`}
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
                  <option className="text-[#11181C]" key={state} value={state}>
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
            } text-sm w-[300px] rounded-[8px] h-[50px]`}
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
            id="fetchMedicalCentersBtn"
            aria-label="Search"
            className={`relative ${
              btnLoadingContent === "Search" ? "pl-5" : "pl-0"
            }  focus:outline-white flex justify-center items-center text-center rounded-[8px] bg-[var(--color-primary)] text-sm w-[125px] h-[50px] text-white`}
          >
            {btnLoadingContent}
            <img
              id="btnSearchIcon"
              className="absolute left-4 w-5 h-5 top-[50%] translate-y-[-50%]"
              src="/assets/searchIcon2.png"
              alt="Search"
            />
          </button>
        </form>
        <div className="flex flex-col gap-[25px] px-2">
          <h4 className="text-center font-medium text-[20px] leading-30px] tracking-[0.02em] text-[#102851]">
            You may be looking for
          </h4>
          <div className="flex gap-[21px] flex-wrap justify-center items-center">
            <div className="w-[203px] bg-[#FAFBFE] h-[153px] rounded-[8px] flex flex-col gap-[15px] justify-center items-center">
              <img
                src="/assets/doctor.png"
                className="w-[60px] h-[60px]"
                alt="Doctor"
              />
              <span className="font-normal text-[18px] tracking-[0.02em] text-center text-[#ABB6C7]">
                Doctors
              </span>
            </div>
            <div className="w-[203px] bg-[#FAFBFE] h-[153px] rounded-[8px] flex flex-col gap-[15px] justify-center items-center">
              <img
                src="/assets/lab.png"
                className="w-[60px] h-[60px]"
                alt="Lab"
              />
              <span className="font-normal text-[18px] tracking-[0.02em] text-center text-[#ABB6C7]">
                Labs
              </span>
            </div>
            <div
              style={{ border: "1px solid #2AA7FF" }}
              className="w-[203px] bg-[#2AA7FF14] h-[153px] rounded-[8px] flex flex-col gap-[15px] justify-center items-center"
            >
              <img
                src="/assets/hospital.png"
                className="w-[60px] h-[60px]"
                alt="Hospital"
              />
              <span className="text-[18px] tracking-[0.02em] font-semibold text-center text-[var(--color-primary)]">
                Hospitals
              </span>
            </div>
            <div className="w-[203px] bg-[#FAFBFE] h-[153px] rounded-[8px] flex flex-col gap-[15px] justify-center items-center">
              <img
                src="/assets/medicalStore.png"
                className="w-[60px] h-[60px]"
                alt="Medical Store"
              />
              <span className="font-normal text-[18px] tracking-[0.02em] text-center text-[#ABB6C7]">
                Medical Store
              </span>
            </div>
            <div className="w-[203px] bg-[#FAFBFE] h-[153px] rounded-[8px] flex flex-col gap-[15px] justify-center items-center">
              <img
                src="/assets/ambulance.png"
                className="w-[60px] h-[60px]"
                alt="Ambulance"
              />
              <span className="font-normal text-[18px] tracking-[0.02em] text-center text-[#ABB6C7]">
                Ambulance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
