import { motion } from "framer-motion";
import { enqueueSnackbar } from "notistack";

export default () => {
  return (
    <div className="bg-[#1B3C74] flex flex-col gap-[65px] pt-[40px] pb-[10px] px-3 sm:px-4">
      <motion.div
        whileInView={{
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          x: -20,
        }}
        className="flex justify-around mx-auto pt-[39px] w-[100%] max-w-[1300px] items-center gap-[200px] gap-y-[130px] flex-wrap"
      >
        <div className="flex flex-col gap-[50px]">
          <a href="/">
            <img src="/assets/brand.png" alt="Medify" />
          </a>
          <div className="flex gap-[16px]">
            <img
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              src="/assets/facebook.png"
              alt="Facebook"
              className="max-w-[35.2px] cursor-pointer"
            />
            <img
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              src="/assets/twitter.png"
              alt="Twwitter"
              className="max-w-[35.2px] cursor-pointer"
            />
            <img
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              src="/assets/youtube.png"
              alt="Youtube"
              className="max-w-[35.2px] cursor-pointer"
            />
            <img
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              src="/assets/pinterest.png"
              alt="Pinterest"
              className="max-w-[35.2px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-y-[100px] gap-[180px]">
          <div className="flex flex-col gap-[10px]">
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>About Us</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Our Pricing</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Our Gallery</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Appointment</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Privacy Policy</span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Orthology</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Neurology</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Dental Care</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Opthalmology</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Cardiology</span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>About Us</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Our Pricing</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Our Gallery</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Appointment</span>
            </div>
            <div
              onClick={() =>
                enqueueSnackbar("Feature yet to be implemented.", {
                  variant: "info",
                })
              }
              className="flex gap-[12.5px] cursor-pointer font-[Roboto] text-base font-normal text-white leading-[28px]"
            >
              <img
                src="/assets/rightArrow.png"
                className="max-w-[10px] max-h-[15px]"
                alt="Arrow"
              />
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          y: -20,
        }}
        className="border-t-[1px] mx-auto w-[100%] max-w-[1143px] border-[#FFFFFF1A] pt-[30.5px]"
      >
        <h6 className="text-[#FFFFFF] leading-[23px] text-center xl:text-left sm:leading-[28px] font-normal text-sm sm:text-base">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </h6>
      </motion.div>
    </div>
  );
};
