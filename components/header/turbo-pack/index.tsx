"use client";
import Link from "next/link";
import { useState } from 'react'

import { Popover,} from "@headlessui/react";
import ThemeSwitcher from "../../ThemeSwitcher";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  
  //   handle change function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <header>
      <div className="flex flex-col justify-center items-center w-full sticky top-0 z-20 overflow-x-hidden">
        <div className="nextra-nav-container-blur pointer-events-none absolute z-[-1] h-full w-full bg-white dark:bg-dark shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:shadow-[0_-1px_0_rgba(255,255,255,.1)_inset] contrast-more:shadow-[0_0_0_1px_#000] contrast-more:dark:shadow-[0_0_0_1px_#fff]"></div>
        <nav
          className="flex items-center justify-end w-full  max-w-[90rem] px-6 gap-2 h-16 mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center mr-auto ">
            <div className="block relative">
              <button className="flex">
                <svg
                  height="22"
                  viewBox="0 0 235 203"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:fill-white fill-black"
                >
                  <path
                    d="M117.082 0L234.164 202.794H0L117.082 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
            <svg
              data-testid="geist-icon"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="dark:text-[#333] text-[#eaeaea] ml-2 mr-1"
            >
              <path d="M16.88 3.549L7.12 20.451"></path>
            </svg>
            <Link href="" className="hover:opacity-75">
              <svg
                className=""
                width="120"
                height="32"
                viewBox="0 0 120 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Turborepo</title>
                <defs>
                  <linearGradient
                    id="logo-ring-gradient"
                    x1="15.0234"
                    y1="4.00556"
                    x2="3.64419"
                    y2="15.3847"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0096FF"></stop>
                    <stop offset="1" stopColor="#FF1E56"></stop>
                  </linearGradient>
                  <linearGradient id="gradient">
                    <stop offset="0%" stopColor="#000000"></stop>
                    <stop offset="25%" stopColor="#ffffff"></stop>
                    <stop offset="85%" stopColor="#ffffff"></stop>
                    <stop offset="100%" stopColor="#000000"></stop>
                  </linearGradient>
                  <mask id="logo-mask">
                    <rect
                      x="0"
                      y="0"
                      width="46"
                      height="26"
                      fill="url(#gradient)"
                      transform="translate(-8,0)"
                    ></rect>
                  </mask>
                </defs>
                <g mask="url(#logo-mask)" transform="translate(8,0)">
                  <g
                    className="z-0 relative "
                    opacity="1"
                    transform-origin="13.5600004196167px 13.5600004196167px"
                    // style="transform: none; transform-origin: 13.56px 13.56px;"
                    transform="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9443 10.4846C10.6829 10.4846 10.4709 10.6966 10.4709 10.958V16.2234C10.4709 16.4849 10.6829 16.6968 10.9443 16.6968H16.2097C16.4712 16.6968 16.6831 16.4849 16.6831 16.2234V10.958C16.6831 10.6966 16.4712 10.4846 16.2097 10.4846H10.9443ZM7.14628 6.72631C6.90676 6.72631 6.71263 6.92045 6.71263 7.15994V20.0215C6.71263 20.261 6.90676 20.4551 7.14628 20.4551H20.0078C20.2473 20.4551 20.4414 20.261 20.4414 20.0215V7.15994C20.4414 6.92045 20.2473 6.72631 20.0078 6.72631H7.14628Z"
                      className="dark:fill-white fill-black"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 13.8059V22.1684C2 22.7295 2.15656 23.254 2.42838 23.7007L5.44339 20.6857V13.8059H2ZM3.37481 24.664L6.36423 21.6745C6.38505 21.6758 6.40605 21.6765 6.42723 21.6765H13.0144V25.12H4.95147C4.37169 25.12 3.83094 24.9528 3.37481 24.664ZM14.3648 25.12H22.1684C23.7985 25.12 25.12 23.7985 25.12 22.1684V4.95147C25.12 3.32142 23.7985 2 22.1684 2H13.8059V5.44339H20.6927C21.236 5.44339 21.6765 5.88386 21.6765 6.42723V20.6927C21.6765 21.2361 21.236 21.6765 20.6927 21.6765H14.3648V25.12Z"
                      fill="url(#logo-ring-gradient)"
                    ></path>
                  </g>
                </g>
                <g
                  className="z-10 relative header-logo_desktopLogo__zIjld hidden md:flex"
                  transform="translate(8,0)"
                >
                  <path
                    d="M48.2623 11.2944V8.24418H33.5623V11.2944H39.1115V21.4374H42.713V11.2944H48.2623Z"
                    className="dark:fill-white fill-black"
                  ></path>
                  <path
                    d="M56.5679 21.6396C61.0882 21.6396 63.5688 19.3427 63.5688 15.5574V8.24418H59.9673V15.2083C59.9673 17.3214 58.8648 18.5158 56.5679 18.5158C54.271 18.5158 53.1685 17.3214 53.1685 15.2083V8.24418H49.567V15.5574C49.567 19.3427 52.0476 21.6396 56.5679 21.6396Z"
                    className="dark:fill-white fill-black"
                  ></path>
                  <path
                    d="M69.0819 17.0642H72.665L75.4947 21.4374H79.6291L76.4319 16.6783C78.2326 16.0352 79.3351 14.6019 79.3351 12.6542C79.3351 9.82443 77.222 8.24418 74.0064 8.24418H65.4804V21.4374H69.0819V17.0642ZM69.0819 14.2161V11.2577H73.8226C75.0905 11.2577 75.7887 11.8089 75.7887 12.7461C75.7887 13.6281 75.0905 14.2161 73.8226 14.2161H69.0819Z"
                    className="dark:fill-white fill-black"
                  ></path>
                  <path
                    d="M81.0108 21.4374H90.4372C93.3772 21.4374 95.0677 20.0409 95.0677 17.7073C95.0677 16.1454 94.0754 15.0797 92.8994 14.6019C93.7079 14.2161 94.7002 13.2973 94.7002 11.8457C94.7002 9.51206 93.0464 8.24418 90.1248 8.24418H81.0108V21.4374ZM84.4653 13.4076V11.1658H89.7573C90.7496 11.1658 91.3008 11.5517 91.3008 12.2867C91.3008 13.0217 90.7496 13.4076 89.7573 13.4076H84.4653ZM84.4653 16.1087H90.0881C91.0619 16.1087 91.5948 16.5864 91.5948 17.3031C91.5948 18.0197 91.0619 18.4974 90.0881 18.4974H84.4653V16.1087Z"
                    className="dark:fill-white fill-black"
                  ></path>
                  <path
                    d="M103.873 8.02368C99.2612 8.02368 95.9353 10.9086 95.9353 14.8408C95.9353 18.7731 99.2612 21.6579 103.873 21.6579C108.485 21.6579 111.793 18.7731 111.793 14.8408C111.793 10.9086 108.485 8.02368 103.873 8.02368ZM103.873 11.1474C106.299 11.1474 108.118 12.5807 108.118 14.8408C108.118 17.1009 106.299 18.5342 103.873 18.5342C101.448 18.5342 99.6287 17.1009 99.6287 14.8408C99.6287 12.5807 101.448 11.1474 103.873 11.1474Z"
                    className="dark:fill-white fill-black"
                  ></path>
                </g>
              </svg>
            </Link>
            <div className="header-logo_siteSwitcher absolute left-[50%] transform translate-x-[-50%]">
              <div className="flex relative items-center justify-between p-2 text-xl">
              <span className="flex h-[34px] w-[100px] flex-shrink-0 items-center rounded-[8px] border border-[#dedfde] dark:border-[#333333] p-1 duration-300 ease-in-out after:h-[24px] after:w-[44px] after:rounded-md dark:after:bg-[#333333] after:shadow-sm after:duration-300 after:border dark:after:border-[#333333] after:border-[#666666]/100 after:bg-gradient-to-b after:from-[#3286F1] after:to-[#C33AC3] after:opacity-20 dark:after:opacity-100 dark:after:bg-none indeterminate:after:hidden after:translate-x-[46px]"></span>
                <span className="z-50 absolute p-1 text-sm flex justify-between text-center w-[100px] text-[#666666] dark:text-[#888888] hover:text-black dark:hover:text-white">
                  <Link
                    href="/repo"
                    className="py-1 transition-colors duration-300 inline-block w-[50px] cursor-pointer hover:text-black dark:hover:text-white"
                   
                  >
                    Repo
                  </Link>
                  <Link
                    href="/"
                    className="py-1 transition-colors duration-300 inline-block w-[50px] cursor-pointer hover:text-black dark:hover:text-white text-black dark:text-white"
                  >
                    Pack
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <Popover.Group className="hidden md:flex desktop-navItems gap-x-5">
            <Link
              href="#"
              className="text-sm py-2 contrast-more:text-gray-700 text-gray-600  hover:text-gray-800 contrast-more:dark:text-gray-100 dark:text-gray-400   dark:hover:text-gray-200 cursor-pointer"
            >
              Docs
            </Link>
            <Link
              href="#"
              className="text-sm py-2 contrast-more:text-gray-700 text-gray-600  hover:text-gray-800 contrast-more:dark:text-gray-100 dark:text-gray-400   dark:hover:text-gray-200 cursor-pointer "
            >
              Blogs
            </Link>
            <Link
              href="#"
              className="text-sm py-2 contrast-more:text-gray-700 text-gray-600  hover:text-gray-800 contrast-more:dark:text-gray-100 dark:text-gray-400   dark:hover:text-gray-200 cursor-pointer "
            >
              Showcase
            </Link>
            <Link
              href="#"
              className="text-sm py-2 contrast-more:text-gray-700 text-gray-600  hover:text-gray-800 contrast-more:dark:text-gray-100 dark:text-gray-400   dark:hover:text-gray-200 cursor-pointer  "
            >
              Enterprise
            </Link>
            <div className=" md:w-64 min-w-[200px] relative">
              <div className="relative flex items-center text-gray-900 contrast-more:text-gray-800 dark:text-gray-300  contrast-more:dark:text-gray-300">
                <input
                  id="search"
                  name="search"
                  placeholder="Search documentation..."
                  type="search"
                  value={searchInput}
                  className="block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-black/[.05] dark:bg-gray-50/10 focus:bg-white dark:focus:bg-[hsla(0,0%,7%,.5)] placeholder:text-gray-500 dark:placeholder:text-gray-400 contrast-more:border contrast-more:border-current"
                  onChange={handleChange}
                />
                <kbd className="absolute my-1.5 select-none right-1.5 h-5 rounded bg-white px-1.5 font-mono text-[10px] text-medium text-gray-500 border dark:border-gray-100/20 dark:bg-[hsla(0,0%,7%,.5)] contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current items-center gap-1 pointer-events-none hidden sm:flex opacity-100">
                  CTRL K
                </kbd>
              </div>
            </div>
          </Popover.Group>
          <Link
            href=""
            className="hidden p-2 text-current sm:flex hover:opacity-75"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18">
              <title>GitHub</title>
              <path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
            </svg>
          </Link>
          <Link
            href=""
            className="hidden p-2 text-current sm:flex hover:opacity-75"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 5 30.67 23.25"
            >
              <title>Discord</title>
              <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path>
            </svg>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="nextra-hamburger -mr-2 rounded p-2 active:bg-gray-400/20 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="menu-btn relative flex flex-col gap-1 justify-center items-center w-10 h-20 cursor-pointer transition-all duration-500 ease-in-out">
              <div className={`menu-btn_burger w-[18px] h-[2px] bg-black dark:bg-white rounded shadow-md transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'transform rotate-45 translate-y-[2px]' : ''}`}></div>
              <div className={`menu-btn_burger w-[18px] h-[2px] bg-black dark:bg-white rounded shadow-md transition-all duration-500 ease-in-out  ${mobileMenuOpen ? 'hidden' : ''}` }></div>
              <div className={`menu-btn_burger w-[18px] h-[2px] bg-black dark:bg-white rounded shadow-md transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'transform -rotate-45 -translate-y-1 ' : ''}`}></div>

            </div>
          </button>
        </nav>
      </div>
      {/* mobile view */}
      <div
        className={` mx-auto  ${
          mobileMenuOpen
            ? "flex animate-slideInDown"
            : "hidden  "
        }`}
      >
        <div className="overflow-x-hidden">
          <aside className="flex flex-col z-40 w-screen overflow-y-auto py-6  motion-reduce:transform-none transform-gpu transition-all ease-in-out  max-md:[transform:translate3d(0,0,0)] md:hidden ">
            <div className="p-4 md:hidden ">
              <div className="relative md:w-64">
                <div className="relative flex items-center text-gray-900 contrast-more:text-gray-800 dark:text-gray-300  contrast-more:dark:text-gray-300">
                  <input
                    id="mobileSearch"
                    name="mobileSearch"
                    placeholder="Search documentation..."
                    type="search"
                    value={searchInput}
                    className="block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-black/[.05] dark:bg-gray-50/10 focus:bg-white dark:focus:bg-[hsla(0,0%,7%,.5)] placeholder:text-gray-500 dark:placeholder:text-gray-400 contrast-more:border contrast-more:border-current"
                    onChange={handleChange}
                  />
                  <kbd className="absolute my-1.5 select-none right-1.5 h-5 rounded bg-white px-1.5 font-mono text-[10px] text-medium text-gray-500 border dark:border-gray-100/20 dark:bg-[hsla(0,0%,7%,.5)] contrast-more:border-current contrast-more:text-current contrast-more:dark:border-current items-center gap-1 pointer-events-none hidden sm:flex opacity-100 cursor-pointer">
                    CTRL K
                  </kbd>
                </div>
              </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden p-4 grow md:h-screen"></div>
            <div className="sticky bottom-0 bg-white dark:bg-dark mx-4 py-4 shadow-[0_-12px_16px_#fff] flex items-center gap-2 dark:border-neutral-800 dark:shadow-[0_-12px_16px_#111] contrast-more:border-neutral-400 contrast-more:shadow-none contrast-more:dark:shadow-none border-t">
              <div className="grow flex flex-col">
                <ThemeSwitcher />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
