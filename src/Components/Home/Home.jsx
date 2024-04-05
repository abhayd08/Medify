import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import SearchCateorySelector from "../SearchCateorySelector/SearchCateorySelector";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MedifyContext from "../Contexts/MedifyContext";
import { enqueueSnackbar } from "notistack";
import DisplayMedicalCenters from "../DisplayMedicalCenters/DisplayMedicalCenters";
import Features from "../Features/Features";
import News from "../News/News";
import Achievements from "../Achievements/Achievements";
import FAQs from "../FAQs/FAQs";
import DownloadSection from "../DownloadSection/DownloadSection";
import Footer from "../Footer/Footer";
import SubHeader from "../SubHeader/SubHeader";
import { useDisclosure } from "@nextui-org/react";
import "animate.css";
import OffersSection from "../OffersSection/OffersSection";
import Specialisations from "../Specialisations/Specialisations";
import Specialists from "../Specialists/Specialists";

const Home = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("State");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("City");
  const [loadingContent, setLoadingContent] = useState("");
  const [medicalCentersData, setMedicalCentersData] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState({});
  const [bookings, setBookings] = useState([]);
  const [bookingToRemove, setBookingToRemove] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [alertType, setAlertType] = useState(null);
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  console.log(bookings);

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
          selectedNavItem,
          setSelectedNavItem,
        }}
      >
        <Header />
        {selectedNavItem !== null ? <SubHeader /> : ""}
        {selectedNavItem === null ? <HeroSection /> : ""}
        {selectedNavItem === null ? <SearchCateorySelector /> : ""}
        {selectedNavItem === null ? <OffersSection /> : ""}
        {selectedNavItem === null ? <Specialisations /> : ""}
        {selectedNavItem === null ? <Specialists /> : ""}
        {medicalCentersData.length > 0 ? <DisplayMedicalCenters /> : ""}
      </MedifyContext.Provider>
      {selectedNavItem === null ? <Features /> : ""}
      {selectedNavItem === null ? <News /> : ""}
      {selectedNavItem === null ? <Achievements /> : ""}
      {selectedNavItem === null ? <FAQs /> : ""}
      <DownloadSection />
      <Footer />
    </>
  );
};

export default Home;
