import { motion } from "framer-motion";

export default () => {
  return (
    <div
      className="pt-[65px] pb-[47px]"
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
        className="flex gap-[71px] justify-center items-center flex-wrap"
      >
        <img className="w-[519px]" src="/assets/banner2.png" alt="Banner" />
        <div className="px-3">
          <h6 className="font-semibold text-base leading-[24px] text-[#2AA7FF]">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </h6>
          <h4 className="leading-[58px] mb-7 mt-3 text-[#1B3C74] font-semibold text-[48px]">
            Patient <span className="text-[#2AA7FF]">Caring</span>
          </h4>
          <div className="text-[#77829D] font-medium leading-[25px] max-w-[563px]">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </div>
          <div className="flex flex-col mt-12 font-[Roboto] font-medium gap-[27px]">
            <div className="flex gap-[10px] items-center">
              <img
                src="/assets/verifiedBlue.png"
                className="w-[20px] h-[20px]"
                alt="Verified"
              />
              <span className="text-[#1B3C74] text-[18px]">
                Stay Updated About Your Health
              </span>
            </div>
            <div className="flex gap-[10px] items-center">
              <img
                src="/assets/verifiedBlue.png"
                className="w-[20px] h-[20px]"
                alt="Verified"
              />
              <span className="text-[#1B3C74] text-[18px]">
                Check Your Results Online
              </span>
            </div>
            <div className="flex gap-[10px] items-center">
              <img
                src="/assets/verifiedBlue.png"
                className="w-[20px] h-[20px]"
                alt="Verified"
              />
              <span className="text-[#1B3C74] text-[18px]">
                Manage Your Appointments
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
