export const Footer = () => {
    return (
        <footer className="bg-taupe !text-darkGreen">
  <div className="container xl:max-w-[1480px]  grid grid-cols-12 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-[135px] lg:pb-[110px]">
      <div className="col-span-12 md:col-span-4 flex flex-col order-last md:order-first mt-6 md:mt-0">
        <h4 className="text-h4 max-w-[380px] leading-[1.2] !font-medium">
          The key to modern asset-backed transactions.
        </h4>
        <div className="flex space-x-2 my-6 md:my-8">
          <div className="bg-coral w-[30px] h-[30px] rounded-md hover:scale-[1.2] transition-all duration-300">
            <a
              className="flex flex-col items-center justify-center gap-6 "
              href="https://www.linkedin.com/company/getsetpoint/about/"
              target="_blank"
            >
              <div className="w-[20px] h-[20px] mx-auto">
                <img
                  src="/footer.png"
                  alt=""
                  draggable="false"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="w-[30px] h-[30px] mx-auto">
                <img
                  src="/footer.png"
                  alt=""
                  draggable="false"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              
            </a>
          </div>
        </div>
        <div className="mt-auto md:-translate-y-5">
          <div className="space-x-2 mb-6 md:mb-10">
            <div className="w-[50px] h-[50px]">
             
            </div>
          </div>
          <p className="text-sm">© 2023 Setpoint. All rights reserved.</p>
        </div>
      </div>
      {/* <div className="col-span-12 md:col-span-8 lg:pl-20 flex flex-wrap order-first md:order-last">
        <div className="mb-8 md:mb-16 lg:mb-[72px] w-1/2 md:w-1/3">
          <h4 className="font-body text-lg font-bold mb-5">Platform</h4>
          <ul className="space-y-2 list-none">
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/collateral-manager/">
                <span>Collateral Manager</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/diligence-agent/">
                <span>Diligence Agent</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/calculation-agent/">
                <span>Calculation Agent</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/portfolio-manager/">
                <span>Portfolio Manager</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/valuation-management/">
                <span>Valuations Manager</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-16 lg:mb-[72px] w-1/2 md:w-1/3">
          <h4 className="font-body text-lg font-bold mb-5">Company</h4>
          <ul className="space-y-2 list-none">
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/resources/">
                <span>Resources</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/about/">
                <span>About</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/careers/">
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/contact/">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/saas-terms-and-conditions/">
                <span>SAAS Terms</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/services-terms-and-conditions/">
                <span>Services Terms</span>
              </a>
            </li>
            <li>
              <a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/resolute-msa-terms-and-conditions/">
                <span>Resolute Services Agreement</span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="col-span-12 md:col-span-8 lg:pl-20 flex flex-wrap order-first md:order-last">
  <div className="mb-8 md:mb-16 lg:mb-[72px] w-1/2 md:w-1/3">
    <h4 className="font-body text-lg font-bold mb-5">Platform</h4>
    <ul className="space-y-2">
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/collateral-manager/"><span>Collateral Manager</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/diligence-agent/"><span>Diligence Agent</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/calculation-agent/"><span>Calculation Agent</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/portfolio-manager/"><span>Portfolio Manager</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/valuation-management/"><span>Valuations Manager</span></a></li>
    </ul>
  </div>
  <div className="mb-8 md:mb-16 lg:mb-[72px] w-1/2 md:w-1/3">
    <h4 className="font-body text-lg font-bold mb-5">Company</h4>
    <ul className="space-y-2">
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/resources/"><span>Resources</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/about/"><span>About</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/careers/"><span>Careers</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/contact/"><span>Contact</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/saas-terms-and-conditions/"><span>SAAS Terms</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/services-terms-and-conditions/"><span>Services Terms</span></a></li>
      <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/resolute-msa-terms-and-conditions/"><span>Resolute Services Agreement</span></a></li>
    </ul>
  </div>
</div>

    </div>
</footer>

    )
}