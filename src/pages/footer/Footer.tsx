export const Footer = () => {
    return (
        <footer className="bg-taupe text-darkGreen">
  <div className="container grid grid-cols-12 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-135 lg:pb-110">
    <div className="col-span-12 md:col-span-4 flex flex-col order-last md:order-first mt-6 md:mt-0">
      <h4 className="text-h4 max-w-340 leading-6 font-medium">The key to modern asset-backed transactions.</h4>
      <div className="flex space-x-2 my-6 md:my-8">
        <div className="bg-coral w-30 h-30 rounded-md hover:scale-125 transition-all duration-300">
          <a className="flex flex-col items-center justify-center w-full h-full" href="https://www.linkedin.com/company/getsetpoint/about/" target="_blank">
            <div className="w-16 h-14 mx-auto">
              <img src="/static/5d762372b65254905fd7710cb105f33a/linkedin.svg" alt="" draggable="false" className="w-full h-full object-contain object-center"/>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-auto -translate-y-5 space-x-2 mb-6 md:mb-10">
        <div className="w-50 h-50">
          <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper w-full h-full object-contain object-center">
            <div aria-hidden="true" ></div>
            <img aria-hidden="true" data-placeholder-image=""  decoding="async" alt=""/>
            <picture>
              <source type="image/webp" sizes="100vw" />
              <img data-gatsby-image-ssr="" draggable="false" data-main-image=""  sizes="100vw" decoding="async" loading="lazy" alt="" src="/static/147544f9a1286ce292159e59612446f4/12f71/AICPA-Logo.png" />
            </picture>
            <noscript>
              <picture>
                <source type="image/webp" srcSet="/static/147544f9a1286ce292159e59612446f4/d9648/AICPA-Logo.webp 107w" sizes="100vw"/>
                <img data-gatsby-image-ssr="" draggable="false" data-main-image=""  sizes="100vw" decoding="async" loading="lazy" src="/static/147544f9a1286ce292159e59612446f4/12f71/AICPA-Logo.png" srcSet="/static/147544f9a1286ce292159e59612446f4/12f71/AICPA-Logo.png 107w" alt=""/>
              </picture>
            </noscript>
          </div>
        </div>
      </div>
      <p className="text-sm">&copy; 2023 Setpoint. All rights reserved.</p>
    </div>
    <div className="col-span-12 md:col-span-8 lg:pl-20 flex flex-wrap order-first md:order-last">
      <div className="mb-8 md:mb-16 lg:mb-72 w-1/2 md:w-1/3">
        <h4 className="font-body text-lg font-bold mb-5">Platform</h4>
        <ul className="space-y-2">
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/collateral-manager/"><span>Collateral Manager</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/diligence-agent/"><span>Diligence Agent</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/calculation-agent/"><span>Calculation Agent</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/portfolio-manager/"><span>Portfolio Manager</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/valuation-management/"><span>Valuations Manager</span></a></li>
        </ul>
      </div>
      <div className="mb-8 md:mb-16 lg:mb-72 w-1/2 md:w-1/3">
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
      <div className="mb-8 md:mb-16 lg:mb-72 w-1/2 md:w-1/3">
        <h4 className="font-body text-lg font-bold mb-5">Use Cases</h4>
        <ul className="space-y-2">
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/power-buying/"><span>Power Buying</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/ibuyer/"><span>iBuyer</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/single-family-rental/"><span>Single Family Rental</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/home-equity/"><span>Home Equity</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/rent-to-own/"><span>Rent-To-Own</span></a></li>
          <li><a target="" className="text-base hover:opacity-50 transition-all duration-300" href="/fractional-ownership/"><span>Fractional Ownership</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    )
}