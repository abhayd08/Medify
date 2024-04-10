import { motion } from "framer-motion";

export default () => {
  return (
    <div className="px-2 pt-[48px] pb-28px] bg-gradient">
      <motion.div
        whileInView={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          y: -35,
        }}
        className="flex-wrap flex justify-center items-center gap-x-[35px]"
      >
        <div className="pt-[50px] pb-[70px] px-2 lg:px-3 flex-col flex gap-4 max-w-[575px]">
          <h6 className="text-[#2AA7FF] text-[17px] font-semibold leading-[25px]">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </h6>
          <h3 className="text-[#1B3C74] ml-[-2px] text-[48px] leading-[62px] font-semibold">
            Our Families
          </h3>
          <span className="text-[#77829D] font-[Roboto] font-medium text-[17px] leading-[40px]">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </span>
        </div>
        <img src="/assets/achievements.png" alt="Achievements" />
      </motion.div>
    </div>
  );
};
