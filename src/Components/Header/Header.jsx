export default () => {
  return (
    <header>
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
            <div className="cursor-pointer">Find Doctors</div>
            <div className="cursor-pointer">Hospitals</div>
            <div className="hidden md:flex cursor-pointer">Medicines</div>
            <div className="hidden lg:flex cursor-pointer">Surgeries</div>
            <div className="hidden xl:flex cursor-pointer">
              Software for Provider
            </div>
            <div className="hidden xl:flex cursor-pointer">Facilities</div>
          </div>
          <button className="w-[130px] border-0 outline-0 h-[40px] leading-[8px] rounded-[8px] text-center text-white bg-[var(--color-primary)] text-sm">
            My Bookings
          </button>
        </div>
      </nav>
    </header>
  );
};
