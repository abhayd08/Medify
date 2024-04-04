export default () => {
  return (
    <div
      className="pt-[42px] pb-[13px] px-2 flex justify-center items-center flex-wrap gap-[90px] gap-y-10"
      style={{
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <img src="/assets/mobileApp.png" alt="Mobile" />
      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-center items-end gap-[26px]">
          <img
            className="max-w-[113px] mb-[9px]"
            src="/assets/arrow.png"
            alt="Redirect"
          />
          <div className="max-w-[568px] flex-col flex gap-[50px] sm:gap-[23px]">
            <h3 className="font-semibold max-w-[350px] text-[32px] sm:text-[48px] leading-[47px] sm:leading-[65px] text-[#1B3C74]">
              Download the <span className="text-[#2AA7FF]">Medify</span> App
            </h3>
            <span className="font-[Roboto] text-sm sm:text-base sm:leading-[24px] font-bold text-[#414146]">
              Get the link to download the app
            </span>
          </div>
        </div>
        <form
          className="flex justify-center gap-[17px] gap-y-[14px] items-center flex-wrap"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="text-sm flex w-[391px] max-w-[95vw] bg-[#FAFBFE] border-[1px] border-[#F0F0F0] rounded-[8px] h-[47px]">
            <span className="border-r-[1px] rounded-tl-[8px] rounded-bl-[8px] bg-[#FAFBFE] text-[#000000] font-bold b-[#B4B4BE] w-[55.38px] flex justify-center items-center text-[14px]">
              +91
            </span>
            <input
              className="w-[336.62px] text-[14px] rounded-tl-[0] rounded-bl-[0] rounded-[8px] pl-4 focus:outline-[var(--color-primary)] h-[100%] bg-[#FAFBFE]"
              type="tel"
              placeholder="Enter phone number"
            />
          </div>
          <button
            className="text-white bg-[#2AA8FF] rounded-[8px] w-[121px] h-[48px] text-center font-medium tracking-[0.02em] text-base"
            type="submit"
          >
            Send SMS
          </button>
        </form>
        <div className="flex justify-center mt-[50px] items-center flex-wrap pb-[70px] gap-[26px]">
          <img
            className="cursor-pointer w-[200px] sm:w-[224px]"
            src="/assets/googlePlay.png"
            alt="Google Play"
          />
          <img
            className="cursor-pointer w-[200px] sm:w-[224px]"
            src="/assets/appleStore.png"
            alt="Google Play"
          />
        </div>
      </div>
    </div>
  );
};
