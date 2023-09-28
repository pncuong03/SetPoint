export const WhySetpoint = () => {
  return (
    <section className="section section-top section-bot contain-paint bg-darkGreen !text-white space-y-8 md:space-y-12 xl:space-y-20 section-contained">
      <div className="container">
        <div className="text-center mx-auto max-width:720px" >
          <h3 className="mx-auto pt-1 text-h2 mb-2 md:mb-3">Why Setpoint?</h3>
          <div className="pt-2 mx-auto t-19 max-w-[770px]">
            An operating system for capital markets functions that drives
            capital and operational efficiency, while offering peace-of-mind to
            Capital Providers.
          </div>
          <div className="mt-10  flex justify-center">
            <div className="md:flex space-y-2.5 md:space-y-0 md:space-x-[15px] w-full md:w-auto">
              <a
                className="hover:opacity-50 transition-opacity flex items-center space-x-[9px] whitespace-nowrap justify-center group"
                href="/why-setpoint/"
              >
                <span>Learn more</span>
                <span className="inline-block group-hover:translate-x-[6px] transition-all duration-200">
                  <svg
                    className="w-full h-full max-w-[24px] max-h-[24px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#FC9082"></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.2378 8.1591L16.8345 11.6159C17.0552 11.828 17.0552 12.172 16.8345 12.3841L13.2378 15.8409C13.0171 16.053 12.6592 16.053 12.4385 15.8409C12.2178 15.6288 12.2178 15.2849 12.4385 15.0727L15.0704 12.5432H6V11.4568H15.0704L12.4385 8.92728C12.2178 8.71515 12.2178 8.37122 12.4385 8.1591C12.6592 7.94697 13.0171 7.94697 13.2378 8.1591Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid gap-y-6 grid-cols-1 rounded-3xl bg-white py-6 md:pt-[46px] md:pb-[40px] text-darkGreen md:mx-6 xl:mx-[50px] gap-6 md:gap-0 md:grid-cols-3 lg:gap-x-[24px]">
          <div className="icon-text-card relative space-y-4 lg:space-y-8 lg:px-6 flex flex-col flex-auto">
            <div className=" mx-auto">
              <img className="" src="/Cog-Icon.webp" alt="" />
            </div>
            <div className="text-center px-4 h-auto flex flex-col flex-auto">
              <h4 className="text-h4 mb-3">Move fast</h4>
              <p className="mx-auto t-16 max-w-[270px]">
                Onboard, complete funding requirements, and request financing
                all in one day.
              </p>
            </div>
          </div>
          <div className="icon-text-card relative space-y-4 lg:space-y-8 lg:px-6 flex flex-col flex-auto">
            <div className="mx-auto">
              <img className="" src="/Cog-Icon.webp" alt="" />
            </div>
            <div className="text-center px-4 h-auto flex flex-col flex-auto">
              <h4 className="text-h4 mb-3">Scale efficiently</h4>
              <p className="mx-auto t-16 max-w-[270px]">
              Manage portfolios and risk with streamlined operational and funding workflows.
              </p>
            </div>
          </div>
          <div className="icon-text-card relative space-y-4 lg:space-y-8 lg:px-6 flex flex-col flex-auto">
            <div className="mx-auto">
              <img className="" src="/Cog-Icon.webp" alt="" />
            </div>
            <div className="text-center px-4 h-auto flex flex-col flex-auto">
              <h4 className="text-h4 mb-3">Act precisely</h4>
              <p className="mx-auto t-16 max-w-[270px]">
              We guarantee accuracy, compliance and forecastability for borrowers and lenders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
