import styles from "./Specialisations.module.css";
import { motion } from "framer-motion";

const specialisations = [
  {
    name: "Dentistry",
    src: "/assets/dentistry.png",
  },
  {
    name: "Primary Care",
    src: "/assets/primaryCare.png",
  },
  {
    name: "Cardiology",
    src: "/assets/cardiology.png",
  },
  {
    name: "MRI Resonance",
    src: "/assets/MRI.png",
  },
  {
    name: "Blood Test",
    src: "/assets/bloodTest.png",
  },
  {
    name: "Piscologist",
    src: "/assets/piscologist.png",
  },
  {
    name: "Laboratory",
    src: "/assets/lab.png",
  },
  {
    name: "X-Ray",
    src: "/assets/xRay.png",
  },
];
export default () => {
  return (
    <div
      className="pt-[56px] pb-[150px]"
      style={{
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
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
        className="flex px-2 flex-col gap-[62px] justify-center items-center"
      >
        <h5
          className={`font-semibold text-[48px] leading-[65px] text-center text-[#1B3C74] ${styles.heading}`}
        >
          Find By Specialisation
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] place-items-center">
          {specialisations.map((specialisation) => {
            return (
              <div
                key={specialisation.name}
                style={{ boxShadow: "0px 34px 44px 0px #D5DBE470" }}
                className="h-[180px] rounded-[10px] bg-[#FFFFFF] w-[270px] gap-4 flex flex-col justify-center items-center"
              >
                <img
                  className="w-[70px]"
                  src={specialisation.src}
                  alt={specialisation.name}
                />
                <h6 className="font-medium text--[18px] leading-[27px] text-center text-[#ABB6C7]">
                  {specialisation.name}
                </h6>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
