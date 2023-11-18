import Link from "next/link";
import Image from "next/image";
import Button from "../design-system/button";

export default function Hero() {
  return (
    <section className="font-sans w-auto pb-16 pt-14 md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative dark:bg-black">
      <div className="z-40 flex items-center justify-center w-full">
        <div className="absolute min-w-[614px] min-h-[614px]">
          <Image
            src="/dark/utils/turbopack-hero-hexagons-dark.svg"
            height={614}
            width={614}
            alt=""
            className="hidden dark:block"
          />
          <Image
            src="/light/utils/turbopack-hero-hexagons-light.svg"
            height={614}
            width={614}
            alt=""
            className="dark:hidden block"
          />
        </div>
        <div className="absolute z-50 flex items-center justify-center w-64 h-64">
          <span className="gradients_glowColor gradients_glowSmall gradients_glow dark:opacity-100 opacity-40 w-32 h-32 rounded-full"></span>
        </div>
        <div className="w-[120px] z-50 mt-[-8.075px] mb-[-8.075px]">
          <Image
            src="/dark/utils/turbopack-hero-logo-dark.svg"
            height={136.15}
            width={120}
            alt=""
            className="hidden dark:block"
          />
          <Image
            src="light/utils/turbopack-hero-logo-light.svg"
            height={136.15}
            width={120}
            alt=""
            className="block dark:hidden"
          />
        </div>
      </div>
      <span className="absolute top-[-500px] dark:opacity-20 opacity-[0.15] w-[1000px] h-[1000px]  rounded-full gradients_glowConic gradients_glow"></span>
      <div className="absolute top-0 z-10 w-full h-48 dark:from-black from-white to-transparent bg-gradient-to-b"></div>
      <div className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6 opacity-100 transform-none">
        <svg
          alt="Turbopack"
          class="w-[160px] md:w-[200px] fill-black dark:fill-white"
          width="200"
          viewBox="0 0 485 49"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Turbopack logo</title>
          <path d="M51.1928 12.1277V1.56075H0.267822V12.1277H19.492V47.2659H31.9686V12.1277H51.1928Z"></path>
          <path d="M79.966 47.9662C95.6254 47.9662 104.219 40.0091 104.219 26.8959V1.56075H91.7424V25.6865C91.7424 33.0069 87.923 37.1446 79.966 37.1446C72.0089 37.1446 68.1895 33.0069 68.1895 25.6865V1.56075H55.7129V26.8959C55.7129 40.0091 64.3065 47.9662 79.966 47.9662Z"></path>
          <path d="M123.318 32.1157H135.731L145.534 47.2659H159.857L148.78 30.779C155.019 28.551 158.838 23.5858 158.838 16.8382C158.838 7.03519 151.518 1.56075 140.378 1.56075H110.841V47.2659H123.318V32.1157ZM123.318 22.249V12.0004H139.741C144.133 12.0004 146.552 13.9101 146.552 17.1565C146.552 20.212 144.133 22.249 139.741 22.249H123.318Z"></path>
          <path d="M164.643 47.2659H197.299C207.484 47.2659 213.34 42.4281 213.34 34.3437C213.34 28.9329 209.903 25.2409 205.829 23.5858C208.63 22.249 212.067 19.0662 212.067 14.0374C212.067 5.95303 206.338 1.56075 196.217 1.56075H164.643V47.2659ZM176.611 19.4482V11.6821H194.944C198.381 11.6821 200.291 13.0189 200.291 15.5651C200.291 18.1114 198.381 19.4482 194.944 19.4482H176.611ZM176.611 28.8056H196.089C199.463 28.8056 201.309 30.4607 201.309 32.9433C201.309 35.4259 199.463 37.0809 196.089 37.0809H176.611V28.8056Z"></path>
          <path d="M243.845 0.796875C227.868 0.796875 216.346 10.7909 216.346 24.4133C216.346 38.0358 227.868 48.0298 243.845 48.0298C259.823 48.0298 271.281 38.0358 271.281 24.4133C271.281 10.7909 259.823 0.796875 243.845 0.796875ZM243.845 11.6184C252.248 11.6184 258.55 16.5836 258.55 24.4133C258.55 32.2431 252.248 37.2083 243.845 37.2083C235.443 37.2083 229.141 32.2431 229.141 24.4133C229.141 16.5836 235.443 11.6184 243.845 11.6184Z"></path>
          <path d="M289.262 32.6887H305.876C317.016 32.6887 324.336 27.3415 324.336 17.1565C324.336 6.90788 317.016 1.56075 305.876 1.56075H276.785V47.2659H289.262V32.6887ZM289.262 22.3127V12.0004H305.176C309.632 12.0004 312.051 13.9101 312.051 17.1565C312.051 20.3393 309.632 22.3127 305.176 22.3127H289.262Z"></path>
          <path d="M341.036 1.56075L318.565 47.2659H331.806L335.943 38.6723H359.942L364.079 47.2659H377.765L355.358 1.56075H341.036ZM348.038 13.7827L355.167 28.6783H340.845L348.038 13.7827Z"></path>
          <path d="M375.141 24.4133C375.141 38.0358 386.535 48.0298 402.45 48.0298C415.181 48.0298 424.029 42.3007 427.53 33.0706L416.136 27.9781C414.353 33.3252 409.706 37.2083 402.45 37.2083C394.302 37.2083 387.872 32.2431 387.872 24.4133C387.872 16.5836 394.302 11.6184 402.45 11.6184C409.706 11.6184 414.353 15.5015 416.136 20.8486L427.53 15.7561C424.029 6.52594 415.181 0.796875 402.45 0.796875C386.535 0.796875 375.141 10.7909 375.141 24.4133Z"></path>
          <path d="M444.513 1.56075H432.037V47.2659H444.513V35.8715L452.661 28.551L468.512 47.2659H484.362L461.637 20.5303L482.771 1.56075H465.775L444.513 20.8486V1.56075Z"></path>
        </svg>
        <h1 className=" font-extrabold tracking-[-0.04em] leading-none text-[40px] md;text-5xl lg:text-[80px] max-w-lg md:max-w-xl lg:max-w-4xl text-center text-black dark:text-white">
          The Rust-powered successor to Webpack
        </h1>
        <p className="leading-snug dark:text-[#FFFFFFB2] text-[#00000080] text-[20px] lg:text-xl max-w-md md:max-w-xl lg:max-w-[640px] text-center">
          Turbopack is an incremental bundler optimized for JavaScript and
          TypeScript, written in Rust.
        </p>
      </div>
      <div className="z-40 flex flex-col items-center justify-center gap-5 px-6 opacity-100 transform-none">
        <div className="flex flex-col w-full gap-3 md:flex-row">
          <div className="relative w-full group">
            <Button size={"large"} fullWidth className="no-underline transition-all duration-300">
              <Link href="" className=" block py-3">
                Get Started
              </Link>
            </Button>
            <div className="absolute bg-red-100 w-full h-full top-0 -z-10 rounded-full transition-all duration-300 blur-xl group-hover:opacity-70 opacity-0 gradients_translatingGlow "></div>
          </div>
          <div className="relative w-full group">
            <Button size={"large"} variant={"outline"} fullWidth className="no-underline transition-all duration-300">
              <Link href="" className=" block py-3">
                GitHub
              </Link>
            </Button>
          </div>
        </div>
        <p className="tex-sm text-[#666666]">License: MPL-2.0</p>
      </div>
      <div className="relative w-full opacity-100 transform-none">
        <div className="absolute bottom-0 w-full dark:from-black from-white to-transparent h-72 bg-gradient-to-t"></div>
      </div>
    </section>
  );
}
