import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance, useEnsName } from 'wagmi';

export const Header = () => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()

  const { data, refetch } = useBalance({
    address,
    watch: true,
  })

  useEffect(() => {
    refetchBalance();
  }, [isConnected]);

  const refetchBalance = () => {
    refetch();
  }

  if (isConnected) {
    return (
      <div className="text-end pr-10">
        <div>Address: {ensName ? `${ensName} (${address})` : address}</div>
        <div>Balance: {data?.formatted}</div>
        <div>Connected to {connector?.name}</div>
        <button className="btn btn-coral-simple !px-[12px] !py-[8px]" onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }


  return (
    <header
      className="absolute md:absolute top-0 left-0 right-0 z-[100] transition-colors duration-300 "
      role=""
    >
      <div className="relative z-[9999] px-[25px] w-auto justify-between mx-auto py-5 flex items-center ">
        <div className="flex items-center space-x-6 lg:space-x-[60px]">
          <a
            aria-current="page"
            className="relative z-[9999] max-w-[100px] lg:min-w-[120px]"
            href="/"
          >
            <svg
              className="w-full h-auto"
              width="103"
              height="22"
              viewBox="0 0 103 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M102.26 7.00514V4.84787H99.4315V0.631042L96.9988 3.09921V4.09407L97.7602 4.85546H94.3974V7.01273H96.9988V14.3145C96.9988 16.0162 97.948 16.9514 99.6637 16.9514H102.231V14.7535H100.133C99.5901 14.7345 99.4264 14.5936 99.4264 14.0315V7.00892L102.26 7.00514ZM63.2515 6.05594C62.7926 5.59282 62.2455 5.22644 61.6425 4.97854C61.0388 4.73073 60.3915 4.60689 59.739 4.61436H59.6705C58.3167 4.61317 57.0163 5.14201 56.0475 6.08766V4.85546H53.6149V21.606H56.0589V15.7141C56.3906 16.0863 56.7864 16.3958 57.2277 16.6278C57.9329 16.9956 58.7164 17.188 59.5118 17.1887H59.5753C60.2521 17.1931 60.9232 17.0638 61.5498 16.808C62.1766 16.5531 62.7464 16.1761 63.2262 15.6989C63.8213 15.058 64.2825 14.3047 64.5827 13.4833C64.8823 12.662 65.0152 11.7893 64.9735 10.9161C64.99 8.9162 64.3835 7.19295 63.2515 6.05594ZM59.4065 15.0454H59.1921C58.8256 15.0468 58.4626 14.9743 58.1248 14.8322C57.7867 14.6906 57.4807 14.4821 57.2251 14.2193C56.46 13.2777 56.0424 12.1014 56.0424 10.8882C56.0424 9.67496 56.46 8.49868 57.2251 7.55712C57.4816 7.29476 57.7879 7.08639 58.1261 6.94423C58.4648 6.80225 58.8286 6.72973 59.1959 6.73102H59.4065C61.296 6.73102 62.5181 8.36547 62.5181 10.8882C62.5181 13.4109 61.2948 15.0454 59.4065 15.0454ZM39.4416 15.0454C40.7195 15.0454 41.6243 14.3754 41.8781 13.2472L41.9149 13.0645H44.3881L44.3386 13.3335C43.8869 15.657 41.9276 17.1583 39.3185 17.1583H39.25C38.545 17.1691 37.845 17.0397 37.1905 16.7776C36.5357 16.5167 35.9392 16.1285 35.4355 15.6355C34.2858 14.4934 33.7008 12.8437 33.7008 10.8666C33.6569 10.0141 33.7864 9.16147 34.0814 8.3604C34.3756 7.55883 34.8288 6.82503 35.4139 6.20313C35.9181 5.69899 36.5183 5.30114 37.179 5.03313C37.8395 4.7645 38.5473 4.63157 39.2602 4.64228C39.918 4.61058 40.5753 4.71602 41.1903 4.9519C41.8055 5.18754 42.3651 5.54837 42.8336 6.01151C43.3386 6.54172 43.7321 7.16784 43.9909 7.85281C44.2495 8.53802 44.3682 9.26808 44.3399 9.99991V11.3958H36.1258C36.2755 13.8069 37.7755 15.0454 39.2335 15.0454H39.4416ZM39.3465 6.73102H39.1358C37.6752 6.73102 36.6169 7.70306 36.2654 9.34132H41.8844C41.7499 7.72591 40.7918 6.73102 39.3452 6.73102H39.3465ZM49.5618 0.639903L47.1291 3.10807V4.22478L47.7636 4.85927H44.5302V7.01654H47.1317V14.3183C47.1317 16.02 48.0809 16.9552 49.7965 16.9552H52.3637V14.7586H50.2698C49.7267 14.7396 49.563 14.5987 49.563 14.0366V7.014H52.3916V4.85673H49.563L49.5618 0.639903ZM24.4461 5.94298C25.4203 5.04245 26.7115 4.56431 28.0373 4.61309C30.9166 4.61309 32.7325 6.1549 32.7884 8.64084V8.87307H30.3468V8.67383C30.3331 8.4011 30.2645 8.13394 30.1451 7.88834C29.9658 7.51598 29.6783 7.20639 29.3202 7.00005C28.9635 6.79462 28.553 6.70172 28.1426 6.73356H27.9358C26.7823 6.73356 25.9143 7.35027 25.9562 8.18526C25.9562 8.81975 26.2252 9.2804 27.5576 9.5545L29.3824 9.93519C30.2681 10.0817 31.096 10.4704 31.7744 11.0583C32.0895 11.3659 32.3341 11.7382 32.4914 12.1496C32.6484 12.5607 32.7151 13.0009 32.6868 13.4401C32.6868 15.6672 30.7973 17.1595 27.9815 17.1595C24.9841 17.1595 23.0895 15.6215 23.04 13.1394V12.9059H25.4587V13.1165C25.5679 14.3398 26.4739 15.0416 27.9459 15.0416H28.1502C28.6941 15.0647 29.2316 14.9179 29.6882 14.6216C29.8612 14.5064 30.0025 14.3498 30.0994 14.166C30.1958 13.9817 30.2442 13.7762 30.2402 13.5683C30.2402 13.0252 30.0537 12.4821 28.6845 12.1991L26.9916 11.8565C26.0655 11.7011 25.1957 11.3075 24.4676 10.7144C24.1385 10.4195 23.8785 10.0554 23.7063 9.6484C23.5348 9.24146 23.4555 8.80161 23.474 8.3604C23.4607 7.9109 23.5397 7.46343 23.7063 7.04572C23.8742 6.62991 24.1256 6.2529 24.4448 5.9379L24.4461 5.94298ZM81.2063 0.75413H78.7724V3.47101H81.2051L81.2063 0.75413ZM87.4713 4.97349C88.0937 4.71145 88.7659 4.58845 89.4408 4.61309C92.1056 4.61309 93.8175 6.32368 93.8289 8.95554V16.9324H91.3963V9.43522C91.3963 7.62185 90.6412 6.73356 89.1121 6.73356H88.9433C87.1414 6.73356 85.8318 8.28553 85.8318 10.4263V16.9463H83.3903V4.85419H85.828V6.12317C86.2845 5.62299 86.845 5.22885 87.47 4.96841L87.4713 4.97349ZM81.2063 4.8466H78.7724V16.94H81.2051L81.2063 4.8466ZM71.576 4.61817C72.3036 4.60935 73.0257 4.74521 73.7003 5.01789C74.3755 5.29159 74.9894 5.69712 75.5061 6.21075C76.6712 7.4925 77.3168 9.16241 77.3169 10.8946C77.3168 12.6267 76.6712 14.2966 75.5061 15.5784C75.0037 16.0822 74.4069 16.4819 73.7498 16.7547C73.0929 17.0271 72.3887 17.1673 71.6776 17.1671H71.472C70.764 17.1671 70.0631 17.0265 69.4099 16.7534C68.7564 16.4807 68.1634 16.0814 67.665 15.5784C66.4962 14.2974 65.8481 12.6261 65.8479 10.892C65.8479 9.15792 66.496 7.48645 67.665 6.20567C68.1766 5.69166 68.7864 5.28596 69.4581 5.01281C70.1295 4.73825 70.8495 4.6023 71.5748 4.61309L71.576 4.61817ZM71.4745 15.0492H71.6814C73.5937 15.0492 74.8716 13.3792 74.8716 10.892C74.8716 8.40481 73.5798 6.73483 71.6763 6.73483H71.453C69.5495 6.73483 68.2805 8.40481 68.2805 10.892C68.2805 13.3792 69.5584 15.0454 71.4733 15.0454L71.4745 15.0492Z"
                fill="#164951"
              ></path>
              <path
                d="M0.5 1.8465V19.8826H18.5377V1.8465H0.5ZM17.1083 18.4548H11.9899V13.3364L7.04945 18.2769H2.10896V13.3364L7.04945 8.39595V13.3364H11.9899V8.39595H1.92945V3.27264H7.0478V8.391L11.9883 3.45051H16.9288V8.391L11.9883 13.3315H17.1066L17.1083 18.4548Z"
                fill="#164951"
              ></path>
            </svg>
          </a>
          <div className=" items-center  text-[15px] font-medium hidden md:flex ">
            <div className="xl:relative px-[17px] flex items-center space-x-2 relative">
              <a className="relative z-10  " href="">
                Why Setpoint?
              </a>
            </div>
            <div className="xl:relative px-[17px] flex items-center space-x-2 relative">
              <a className="relative z-10 " href="/#">
                Platform
              </a>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.36324 4.92549L4.87983 9.4089L0.396484 4.92549L1.24502 4.07697L4.87984 7.71184L8.51471 4.07697L9.36324 4.92549Z"
                  fill="#164951"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="relative z-10 items-end space-x-[9px] hidden md:flex ">

          {connectors.map((connector) => (
            <a
              className="btn btn-coral-simple !px-[12px] !py-[8px]"

              key={connector.id}
              onClick={() => connect({ connector })}
            >
              Connect Wallet
              {!connector.ready && ' (unsupported)'}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                ' (connecting)'}
            </a>
          ))}

        </div>

        <div className="md:hidden">
          <div className="relative z-[9999]">
            <div className="relative cursor-pointer top-0 w-[16px] h-[12px]">
              <span className="absolute h-[1.6px] w-full transition-all duration-200 bg-darkGreen top-[8%]">
              </span>
              <span className="absolute h-[1.6px] w-full transition-all duration-200 bg-darkGreen top-[92%]">
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="z-[99] bg-darkGreen text-white fixed w-screen h-screen mt-[-62px] transition-all duration-200 overflow-scroll translate-y-[-100vh]">
          <div className="border-b border-white mt-[62px]"></div>
          <div>
            <div className="px-[10px] py-[18px] space-y-[10px] items-center text-[26px] font-normal flex flex-col">
              <div className="w-full" >
                <div className="w-full rounded-[5px] bg-fadedGreen overflow-hidden">
                  <a className="relative w-full flex items-center space-x-6 justify-between z-10 px-5 py-[25px] transition-all duration-200 sm:hover:bg-white sm:hover:text-darkGreen" href="/why-setpoint/">Why Setpoint?</a>
                </div>
              </div>
              <div className="w-full" >
                <div className="w-full rounded-[5px] bg-fadedGreen overflow-hidden">
                  <a className="relative w-full flex items-center space-x-6 justify-between z-10 px-5 py-[25px] transition-all duration-200 sm:hover:bg-white sm:hover:text-darkGreen" href="/#">Platform<span className="transition-all duration-200 rotate-90"><svg className="w-full h-full max-w-[24px] max-h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FC9082"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2378 8.1591L16.8345 11.6159C17.0552 11.828 17.0552 12.172 16.8345 12.3841L13.2378 15.8409C13.0171 16.053 12.6592 16.053 12.4385 15.8409C12.2178 15.6288 12.2178 15.2849 12.4385 15.0727L15.0704 12.5432H6V11.4568H15.0704L12.4385 8.92728C12.2178 8.71515 12.2178 8.37122 12.4385 8.1591C12.6592 7.94697 13.0171 7.94697 13.2378 8.1591Z" fill="white"></path></svg></span></a>
                </div>
              </div>
            </div>
            <div className="px-[10px] mt-[28px] relative z-10 text-center items-center space-y-[10px] flex flex-col">
              <div className="block w-full" >
                <a className="block btn btn-coral-simple w-full max-w-[315px] mx-auto !py-4 border border-coral" href="/contact">Speak with us</a>
              </div>
            </div>
            <div className="px-[10px] my-8 text-center">
              <p className="!text-sm">© 2023 Setpoint</p>
            </div>
          </div>
        </div>
      </div>


    </header>
    //   <div className="text-center">
    //   {connectors.map((connector) => (
    //     <button
    //     className="btn btn-coral-simple !px-[12px] !py-[8px]"
    //       disabled={!connector.ready}
    //       key={connector.id}
    //       onClick={() => connect({ connector })}
    //     >
    //       {connector.name}
    //       {!connector.ready && ' (unsupported)'}
    //       {isLoading &&
    //         connector.id === pendingConnector?.id &&
    //         ' (connecting)'}
    //     </button>
    //   ))}

    //   {error && <div>{error.message}</div>}


    // </div>
  );
};
