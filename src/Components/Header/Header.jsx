import { enqueueSnackbar } from "notistack";
import { useContext } from "react";
import styles from "./Header.module.css";
import MedifyContext from "../Contexts/MedifyContext";

export default () => {
  const { selectedNavItem, setSelectedNavItem } = useContext(MedifyContext);

  return (
    <header
      style={{
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <div className="py-[9px] font-normal px-2 text-xs sm:text-sm text-center text-[#FFFFFF] bg-[var(--color-primary)]">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className="pt-6 pb-8 px-3 flex justify-between gap-[3rem] items-center max-w-[1170px] mx-auto">
        <a href="/">
          <img
            src="/assets/brand.png"
            className="min-h-[27px] min-w-[92px]"
            alt="Brand"
          />
        </a>
        <div className="flex gap-[40px] justify-center items-center">
          <div className="hidden sm:flex text-sm leading-[8px] text-[#102851] justify-center items-center gap-[40px]">
            <div
              onClick={() => {
                setSelectedNavItem((prevSelectedNavItem) => {
                  if (prevSelectedNavItem === "findDoctors") {
                    return null;
                  } else {
                    return "findDoctors";
                  }
                });
              }}
              className={`cursor-pointer relative ${
                selectedNavItem === "findDoctors"
                  ? styles.navItem1
                  : styles.navItems
              }`}
            >
              Find Doctors
            </div>
            <div
              onClick={() => {
                setSelectedNavItem((prevSelectedNavItem) => {
                  if (prevSelectedNavItem === "hospitals") {
                    return null;
                  } else {
                    return "hospitals";
                  }
                });
              }}
              className={`cursor-pointer relative ${
                selectedNavItem === "hospitals"
                  ? styles.navItem2
                  : styles.navItems
              }`}
            >
              Hospitals
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className={`hidden md:flex ${styles.navItems} cursor-pointer`}
            >
              Medicines
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className={`hidden lg:flex ${styles.navItems} cursor-pointer`}
            >
              Surgeries
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className={`hidden xl:flex ${styles.navItems} cursor-pointer`}
            >
              Software for Provider
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className={`hidden xl:flex ${styles.navItems} cursor-pointer`}
            >
              Facilities
            </div>
          </div>
          <button
            onClick={() => {
              setSelectedNavItem((prevSelectedNavItem) => {
                if (prevSelectedNavItem === "myBookings") {
                  return null;
                } else {
                  return "myBookings";
                }
              });
            }}
            className={`w-[130px] ${
              styles.navItems
            } border-0 outline-0 h-[40px] leading-[8px] rounded-[8px] text-center text-white ${
              selectedNavItem === "myBookings"
                ? "bg-danger"
                : "bg-[var(--color-primary)]"
            } text-sm`}
          >
            My Bookings
          </button>
        </div>
      </nav>
    </header>
  );
};
