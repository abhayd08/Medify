import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SearchCateorySelector from "../SearchCateorySelector/SearchCateorySelector";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MedifyContext from "../Contexts/MedifyContext";
import { enqueueSnackbar } from "notistack";
import DisplayMedicalCenters from "../DisplayMedicalCenters/DisplayMedicalCenters";

const Home = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("State");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("City");
  const [loadingContent, setLoadingContent] = useState("");
  const [medicalCentersData, setMedicalCentersData] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState(null);
  console.log(medicalCentersData);

  console.log(selectedCity, selectedState, cities, states);

  useEffect(() => {
    (async () => {
      try {
        setLoadingContent("Loading...");
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
      } catch (error) {
        enqueueSnackbar(
          "There is an issue loading the states. Please refresh the page or try again later.",
          {
            variant: "error",
          }
        );
        console.log(error);
      } finally {
        // setSelectedState("State");
        // setSelectedCity("City");
        // setCities([]);
        // setMedicalCentersData([]);
        // setSearchedLocation(null);
        setLoadingContent("");
      }
    })();
  }, []);

  return (
    <>
      <MedifyContext.Provider
        value={{
          states,
          selectedState,
          setSelectedState,
          cities,
          setCities,
          selectedCity,
          setSelectedCity,
          loadingContent,
          setLoadingContent,
          medicalCentersData,
          setMedicalCentersData,
          searchedLocation,
          setSearchedLocation,
        }}
      >
        <Header />
        <HeroSection />
        <SearchCateorySelector />
        {medicalCentersData.length > 0 ? (
          <DisplayMedicalCenters />
        ) : (
          ""
        )}
      </MedifyContext.Provider>
    </>
  );
};

export default Home;
