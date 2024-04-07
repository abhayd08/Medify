import { motion } from "framer-motion";

export default () => {
  return (
    <div
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
          y: -60,
        }}
        className="flex heroSection max-w-[1200px] justify-center items-center gap-y-16 flex-wrap px-3 mx-auto pt-[26px] lg:pt-[20px] xl:pt-[10px]"
      >
        <div className="flex flex-col justify-center tracking-[0.02em] gap-5">
          <div>
            <h2 className="font-medium text-[#102851] text-[28px] leading-[40px] sm:text-[31px] sm:leading-[48px]">
              Skip the travel! Find Online
            </h2>
            <h3 className="font-bold text-[#000000] text-[52px] leading-[62px] sm:text-[56px] mt-3.5 sm:mt-2.5 sm:leading-[68px] tracking-[0.02em]">
              Medical <span className="text-[#2AA7FF]">Centers</span>
            </h3>
          </div>
          <span className="text-[18px] sm:text-[20px] leading-[30px] max-w-[570px] sm:leading-[32px] tracking-[0.02em] font-normal text-[#5C6169]">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </span>
          <button
            aria-label="Find Centers"
            role="button"
            onClick={() => {
              const searchCategorySelector = document.getElementById(
                "searchCategorySelector"
              );
              if (searchCategorySelector) {
                searchCategorySelector.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-[171px] itemsToGetHoverEffect h-[48px] rounded-[8px] mt-[22px] text-center bg-[#2AA8FF] text-white tracking-[0.02em] font-medium"
          >
            Find Centers
          </button>
        </div>
        <div className="relative">
          <img
            src="/assets/hero.png"
            className="w-[425px] heroImage xl:w-[525px] max-w-[91vw] h-auto"
            alt="Hero-Image"
          />
          <div
            style={{ boxShadow: "6px 6px 12px 0px #1028511C" }}
            className="bg-white lg:gap-[10px] flex justify-center items-center gap-[6px] absolute -right-3 lg:text-sm top-[65%] sm:top-[55%] lg:top-[56%] xl:right-[-2rem] text-xs translate-y-[-50%] py-[8px] px-[12px] lg:px-[14px] text-black rounded-[8px]"
          >
            <img
              src="/assets/shield.png"
              className="w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]"
              alt="Shield"
            />
            Regular Checkup
          </div>
        </div>
      </motion.div>
    </div>
  );
};
